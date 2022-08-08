import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";
import routes from "../routes";

const AboutContainer: React.FC = () => {
    return <div>
        <h3>AboutContainer</h3>
        <Outlet />
    </div>
}

export default AboutContainer;