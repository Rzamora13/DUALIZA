

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Error 404</h2>
      <p className="text-gray-700 text-lg mb-8">Lo sentimos, la página que estás buscando no se encontró.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400">
        Volver a Inicio
      </button>
    </div>
  </div>
  )
}

export default ErrorPage