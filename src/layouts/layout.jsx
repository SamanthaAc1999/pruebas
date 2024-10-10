import { useLocation } from "react-router-dom";
import Navbar from "../components/Principal/Navbar";

export const Layout = (props) => {
  const { children } = props;
  const location = useLocation();  // Obtenemos la ruta actual

  // Verificamos si la ruta es '/'
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Mostrar Navbar solo si no estamos en la ruta '/' */}
      {!isHome && <Navbar />}
      
      {/* Mostrar el contenedor solo si no estamos en la ruta '/' */}
      {!isHome ? (
        <div className="pt-28 p-10 w-full min-h-screen h-full bg-[#F1F1F5]">
          {children}
        </div>
      ) : (
        // Si estamos en '/', mostramos directamente el contenido sin el div adicional
        <>
          {children}
        </>
      )}
    </>
  );
};
