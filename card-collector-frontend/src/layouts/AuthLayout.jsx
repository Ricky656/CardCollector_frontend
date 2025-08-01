import { Outlet } from "react-router";
import AuthController from "../Components/Util/AuthController";

export default function AuthLayout(){
    return(
        <AuthController>
            <Outlet />
        </AuthController>
    )
}