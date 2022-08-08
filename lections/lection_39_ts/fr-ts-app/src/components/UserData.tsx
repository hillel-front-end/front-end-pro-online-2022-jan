import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import routes from "../routes";

const UserData: React.FC = () => {
    const { userId } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    

    return <div onClick={() => {
        searchParams.append('v1', 'some value')
        navigate(routes.ABOUT + '?' + searchParams.toString());
    }}>User id: {userId}</div>
}

export default UserData;