import { $refresh } from '@/actions/refresh'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { baseHeaders } from './baseHeaders'

const API = process.env.SERVER_API || 'http://localhost:5000/api'

const authFetch = async (url: string, config: RequestInit = {}): Promise<Response> => {
  // request interceptor
  config.headers = { ...config.headers, Authorization: `Bearer ${cookies().get('hash')?.value}` }

  // request
  let response = await fetch(url, config)

  // response interceptor
  if (!response.ok && response.status === 401) {
    // refresh & request
    response = await $refresh()
      .then(() => {
        config.headers = { ...config.headers, Authorization: `Bearer ${cookies().get('hash')?.value}` }
        return fetch(url, config)
      })
      .catch(() => {
        redirect('/logReg/login')
      })
  }

  if (!response.ok && response.status === 401) {
    redirect('/logReg/login')
  }

  return response
}

class HttpClient {
  private baseURL: string
  private baseHeaders?: HeadersInit
  private sendFormHeaders?: HeadersInit

  constructor(baseURL: string, baseHeaders: HeadersInit = {}) {
    ;(this.baseURL = baseURL), (this.baseHeaders = baseHeaders)
    this.sendFormHeaders = {}
    for (const key in baseHeaders) {
      if (key !== 'Content-Type') {
        this.sendFormHeaders[key] = baseHeaders[key]
      }
    }
  }

  private async _handleResponse(response: Response): Promise<{ data: any; status: number }> {
    const data = await response.json()

    if (response.ok) {
      return {
        data,
        status: response.status,
      }
    } else {
      throw {
        message: { text: data.message || 'Something went wrong', status: response.status },
      }
    }
  }

  async get(url: string, headers?: HeadersInit) {
    const response = await authFetch(this.baseURL + url, {
      method: 'GET',
      headers: {
        ...this.baseHeaders,
        ...headers,
      },
    })

    return await this._handleResponse(response)
  }

  async post(url: string, data: any, headers?: HeadersInit) {
    const response = await authFetch(this.baseURL + url, {
      method: 'POST',
      headers: {
        ...this.baseHeaders,
        ...headers,
      },
      body: JSON.stringify(data),
      // body: data
    })

    return await this._handleResponse(response)
  }

  async put(url: string, data: any, headers?: HeadersInit) {
    const response = await authFetch(this.baseURL + url, {
      method: 'PUT',
      headers: {
        ...this.baseHeaders,
        ...headers,
      },
      body: JSON.stringify(data),
    })

    return await this._handleResponse(response)
  }

  async delete(url: string, data?: any, headers?: HeadersInit) {
    const response = await authFetch(this.baseURL + url, {
      method: 'DELETE',
      headers: {
        ...this.baseHeaders,
        ...headers,
      },
      body: data,
    })

    return await this._handleResponse(response)
  }

  async sendForm(url: string, data: FormData, method: string = 'POST') {
    const response = await authFetch(this.baseURL + url, {
      method,
      headers: {
        ...this.sendFormHeaders,
      },
      body: data,
    })

    return await this._handleResponse(response)
  }
}

const $api = new HttpClient(API, baseHeaders)

export default $api
