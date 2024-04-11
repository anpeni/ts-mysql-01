app.get('/load-external-scripts', (req, res) => {
    // La aplicación carga recursos de un origen no seguro, lo cual puede llevar a problemas de Mixed Content.
    res.send('<script src="http://insecure-source.com/script.js"></script>');
});

//Inclusión de Recursos Inseguros:
//La aplicación incluye recursos (como scripts, imágenes) de orígenes no confiables o inseguros.
