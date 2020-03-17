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

  public async postFile<T>(
    url: string,
    file: File,
    body: any = {}
  ): Promise<T> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      new Request(url, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          ...this.getHeaders()
        }
      })
    );

    this.handleError(response);

    return response.json();
  }

  private getHeaders(): any {
    const token = localStorage.getItem("token");
    const headers: any = {};

    if (token) {
      headers.Authorization = `Bearer ${token}`;
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
