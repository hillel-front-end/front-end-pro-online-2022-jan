import { APILoginResponse } from "./APIService";

class UserService {
    putToStorage(payload: APILoginResponse) {
        localStorage.setItem('user', JSON.stringify({
            id: '',
            status: payload.status
        }));
    }

    deleteFromStorage() {
        localStorage.removeItem('user');
    }
}

export default new UserService();