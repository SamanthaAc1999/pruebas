import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export default function Notfound() {
    const navigate = useNavigate();
    return (
        <>
        <div className='flex flex-col bg-white p-6 h-full items-center justify-center gap-4'>
            <h1 className='text-[#434E52] font-semibold mb-2'>NOT FOUND VIEW</h1>
            <p className='text-[#434E52] font-semibold mb-2'>La página que estas buscando, posiblemente no exista o esté en mantenimiento</p>
            <img
                src={logo}
                alt="Logo"
                className="h-8"
            />
            <button 
            type="button"
            className="bg-[#E00000] text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
            onClick={() => navigate('/')}
            >
                Regresar al Inicio
            </button>
            </div>
        </>
    );
}