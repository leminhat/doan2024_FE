import { Navigate } from "react-router-dom";


const PrivateRoute = ({ element: Element }) => {

    console.log(localStorage.getItem("role"))
    if (localStorage.getItem("role") == "ROLE_ADMIN") {
        return <Element />;
    } else {
        alert("Bạn không có quyền truy cập vào trang này!");
        return <Navigate to="/" replace />;
    }
};

export default PrivateRoute;