app.get('/user-details', (req, res) => {
    try {
        // Lógica que podría fallar.
    } catch (error) {
        // El error puede contener detalles del sistema que no deberían exponerse.
        res.status(500).send(`Error: ${error.stack}`);
    }
});

//Fugas de Información a través de Mensajes de Error:
//Los mensajes de error brindan información detallada que podría ser utilizada por un atacante.
