import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Tienda from "../assets/images/mega4.png";
import LogoFinal from "../assets/images/mega.avif";
import { ReactComponent as IconHome } from "../assets/iconos/home.svg";
import { ReactComponent as IconCompras } from "../assets/iconos/carritoCompra.svg";
import { ReactComponent as IconCheckDocumento } from "../assets/iconos/checkDocumento.svg";
import { ReactComponent as IconStartDocumento } from "../assets/iconos/startDocumento.svg";
import { ReactComponent as IconMaletinCompras } from "../assets/iconos/notasCredito.svg";
import { ReactComponent as IconEtiquetasCompras } from "../assets/iconos/etiquetaPrecio.svg";
import { ReactComponent as IconDocumento } from "../assets/iconos/documento.svg";
import { ReactComponent as IconUserSecurity } from "../assets/iconos/seguridadUsuario.svg";
import { ReactComponent as IconContraseña } from "../assets/iconos/contraseña.svg";
import { ReactComponent as IconFileAdd } from "../assets/iconos/carpetaAdd.svg";
import { ReactComponent as IconStart } from "../assets/iconos/start.svg";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const permissions = useSelector((state) => state.auth.permissions);
  const location = useLocation();

  const groupedPermissions = groupBy(
    permissions.filter((item) => item.permiso && item.menu),
    "grupo"
  );

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  // const handleLinkClick = (group, ruta) => {
  //   if (onRouteChange) {
  //     onRouteChange(group, ruta);
  //   }
  // };

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white shadow-lg overflow-y-auto transition-all duration-300 ease-in-out z-[1050] ${
        isExpanded ? "w-64" : "w-16"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center py-4">
        <img src={LogoFinal} alt="Logo" className="h-10" />
        <span
          className={`ml-2 text-black font-semibold transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={Tienda} className="h-10" alt="complemento" />
        </span>
      </div>

      {/* Permissions Section */}
      <div>
        {Object.keys(groupedPermissions).length > 0 ? (
          Object.keys(groupedPermissions).map((group) => (
            <div key={group}>
              <label
                className={`text-gray-700 uppercase text-sm font-bold px-4 py-2 bg-gray-100 transition-all duration-300 ${
                  isExpanded ? "block" : "hidden"
                }`}
              >
                {isExpanded ? group : "-"}
              </label>
              <nav className="mt-2">
                <ul className="space-y-2">
                  {groupedPermissions[group].map((perm) => (
                    <li key={perm.nombre}>
                      <Link
                        to={perm.ruta}
                        className={`flex items-center space-x-2 p-2 rounded-md transition-colors duration-300 hover:bg-gray-200 ${
                          location.pathname === perm.ruta ? "bg-gray-300" : ""
                        }`}
                        // onClick={() => handleLinkClick(group, perm.nombre)}
                      >
                        <span className={`text-lg`}>
                          {getIcon(perm.ruta)}
                        </span>
                        <span
                          className={`transition-opacity duration-300 ${
                            isExpanded ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {perm.nombre}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No permissions available</p>
        )}
      </div>
    </div>
  );
};

// Group permissions by category
const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

// Return the correct icon based on the route
const getIcon = (ruta) => {
  switch (ruta) {
    case "/home":
      return <IconHome />;
    case "/ordencompra":
      return <IconCompras />;
    case "/ordenes":
    case "/mesatrabajo":
      return <IconCheckDocumento />;
    case "/enprogreso":
      return <IconStartDocumento />;
    case "/mesatrabajodevoluciones":
    case "/devoluciones":
      return <IconMaletinCompras />;
    case "/mesatrabajoprecio":
    case "/actualizacionprecio":
      return <IconEtiquetasCompras />;
    case "/actualizacioninformacion":
      return <IconDocumento />;
    case "/actualizaciondatos":
      return <IconUserSecurity />;
    case "/configuracion":
      return <IconContraseña />;
    case "/nuevoproducto":
      return <IconFileAdd />;
    default:
      return <IconStart />;
  }
};

export default Sidebar;
