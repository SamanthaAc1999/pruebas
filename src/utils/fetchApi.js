const baseUrl = 'http://192.168.10.212:8085';

const fetchApi = async ({ endPoint, method = 'GET', headers = {}, body = null, pagination = false }) => {
    try {
        const response = await fetch(`${baseUrl}${endPoint}`, {
            method,
            headers: { 'Content-Type': 'application/json', ...headers },
            body: body ? JSON.stringify(body) : null
        });

        if (response.ok) {
            const datos = await response.json();
            const respuesta = { datos, error: null };
            if (pagination) {
                const totalRegistros = response.headers.get('CantidadtotalRegistros');
                respuesta.totalRegistros = parseInt(totalRegistros, 10)
            }
            return respuesta;
        }
        console.log(response)
    } catch (error) {
        return console.log(error)
    }
};

export default fetchApi;