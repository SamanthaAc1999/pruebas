import Card from "../components/Elements/Card";

const orders = [
  {
      id: '2093',
      state: 'Pedido',
      subEstate: 'Pedido',
      Itemname: 'Conservantes',
      quality: 50,
      und: 'UND',
      weight: 80,
      number:56987
  },
  {
      id: '2089',
      state: 'Produccion',
      subEstate: 'Pedido',
      Itemname: 'Conservantes',
      quality: 50,
      und: 'UND',
      weight: 80,
      number:56987
  },
  {
      id: '2085',
      state: 'Bodega',
      subEstate: 'Pedido',
      Itemname: 'Conservantes',
      quality: 50,
      und: 'UND',
      weight: 80,
      number:56987
  },
  {
      id: '2080',
      state: 'Compra',
      subEstate: 'Pedido',
      Itemname: 'Conservantes',
      quality: 50,
      und: 'UND',
      weight: 80,
      number:56987
  },
]



export default function DetallesTablero() {
  const cards = [
    { name: "Pedido", quantity: 10, icon: "🛒", color:'#DD0202' },
    { name: "Bodega", quantity: 25, icon: "🏭", color: '#F9AD03' },
    { name: "Produccion", quantity: 15, icon: "⚙️", color: '#17224F' },
    { name: "Compra", quantity: 5, icon: "💳", color: '#988B8B' },
    { name: "Finalizado", quantity: 20, icon: "✅", color:'#00A75A' },
  ];


  const PriorityBadge = ({ state }) => {
    const colorClass = 
      state === 'Pedido' ? 'bg-[#DD0202] text-white' :
      state === 'Produccion' ? 'bg-[#17224F] text-white' :
      state === 'Bodega' ? 'bg-[#F9AD03] text-white' :
      state === 'Compra' ? 'bg-[#988B8B] text-white' :
      'bg-transparent text-[#151635]';
  
    return (
      <span className={`px-5 py-2 inline-flex text-xs leading-5 font-semibold rounded ${colorClass}`}>
        {state}
      </span>
    );
  }

  

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-8">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} name={card.name} quantity={card.quantity} color={card.color}/>
        ))}
      </div>
      <div className="bg-white w-full rounded-lg shadow-lg overflow-x-auto">
    <div className="mx-2% py-10 px-2">
      <div className="overflow-x-auto">
        <table className="w-full text-sm/[18px] text-left text-gray-500">
          <thead className="text-sm/[18px] text-[#3B8DBD] uppercase bg-gray-50">
            <tr className='border-b border-[#C3C3C3]'>
              <th scope="col" className="px-6 py-3">N° Orden</th>
              <th scope="col" className="px-6 py-3">Estado</th>
              <th scope="col" className="px-6 py-3 hidden md:table-cell">Sub Estado</th>
              <th scope="col" className="px-6 py-3 hidden md:table-cell">Nombre Item</th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">Cantidad</th>
              <th scope="col" className="px-6 py-3">Und. Medida</th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">Peso (kg)</th>
              <th scope="col" className="px-6 py-3">Número</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="bg-white text-[#151635] border-b border-[#C3C3C3] hover:bg-gray-50">
                <td className="px-6 py-4 text-[#151635] whitespace-nowrap">
                  {order.id}
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <PriorityBadge priority={order.state} />
                </td>
                <td className="px-6 py-4 hidden md:table-cell">{order.subEstate}</td>
                <td className="px-6 py-4 hidden md:table-cell">{order.Itemname}</td>
                <td className="px-6 py-4 hidden lg:table-cell">{order.quality}</td>
                <td className="px-6 py-4">{order.und}</td>
                <td className="px-6 py-4 hidden lg:table-cell">{order.weight}</td>
                <td className="px-6 py-4">${order.number}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}