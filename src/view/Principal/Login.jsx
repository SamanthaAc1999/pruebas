import logo from '../../assets/images/logo.png';
import login from '../../assets/images/login.png';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full flex">
            {/* Mitad izquierda (contenedor vacío) */}
            <div className="hidden md:block w-full md:w-7/12 bg-gray-200">
                <img src={login} alt="Logo" className="h-screen w-full object-cover" />
            </div>
            {/* Mitad derecha (Login Form) */}
            <div className="w-5/12 flex flex-col justify-center items-center bg-white p-8">
                {/* Logo */}
                <div className="mb-8">
                    <img src={logo} alt="Logo" />
                </div>
                {/* Formulario de Login */}
                {/* Input Usuario */}
                <div className="mb-6 w-8/12">
                    <label
                        className="block text-[#151635] text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Usuario
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Nombre de usuario"
                    />
                </div>

                {/* Input Contraseña */}
                <div className="mb-6 w-8/12">
                    <label
                        className="block text-[#151635]  text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="***********"
                    />
                </div>

                {/* Botón de Ingresar */}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => navigate('/produccion')}
                    >
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
