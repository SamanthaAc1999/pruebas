import { TablePagination } from '@mui/material';
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import Modal from '../components/Modal';

const Facturas = () => {
  // Inicializar el estado con los datos
  const [datos, setDatos] = useState([]);
  const [selectAll, setSelectAll] = useState(false); // Controlar el checkbox de encabezado
  const [currentPage, setCurrentPage] = useState(0);
  const [codigo, setCodigo] = useState(0);
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const today = new Date();
  const [inicio, setInicio] = useState(formatDate(today));
  const [fin, setFin] = useState(formatDate(today));
  const rowsPerPage = 10;

  // Datos de ejemplo para la tabla
  const data = [
    {
      numeroGuia: '001',
      fechaEntrega: '2023-10-01',
      provincia: 'Azuay',
      ciudad: 'Cuenca',
      direccion: 'Calle A',
      cliente: 'Cliente 1',
      total: '100',
      verificacion: false,
    },
    {
      numeroGuia: '002',
      fechaEntrega: '2023-10-02',
      provincia: 'Azuay',
      ciudad: 'Cuenca',
      direccion: 'Calle B',
      cliente: 'Cliente 2',
      total: '150',
      verificacion: false,
    },
    {
      numeroGuia: '003',
      fechaEntrega: '2023-10-03',
      provincia: 'Pichincha',
      ciudad: 'Quito',
      direccion: 'Calle C',
      cliente: 'Cliente 3',
      total: '200',
      verificacion: false,
    },
    {
      numeroGuia: '004',
      fechaEntrega: '2023-10-01',
      provincia: 'Pichincha',
      ciudad: 'Quito',
      direccion: 'Calle A',
      cliente: 'Cliente 4',
      total: '100',
      verificacion: false,
    },
    {
      numeroGuia: '005',
      fechaEntrega: '2023-10-02',
      provincia: 'Guayas',
      ciudad: 'Guayaquil',
      direccion: 'Calle B',
      cliente: 'Cliente 5',
      total: '150',
      verificacion: false,
    }
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCodigo = (e) => {
    const docNum = e.target.value;
    if (!isNaN(docNum)) {
      setCodigo(docNum);
    } else {
      setCodigo(1);
    }
  };

  const handleInicio = (e) => {
    const selectedDate = new Date(e.target.value + "T00:00:00");
    setInicio(formatDate(selectedDate));
  };

  const handleFin = (e) => {
    const selectedDate = new Date(e.target.value + "T00:00:00");
    setFin(formatDate(selectedDate));
  };

  // Al cargar el componente, inicializamos el estado con los datos
  useEffect(() => {
    setDatos(data);
  }, []);

  // Función para manejar el cambio de página
  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Función para manejar los cambios de checkbox individuales
  const handleCheckboxChange = (event, row) => {
    const isChecked = event.target.checked;
    const actualizados = datos.map((item) =>
      item.numeroGuia === row.numeroGuia ? { ...item, verificacion: isChecked } : item
    );
    setDatos(actualizados);

    // Verificar si todos los elementos están seleccionados
    const todosSeleccionados = actualizados.every((item) => item.verificacion === true);
    setSelectAll(todosSeleccionados);
  };

  // Función para manejar el checkbox de seleccionar todos
  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    const actualizados = datos.map((item) => ({ ...item, verificacion: isChecked }));
    setDatos(actualizados);
    console.log(datos)
  };

  //Función para enviar items de guías
  const generarGuias = async () => {
    // const validado = await validacion();
    const validado = 1;
    if (validado === 1) {
      if (!datos || datos.length === 0) {
        console.error('No hay facturas seleccionadas');
        return
      }
      const codigos = new Set();
      const itemsSeleccionados = datos.filter(item => {
        if (item.verificacion && codigos.has(item.numeroGuia)) {
          codigos.add(item.numeroGuia);
          return true
        }
        return false
      });
      if (itemsSeleccionados.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "No hay items aprobados para autorizar",
          text: "Verifique que todos los items tengan la aprobación marcada.",
          showConfirmButton: true,
        });
        return;
      }
      const details = datos.map((item) => ({
        id: item.numeroGuia,
        fechaEntrega: item.fechaEntrega,
        provincia: item.provincia,
        ciudad: item.ciudad,
        cliente: item.cliente,
        total: parseFloat(item.precioSugerido),
        despachador: item.despachador,
        verificacion: item.verificacion,
      }));
      console.log(details)

    } else {
      console.log("error")
    }
  }

  return (
    <div className="w-full">
      {/* Filtros */}
      <div className="bg-white w-full p-6 rounded-lg shadow-lg mb-6">
        <form className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="numeroGuia" className="block text-[#434E52] font-semibold mb-2">
              N° Factura
            </label>
            <input
              type="text"
              id="numeroFactura"
              className="w-full px-4 py-2 bg-[#fff] border border-[#D0D0D4] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#000]"
              placeholder="Ingrese el N° de Factura"
              onChange={handleCodigo}
              maxLength={10}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="desde" className="block text-[#434E52] font-semibold mb-2">
              Desde
            </label>
            <input
              type="date"
              id="desde"
              value={inicio}
              name="Desde"
              onChange={handleInicio}
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
              value={fin}
              name="Hasta"
              onChange={handleFin}
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
        <div className="flex min-w-[200px] justify-end">
          <button
            type="button"
            className="bg-white text-[#17224f] border border-[#17224f] font-light py-1 px-2 mb-6 rounded-md hover:bg-red-700 transition duration-300"
            onClick={generarGuias}
          >
            Generar Guías
          </button>
        </div>
        <table className="w-full text-sm/[18px] text-left text-gray-500">
          <thead className="text-sm/[18px] text-[#3B8DBD] uppercase bg-gray-50">
            <tr className='border-b border-[#C3C3C3]'>
              <th className="px-4 py-3">N° Factura</th>
              <th className="px-4 py-3">Fecha Entrega</th>
              <th className="px-4 py-3">Provincia</th>
              <th className="px-4 py-3">Ciudad</th>
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Despachador</th>
              <th className="px-4 py-3">Detalles</th>
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  className="bg-white"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {datos.map((row, index) => (
              <tr key={index} className="bg-white text-[#151635] border-b border-[#C3C3C3] hover:bg-gray-50">
                <td className="px-4 py-3">{row.numeroGuia}</td>
                <td className="px-4 py-3">{row.fechaEntrega}</td>
                <td className="px-4 py-3">{row.provincia}</td>
                <td className="px-4 py-3">{row.ciudad}</td>
                <td className="px-4 py-3">{row.cliente}</td>
                <td className="px-4 py-3">${row.total}</td>
                <td className="px-4 py-3">
                  <select
                    className=" px-4 py-2 bg-[#fff] border border-[#D0D0D4] text-[#a9a3af] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  // value={sucursal.whsName || " "}
                  // onChange={handleSucursal}
                  >
                    <option value="">Seleccione un despachador</option>
                    {/* {datosSucursal.map((suc) => (
                  <option key={suc.whsCode} value={suc.whsName}>
                    {suc.whsName}
                  </option>
                ))} */}
                  </select>

                </td>
                <td className="px-4 py-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={openModal} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#1C274C" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z" fill="#1C274C" />
                  </svg>

                </td>
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={row.verificacion}
                    onChange={(e) => handleCheckboxChange(e, row)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginación */}
        <TablePagination
          component="div"
          count={datos.length}
          rowsPerPage={rowsPerPage}
          page={currentPage}
          onPageChange={handlePageChange}
          rowsPerPageOptions={[]}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="FACTURA  #2093"
      >
        <table className="w-full text-sm/[18px] text-left text-gray-500">
          <thead className="text-sm/[18px] text-[#3B8DBD] uppercase bg-gray-50">
            <tr className='border-b border-[#C3C3C3]'>
              <th className="px-4 py-3">Código</th>
              <th className="px-4 py-3">Descripcion</th>
              <th className="px-4 py-3">Cant. </th>
              <th className="px-4 py-3">Und.</th>
              <th className="px-4 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((row, index) => (
              <tr key={index} className="bg-white text-[#151635] border-b border-[#C3C3C3] hover:bg-gray-50">
                <td className="px-4 py-3">{row.numeroGuia}</td>
                <td className="px-4 py-3">{row.fechaEntrega}</td>
                <td className="px-4 py-3">{row.provincia}</td>
                <td className="px-4 py-3">{row.ciudad}</td>
                <td className="px-4 py-3">${row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </div>

  );
};

export default Facturas;
