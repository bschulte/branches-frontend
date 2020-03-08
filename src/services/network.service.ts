class NetworkService {
  public async get<T>(url: string): Promise<T> {
    const response = await fetch(url, { headers: this.getHeaders() });

    this.handleError(response);

    return response.json();
  }

  public async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(
      new Request(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...this.getHeaders()
        }
      })
    );

    this.handleError(response);

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

  private handleError(response: Response) {
    if (!response.ok) {
      console.log("Error with HTTP request: ", response);
      throw new Error(response.statusText);
    }
  }
}

export const networkService = new NetworkService();
