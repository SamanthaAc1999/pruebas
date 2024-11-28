import { TablePagination } from '@mui/material';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import fetchApi from '../utils/fetchApi';
import { useSelector } from 'react-redux';
import { validacion } from '../utils/apiUtils';

// Componente de FiltroGuia con formulario y tabla
const FiltroGuia = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 10;
    const CardCode = useSelector((state) => state.auth.datos_Usuario.CARDCODE);
    const [data, setData] = useState([]);

    const getData = async () => {
        const validado = await validacion();
        if (validado === 1){
            const token = localStorage.getItem("token");
            const datos = await fetchApi({
                endPoint: `/purchaseorder/${CardCode}`,
                method: "GET",
                pagination: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer" +token
                }
            });
            if (datos.error){
                console.log("error")
                return;
            }
            pasoSiguiente(datos.datos)
        } else {
            console.log("error 2")
        }
    };

    const pasoSiguiente = (info) => {
        setData(info)
    };

    useEffect(() => {
        getData();
      }, []);

    // Datos de ejemplo para la tabla
    // const data = [
    //     {
    //         numeroGuia: '001',
    //         fechaEntrega: '2023-10-01',
    //         provincia: 'Azuay',
    //         ciudad: 'Cuenca',
    //         direccion: 'Calle A',
    //         cliente: 'Cliente 1',
    //         total: '100',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '002',
    //         fechaEntrega: '2023-10-02',
    //         provincia: 'Azuay',
    //         ciudad: 'Cuenca',
    //         direccion: 'Calle B',
    //         cliente: 'Cliente 2',
    //         total: '150',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '003',
    //         fechaEntrega: '2023-10-03',
    //         provincia: 'Pichincha',
    //         ciudad: 'Quito',
    //         direccion: 'Calle C',
    //         cliente: 'Cliente 3',
    //         total: '200',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '004',
    //         fechaEntrega: '2023-10-01',
    //         provincia: 'Pichincha',
    //         ciudad: 'Quito',
    //         direccion: 'Calle A',
    //         cliente: 'Cliente 4',
    //         total: '100',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '005',
    //         fechaEntrega: '2023-10-02',
    //         provincia: 'Guayas',
    //         ciudad: 'Guayaquil',
    //         direccion: 'Calle B',
    //         cliente: 'Cliente 5',
    //         total: '150',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '006',
    //         fechaEntrega: '2023-10-03',
    //         provincia: 'Guayas',
    //         ciudad: 'Guayaquil',
    //         direccion: 'Calle C',
    //         cliente: 'Cliente 6',
    //         total: '200',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '007',
    //         fechaEntrega: '2023-10-01',
    //         provincia: 'Tungurahua',
    //         ciudad: 'Ambato',
    //         direccion: 'Calle A',
    //         cliente: 'Cliente 7',
    //         total: '100',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '008',
    //         fechaEntrega: '2023-10-02',
    //         provincia: 'Tungurahua',
    //         ciudad: 'Ambato',
    //         direccion: 'Calle B',
    //         cliente: 'Cliente 8',
    //         total: '150',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '009',
    //         fechaEntrega: '2023-10-03',
    //         provincia: 'Azuay',
    //         ciudad: 'Cuenca',
    //         direccion: 'Calle C',
    //         cliente: 'Cliente 9',
    //         total: '200',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '010',
    //         fechaEntrega: '2023-10-01',
    //         provincia: 'Azuay',
    //         ciudad: 'Cuenca',
    //         direccion: 'Calle A',
    //         cliente: 'Cliente 10',
    //         total: '100',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '011',
    //         fechaEntrega: '2023-10-02',
    //         provincia: 'Guayas',
    //         ciudad: 'Guayaquil',
    //         direccion: 'Calle B',
    //         cliente: 'Cliente 11',
    //         total: '150',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '012',
    //         fechaEntrega: '2023-10-02',
    //         provincia: 'Guayas',
    //         ciudad: 'Guayaquil',
    //         direccion: 'Calle B',
    //         cliente: 'Cliente 12',
    //         total: '150',
    //         verificacion: false
    //     },
    //     {
    //         numeroGuia: '013',
    //         fechaEntrega: '2023-10-01',
    //         provincia: 'Azuay',
    //         ciudad: 'Cuenca',
    //         direccion: 'Calle A',
    //         cliente: 'Cliente 13',
    //         total: '100',
    //         verificacion: true
    //     },
    // ];
    // Función para manejar el cambio de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const imagenVerificacion = async () => {
        // Abrir SweetAlert para seleccionar una imagen
        const { value: file } = await Swal.fire({
            title: 'Cargar Imagen',
            input: 'file',
            inputAttributes: {
                accept: 'image/*',
                'aria-label': 'Cargar Imagen',
                style: 'background-color: white; shadow: none'
            },
            showCancelButton: true,
            confirmButtonColor: "#F9AD03",
            confirmButtonText: "Cargar",
            cancelButtonColor: "#e00000",
            cancelButtonText: 'Cancelar'
        });

        if (file) {
            // Crear un objeto FormData para enviar la imagen
            const formData = new FormData();
            formData.append('imagen', file);

            // Hacer un fetch para enviar la imagen
            try {
                const response = await fetch('TU_URL_API_AQUI', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Imagen enviada exitosamente:', data);
                } else {
                    console.error('Error al enviar la imagen:', response.statusText);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        } else {
            console.log('No se seleccionó ninguna imagen.');
        }
    };


    return (
        <div className="w-full">
            {/* Formulario de filtros */}
            <div className="bg-white w-full p-6 rounded-lg shadow-lg mb-6">
                <form className="flex flex-wrap justify-between items-end gap-4">
                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="numeroGuia" className="block text-[#434E52] font-semibold mb-2">
                            N° Guía
                        </label>
                        <input
                            type="text"
                            id="numeroGuia"
                            className="w-full px-4 py-2 bg-[#fff] border border-[#D0D0D4] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese el N° de Guía"
                        />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="ciudad" className="block text-[#434E52] font-semibold mb-2">
                            Ciudad
                        </label>
                        <input
                            type="text"
                            id="ciudad"
                            className="w-full px-4 py-2 bg-[#fff] border border-[#D0D0D4] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese la Ciudad"
                        />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="codigoCliente" className="block text-[#434E52] font-semibold mb-2">
                            Código Cliente
                        </label>
                        <input
                            type="text"
                            id="codigoCliente"
                            className="w-full px-4 py-2 bg-[#fff] border border-[#D0D0D4] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese el Código del Cliente"
                        />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="desde" className="block text-[#434E52] font-semibold mb-2">
                            Desde
                        </label>
                        <input
                            type="date"
                            id="desde"
                            className="w-full px-4 py-2 bg-[#fff] border border-[#D0D0D4] text-[#a9a3af] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label htmlFor="hasta" className="block text-[#434E52] font-semibold mb-2">
                            Hasta
                        </label>
                        <input
                            type="date"
                            id="hasta"
                            className="w-full px-4 py-2 bg-[#fff] border border-[#D0D0D4] text-[#a9a3af] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex-1 min-w-[200px] justify-end">
                        <button
                            type="button"
                            className="bg-[#E00000] text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
                        >
                            Filtrar
                        </button>
                    </div>
                </form>
            </div>

            {/* Tabla responsive */}
            <div className="bg-white w-full p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="w-full text-sm/[18px] text-left text-gray-500">
                    <thead className="text-sm/[18px] text-[#3B8DBD] uppercase bg-gray-50">
                        <tr className='border-b border-[#C3C3C3]'>
                            <th className="px-4 py-3">APR</th>
                            <th className="px-4 py-2">N° Guía</th>
                            <th className="px-4 py-2">Fecha Entrega</th>
                            <th className="px-4 py-2">Provincia</th>
                            <th className="px-4 py-2">Ciudad</th>
                            <th className="px-4 py-2">Dirección</th>
                            <th className="px-4 py-2">Cliente</th>
                            <th className="px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => {
                            const disableApr = row.verificacion
                            return (
                                <tr key={index} className="bg-white text-[#151635] border-b border-[#C3C3C3] hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => imagenVerificacion()}
                                            style={{
                                                cursor: disableApr ? "not-allowed" : "pointer",
                                                opacity: disableApr ? 0.3 : 1,
                                            }}
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.59843 4.48666C7.86525 3.17678 9.03088 2.25 10.3663 2.25H13.6337C14.9691 2.25 16.1347 3.17678 16.4016 4.48666C16.4632 4.78904 16.7371 5.01086 17.022 5.01086H17.0384L17.0548 5.01157C18.4582 5.07294 19.5362 5.24517 20.4362 5.83558C21.0032 6.20757 21.4909 6.68617 21.871 7.24464C22.3439 7.93947 22.5524 8.73694 22.6524 9.70145C22.75 10.6438 22.75 11.825 22.75 13.3211V13.4062C22.75 14.9023 22.75 16.0835 22.6524 17.0258C22.5524 17.9903 22.3439 18.7878 21.871 19.4826C21.4909 20.0411 21.0032 20.5197 20.4362 20.8917C19.7327 21.3532 18.9262 21.5567 17.948 21.6544C16.9903 21.75 15.789 21.75 14.2634 21.75H9.73657C8.21098 21.75 7.00967 21.75 6.05196 21.6544C5.07379 21.5567 4.26731 21.3532 3.56385 20.8917C2.99682 20.5197 2.50905 20.0411 2.12899 19.4826C1.65612 18.7878 1.44756 17.9903 1.34762 17.0258C1.24998 16.0835 1.24999 14.9023 1.25 13.4062V13.3211C1.24999 11.825 1.24998 10.6438 1.34762 9.70145C1.44756 8.73694 1.65612 7.93947 2.12899 7.24464C2.50905 6.68617 2.99682 6.20757 3.56385 5.83558C4.46383 5.24517 5.5418 5.07294 6.94523 5.01157L6.96161 5.01086H6.978C7.26288 5.01086 7.53683 4.78905 7.59843 4.48666ZM10.3663 3.75C9.72522 3.75 9.18905 4.19299 9.06824 4.78607C8.87258 5.74659 8.021 6.50186 6.99633 6.51078C5.64772 6.57069 4.92536 6.73636 4.38664 7.08978C3.98309 7.35452 3.63752 7.6941 3.36906 8.08857C3.09291 8.49435 2.92696 9.01325 2.83963 9.85604C2.75094 10.7121 2.75 11.8156 2.75 13.3636C2.75 14.9117 2.75094 16.0152 2.83963 16.8712C2.92696 17.714 3.09291 18.2329 3.36906 18.6387C3.63752 19.0332 3.98309 19.3728 4.38664 19.6375C4.80417 19.9114 5.33844 20.0756 6.20104 20.1618C7.07549 20.2491 8.20193 20.25 9.77778 20.25H14.2222C15.7981 20.25 16.9245 20.2491 17.799 20.1618C18.6616 20.0756 19.1958 19.9114 19.6134 19.6375C20.0169 19.3728 20.3625 19.0332 20.6309 18.6387C20.9071 18.2329 21.073 17.714 21.1604 16.8712C21.2491 16.0152 21.25 14.9117 21.25 13.3636C21.25 11.8156 21.2491 10.7121 21.1604 9.85604C21.073 9.01325 20.9071 8.49435 20.6309 8.08857C20.3625 7.6941 20.0169 7.35452 19.6134 7.08978C19.0746 6.73636 18.3523 6.57069 17.0037 6.51078C15.979 6.50186 15.1274 5.74659 14.9318 4.78607C14.8109 4.19299 14.2748 3.75 13.6337 3.75H10.3663ZM12 10.75C10.7574 10.75 9.75 11.7574 9.75 13C9.75 14.2426 10.7574 15.25 12 15.25C13.2426 15.25 14.25 14.2426 14.25 13C14.25 11.7574 13.2426 10.75 12 10.75ZM8.25 13C8.25 10.9289 9.92893 9.25 12 9.25C14.0711 9.25 15.75 10.9289 15.75 13C15.75 15.0711 14.0711 16.75 12 16.75C9.92893 16.75 8.25 15.0711 8.25 13ZM17.25 10C17.25 9.58579 17.5858 9.25 18 9.25H19C19.4142 9.25 19.75 9.58579 19.75 10C19.75 10.4142 19.4142 10.75 19 10.75H18C17.5858 10.75 17.25 10.4142 17.25 10Z" fill="#1C274C" />
                                        </svg>
                                    </td>
                                    <td className="px-4 py-2">{row.numeroGuia}</td>
                                    <td className="px-4 py-2">{row.fechaEntrega}</td>
                                    <td className="px-4 py-2">{row.provincia}</td>
                                    <td className="px-4 py-2">{row.ciudad}</td>
                                    <td className="px-4 py-2">{row.direccion}</td>
                                    <td className="px-4 py-2">{row.cliente}</td>
                                    <td className="px-4 py-2">${row.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <TablePagination
                    component="div"
                    // count={cantItems}
                    count={13}
                    rowsPerPage={rowsPerPage}
                    page={currentPage}
                    onPageChange={handlePageChange}
                    rowsPerPageOptions={[]}
                />
            </div>
        </div>
    );
};

export default FiltroGuia;
