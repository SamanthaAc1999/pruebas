// const Card = ({ icon, name, quantity  }) => {
//   return (
//       <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
//       <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-2xl">
//         {icon}
//       </div>
//       <div className="text-right">
//         <p className="text-sm font-medium text-[#151635]">{name}</p>
//         <p className="text-2xl font-bold text-[#151635]">{quantity}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;



// const Card = ({ icon, name, quantity, color }) => {
//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-2" style={{ backgroundColor: color }}>
//           <h3 className="text-white text-lg font-semibold">{name}</h3>
//         </div>
//         <div className="p-3 flex items-center justify-between">
//           <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-3xl">
//             {icon}
//           </div>
//           <p className="text-3xl font-bold text-[#151635]">{quantity}</p>
//         </div>
//       </div>
//     );
//   };

//   export default Card;




const Card = ({ icon, name, quantity, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex">
      <div style={{ backgroundColor: color }} className="w-1/3 flex items-center justify-center rounded-l-lg">
        <div className="w-10 h-10 flex items-center justify-center text-white text-2xl">
          {icon}
        </div>
      </div>
      <div className="flex-1 p-4 text-right">
        <p className="text-md font-thin text-[#B1AEAE]">{name}</p>
        <p className="text-3xl font-semibold text-[#151635]">{quantity}</p>
      </div>
    </div>
  );
};

export default Card;
