export class NetworkService {
  async jsonGet(url) {
    const response = await fetch({ url, method: "GET" });

    if (!response.ok) {
      console.log("Error with GET request: ", response);
      return null;
    }

    return response.json();
  }

  async jsonPost(url, body) {
    const response = await fetch({ url, body });

    if (!response.ok) {
      console.log("Error with POST request: ", response);
      return null;
    }

    return response.json();
  }

  _getHeaders() {
    const token = localStorage.getItem("token");

    return { Authorization: `Bearer ${token}` };
  }
}
