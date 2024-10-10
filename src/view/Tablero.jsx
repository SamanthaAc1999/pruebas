
       
              
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
        progress: 0,
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
        progress: 10,
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
                <td className="px-6 py-4 font-medium text-[#151635] whitespace-nowrap">
                  {order.id}
                </td>
                <td className="px-6 py-4">
                  <div className="w-[120px] bg-[#EDEDED] rounded-md h-4">
                    <div 
                      className="bg-[#1C274C] h-4 rounded-md" 
                      style={{width: `${order.progress}%`}}
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
                  <button className="font-medium text-blue-600 bg-white hover:underline" onClick={() => navigate('/produccion/detalles')}>
                    Ver
                  </button>
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