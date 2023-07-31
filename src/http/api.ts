const API = process.env.SERVER_API || 'http://localhost:5000/api'
const FILE_API = process.env.SERVER_FILES_API || 'http://localhost:5000/cyberpolygon-files'

class HttpClient {
  private baseURL: string
  private baseHeaders: HeadersInit

  constructor(baseURL: string, baseHeaders?: HeadersInit) {
    ;(this.baseURL = baseURL),
      (this.baseHeaders = { 'ngrok-skip-browser-warning': 'true', 'Content-Type': 'application/json', ...baseHeaders })
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
    const response = await fetch(this.baseURL + url, {
      method: 'GET',
      headers: {
        ...this.baseHeaders,
        ...headers,
      },
    })

    return this._handleResponse(response)
  }

  async post(url: string, data: any, headers?: HeadersInit) {
    const response = await fetch(this.baseURL + url, {
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
    const response = await fetch(this.baseURL + url, {
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
    const response = await fetch(this.baseURL + url, {
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
    const response = await fetch(FILE_API + url)

    if (!response.ok) {
      throw {
        message: 'Failed to download file.. Try again later',
        status: response.status,
      }
    }

    return await response.blob()
  }

  async sendForm(url: string, data: FormData, method: string = 'POST') {
    const response = await fetch(url, {
      method,
      body: data,
    })

    return this._handleResponse(response)
  }
}

const $api = new HttpClient(API)

export default $api
