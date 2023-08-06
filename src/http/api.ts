import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { DefaultSession, getServerSession } from 'next-auth'
import { API_ENDPOINTS } from './endPoint'

const API = process.env.SERVER_API || 'http://localhost:5000/api'
const FILE_API = process.env.SERVER_FILES_API || 'http://localhost:5000/cyberpolygon-files'
const baseHeaders = { 'ngrok-skip-browser-warning': 'true', 'Content-Type': 'application/json', credentials: 'include' }

const authFetch = async (url: string, config: RequestInit = {}): Promise<Response> => {
  // request interceptor
  const session = await getServerSession(nextAuthOptions)
  config.headers = { ...config.headers, Authorization: `Bearer ${session?.user?.accessToken}` }

  // request
  let response = await fetch(url, config)

  // response interceptor
  if (!response.ok && response.status === 401) {
    // refresh & request
    const refreshResponse = await fetch(API + API_ENDPOINTS.refresh, { credentials: 'include' })
    if (session?.user) session.user = await refreshResponse.json()
    config.headers = { ...config.headers, Authorization: `Bearer ${session?.user?.accessToken}` }
    response = await fetch(url, config)
  }
  return response
}

// ;async (error) => {
//     try {
//       const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
//       localStorage.setItem('token', response.data.accessToken)
//       return $api.request(originalRequest)
//     } catch (e) {
//       console.log(e)
//       console.log('НЕ АВТОРИЗОВАН')
//     }
//   }
//   throw error
// }

class HttpClient {
  private baseURL: string
  private baseHeaders?: HeadersInit

  constructor(baseURL: string, baseHeaders?: HeadersInit) {
    ;(this.baseURL = baseURL), (this.baseHeaders = baseHeaders)
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
        message: data.message || 'Something went wrong',
        status: response.status,
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

    return this._handleResponse(response)
  }

  async post(url: string, data: any, headers?: HeadersInit) {
    const response = await authFetch(this.baseURL + url, {
      method: 'POST',
      headers: {
        ...this.baseHeaders,
        ...headers,
      },
      body: JSON.stringify(data),
    })

    return this._handleResponse(response)
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

    return this._handleResponse(response)
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

    return this._handleResponse(response)
  }

  async download(url: string): Promise<Blob> {
    const response = await authFetch(FILE_API + url)

    if (!response.ok) {
      throw {
        message: 'Failed to download file.. Try again later',
        status: response.status,
      }
    }

    return await response.blob()
  }

  async sendForm(url: string, data: FormData, method: string = 'POST') {
    const response = await authFetch(url, {
      method,
      body: data,
    })

    return this._handleResponse(response)
  }
}

const $api = new HttpClient(API, baseHeaders)

export default $api
