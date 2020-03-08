class NetworkService {
  public async get<T>(url: string): Promise<T> {
    const response = await fetch(url, { headers: this.getHeaders() });

    if (!response.ok) {
      console.log("Error with GET request: ", response);
      throw new Error(response.statusText);
    }

    return response.json();
  }

  public async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(
      new Request(url, { method: "POST", body, headers: this.getHeaders() })
    );

    if (!response.ok) {
      console.log("Error with POST request: ", response);
      throw new Error(response.statusText);
    }

    return response.json();
  }

  private getHeaders(): Headers {
    const headers = new Headers();
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  }
}

export const networkService = new NetworkService();
