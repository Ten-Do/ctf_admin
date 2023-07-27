const API = process.env.SERVER_API || 'http://localhost:5000/api'

class HttpClient {
  private baseURL: string
  private baseHeaders: HeadersInit

  constructor(
    baseURL: string,
    baseHeaders: HeadersInit = { 'Content-Type': 'application/json', 'ngrok-skip-browser-warning': 'true' },
  ) {
    ;(this.baseURL = baseURL), (this.baseHeaders = baseHeaders)
  }

  private async _handleResponse(response: Response) {
    const data = await response.json()

    if (response.ok) {
      return {
        data,
        status: response.status,
      }
    } else {
      throw {
        error: data.message || 'Something went wrong',
        status: response.status,
      }
    }
  }

  async get(url: string, headers: HeadersInit = {}) {
    const response = await fetch(this.baseURL + url, {
      method: 'GET',
      headers: {
        ...this.baseHeaders,
        ...headers,
      },
    })

    return this._handleResponse(response)
  }

  async post(url: string, data: any, headers: HeadersInit = {}) {
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

  async put(url: string, data: any, headers: HeadersInit = {}) {
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

  async delete(url: string, headers: HeadersInit = {}) {
    const response = await fetch(this.baseURL + url, {
      method: 'DELETE',
      headers: {
        ...this.baseHeaders,
        ...headers,
      },
    })

    return this._handleResponse(response)
  }
}

const $api = new HttpClient(API)

export default $api
