export interface APILoginPayload {
    login: string;
    password: string;
}

export interface APILoginResponse {
    status: 'Success' | 'Reject'
}

class APIService {
    host =  'http://localhost:9555'

    login(payload: APILoginPayload): Promise<APILoginResponse> {
        return fetch(`${this.host}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json());
    }
}

export default new APIService();