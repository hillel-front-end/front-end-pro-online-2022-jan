import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIService from "../../services/APIService";
import UserService from "../../services/UserService";

const LoginPage: React.FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isError, setErrorStatus] = useState<boolean>(false);
    const navigate = useNavigate();

    const onLogin = useCallback(() => {
        console.log(login, password);

        APIService
            .login({login, password})
            .then(resp => {
                if (resp.status === 'Success') {
                    UserService.putToStorage(resp);
                    navigate('/home');

                    return;
                }

                if (resp.status === 'Reject') {
                    setErrorStatus(true);
                    UserService.deleteFromStorage();
                    setLogin('');
                    setPassword('');

                    setTimeout(() => setErrorStatus(false), 3000);
                }
            });

    }, [login, password]);

    return <div>
        <h3>LoginPage</h3>

        <div>
            Login <br />
            <input type="text" value={login} onChange={ (event) => setLogin(event.target.value) } />
            <br />
            <br />
            Password <br />
            <input type="text" value={password} onChange={ (event) => setPassword(event.target.value) }  />
            <br />
            <br />
            <button onClick={onLogin}>Login</button>
            <br />
            <br />
            {isError && <>
                Some error exist
            </>}
        </div>
    </div>
}

export default LoginPage;