app.post('/submit-data', (req, res) => {
    // La deserialización de objetos sin validar puede llevar a vulnerabilidades.
    const obj = JSON.parse(req.body.data);
    // ...
});

//Deserialización Insegura:
//La deserialización de datos no confiables puede resultar en la ejecución de código arbitrario, ataques de denegación de servicio, etc.
