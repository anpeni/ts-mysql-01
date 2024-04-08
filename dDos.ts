function bucleInseguro() {
    while (true) {
        // Algo de lógica de negocio, que nunca cambia la condición del bucle.
        // Este código puede consumir una gran cantidad de recursos del servidor rápidamente,
        // lo que podría resultar en una Denegación de Servicio si el servidor se sobrecarga.
    }
}

// Una función recursiva sin una condición de salida segura también podría causar una Denegación de Servicio
// debido a un stack overflow si se llama con suficiente profundidad.
function recursiónInsegura(n: number) {
    // Olvidamos la condición de terminación para detener la recursión.
    recursiónInsegura(n + 1);
}

// Ejemplo de uso que causaría un bucle infinito.
bucleInseguro();

// Ejemplo de llamada a una función recursiva sin una condición de terminación.
// Se causaría un desbordamiento de pila si se permite que se ejecute hasta el infinito.
recursiónInsegura(0);
