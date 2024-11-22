import { useNavigate } from 'react-router-dom';

// Datos de ejemplo

const orders = [
  {
    id: '2093',
    progress: 20,
    orderDate: '30/09/2024 08:30 am',
    deliveryDate: '10/10/2024 11:00 am',
    elapsedTime: '0 días 1 hora 30 min',
    client: 'Samantha Avila',
    weight: 80,
    total: 150.63,
    priority: "SI"
  },
  {
    id: '2089',
    progress: 75,
    orderDate: '28/09/2024 08:30 am',
    deliveryDate: '05/10/2024 10:00 am',
    elapsedTime: '2 días 0 horas 10 min',
    client: 'Enrique Rios',
    weight: 200,
    total: 450.63,
    priority: "NO"
  },
  {
    id: '2085',
    progress: 80,
    orderDate: '26/09/2024 08:30 am',
    deliveryDate: '03/10/2024 15:00 pm',
    elapsedTime: '4 días 1 hora 40 min',
    client: 'Emanuel Tores',
    weight: 150,
    total: 250.63,
    priority: "NO"
  },
  {
    id: '2080',
    progress: 50,
    orderDate: '25/09/2024 08:30 am',
    deliveryDate: '02/10/2024 11:00 am',
    elapsedTime: '5 días 1 hora 30 min',
    client: 'Samantha Avila',
    weight: 80,
    total: 150.63,
    priority: "SI"
  },
]

const PriorityBadge = ({ priority }) => {
  const colorClass = priority === 'SI' ? 'bg-[#00A75A] text-white' :
    'bg-transparent text-[#151635]'
  return (
    <span className={`px-5 py-2 inline-flex text-xs leading-5 font-semibold rounded ${colorClass}`}>
      {priority}
    </span>
  )
}

export default function Tablero() {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full rounded-lg shadow-lg overflow-x-auto">
      <div className="mx-2% py-10 px-2">
        <div className="overflow-x-auto">
          <table className="w-full text-sm/[18px] text-left text-gray-500">
            <thead className="text-sm/[18px] text-[#3B8DBD] uppercase bg-gray-50">
              <tr className='border-b border-[#C3C3C3] '>
                <th scope="col" className="px-6 py-3">N° Orden</th>
                <th scope="col" className="px-6 py-3">Progreso</th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">Fecha Pedido</th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">Fecha Entrega</th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">T.T</th>
                <th scope="col" className="px-6 py-3">Cliente</th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">Peso (kg)</th>
                <th scope="col" className="px-6 py-3">Total ($)</th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">Prio.</th>
                <th scope="col" className="px-6 py-3">Detalle</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="bg-white text-[#151635] border-b border-[#C3C3C3]  hover:bg-gray-50">
                  <td className="px-6 py-4 text-[#151635] whitespace-nowrap">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-[120px] bg-[#EDEDED] rounded-md h-6">
                      <div
                        className={`h-6 rounded-md ${order.progress <= 25 ? 'bg-[#DD0202]' :
                          order.progress <= 50 ? 'bg-[#FFA447]' :
                            order.progress <= 75 ? 'bg-[#E8E46E]' :
                              'bg-[#00a75a]'
                          }`}
                        style={{ width: `${order.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{order.progress}%</span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">{order.orderDate}</td>
                  <td className="px-6 py-4 hidden md:table-cell">{order.deliveryDate}</td>
                  <td className="px-6 py-4 hidden lg:table-cell">{order.elapsedTime}</td>
                  <td className="px-6 py-4">{order.client}</td>
                  <td className="px-6 py-4 hidden lg:table-cell">{order.weight}</td>
                  <td className="px-6 py-4">${order.total}</td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <PriorityBadge priority={order.priority} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    {/* <button className="font-medium text-blue-600 bg-white hover:underline" onClick={() => navigate('/produccion/detalles')}>
                    Ver
                  </button> */}
                    <svg height="1.5rem" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/produccion/detalles')}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.21721 5.1967C3.02051 7.3934 3.02051 10.9289 3.02051 18C3.02051 25.0711 3.02051 28.6066 5.21721 30.8033C7.41391 33 10.9494 33 18.0205 33C25.0916 33 28.6271 33 30.8238 30.8033C33.0205 28.6066 33.0205 25.0711 33.0205 18C33.0205 10.9289 33.0205 7.3934 30.8238 5.1967C28.6271 3 25.0916 3 18.0205 3C10.9494 3 7.41391 3 5.21721 5.1967ZM15.8352 11.2759C16.2637 10.8259 16.2463 10.1138 15.7964 9.68535C15.3464 9.25685 14.6344 9.27422 14.2059 9.72414L10.7348 13.3688L9.83517 12.4241C9.40667 11.9742 8.69457 11.9569 8.24465 12.3853C7.79473 12.8138 7.77736 13.5259 8.20585 13.9759L9.92014 15.7759C10.1325 15.9988 10.4269 16.125 10.7348 16.125C11.0427 16.125 11.3371 15.9988 11.5494 15.7759L15.8352 11.2759ZM19.5205 12.375C18.8992 12.375 18.3955 12.8787 18.3955 13.5C18.3955 14.1213 18.8992 14.625 19.5205 14.625H27.0205C27.6418 14.625 28.1455 14.1213 28.1455 13.5C28.1455 12.8787 27.6418 12.375 27.0205 12.375H19.5205ZM15.8352 21.7759C16.2637 21.3259 16.2463 20.6138 15.7964 20.1853C15.3464 19.7569 14.6344 19.7742 14.2059 20.2241L10.7348 23.8688L9.83517 22.9241C9.40667 22.4742 8.69457 22.4569 8.24465 22.8853C7.79473 23.3138 7.77736 24.0259 8.20585 24.4759L9.92014 26.2759C10.1325 26.4988 10.4269 26.625 10.7348 26.625C11.0427 26.625 11.3371 26.4988 11.5494 26.2759L15.8352 21.7759ZM19.5205 22.875C18.8992 22.875 18.3955 23.3787 18.3955 24C18.3955 24.6213 18.8992 25.125 19.5205 25.125H27.0205C27.6418 25.125 28.1455 24.6213 28.1455 24C28.1455 23.3787 27.6418 22.875 27.0205 22.875H19.5205Z" fill="#1C274C" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}