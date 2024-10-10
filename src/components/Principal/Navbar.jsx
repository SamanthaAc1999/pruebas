import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; 

const Navbar = () => {
  const navigate = useNavigate();

  const rol = "logistica";

  let displayName = 'Vista';
  if (rol === 'despachador') {
    displayName = 'GUÍAS DE REMISIÓN';
  } else if (rol === 'logistica') {
    displayName = 'FACTURAS';
  } else if (rol === 'productiva') {
    displayName = 'TABLERO DE PRODUCTOS';
  }

  // Función para salir
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("expiracion");
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 shadow-md z-50">
      <div className="text-[#17224F] font-bold text-lg sm:text-xl">
        {displayName}
      </div>

      <div className="cursor-pointer" onClick={handleLogout}>
        {/* <img 
          src={logo} 
          alt="Logo" 
          className="h-8" 
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
