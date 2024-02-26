

const Contacto = () => {
  return (
    <>
  <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
    <h2 className="text-3xl font-bold text-center mt-8 mb-4">Contacto</h2>
    <div className="px-6 py-4">
      <input type="text" placeholder="Correo Electrónico" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-400" />
      <textarea cols="30" rows="10" placeholder="Pregunta aquí" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-400"></textarea>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Enviar</button>
    </div>
    <div className="px-6 py-4">
      <img src="../public/img/logonegativo" alt="" className="mx-auto" />
    </div>
  </div>
</>
  )
}

export default Contacto