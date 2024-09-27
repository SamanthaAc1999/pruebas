export async function validacion() {
    const fechaActual = new Date();
    const fechaCaduca = localStorage.getItem("expiracion");
    const nuevaFecha = new Date(fechaCaduca);

    if (fechaActual.getTime() < nuevaFecha.getTime() -15 * 60000) {
        return 1;
    } else if (fechaActual.getTime() >= nuevaFecha.getTime() -15*60000 && fechaActual.getTime() < nuevaFecha.getTime()) {
        // return await renovartoken();
    } else {
        localStorage.removeItem("token");
        localStorage.removeItem("expiracion");
        window.location.href = '/';
        return 2;
    }
}