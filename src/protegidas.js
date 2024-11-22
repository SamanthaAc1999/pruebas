import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import DotSpinner from "./components/Elements/DotSpinner";

const PrivateRoute = () => {
    const permissions = useSelector((state) => state.auth.permissions);
    const token = localStorage.getItem("token");
    const location = useLocation();
    const { pathname } = location;
    const permisoEncontrado = permissions.find(permiso => permiso.ruta === pathname);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isDifferent = !permissions.some(permission =>
            permission.nombre === "" &&
            permission.ruta === "" &&
            permission.permiso === true &&
            permission.menu === true
        );
        if (isDifferent) {
            setLoading(false);
        }
    }, [permissions]);

    if (loading) {
        return <DotSpinner />
    }
    if (!token) {
        return <Navigate to={"/"} />
    }
    if (!permisoEncontrado || !permisoEncontrado.permiso) {
        return <Navigate to={'/denied'} />;
    }
    return <Outlet />;
}

export default PrivateRoute;