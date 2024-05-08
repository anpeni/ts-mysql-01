// La aplicación no establece encabezados de seguridad como Content-Security-Policy, X-Frame-Options, etc.
app.use((req, res, next) => {
    // No se configuran cabeceras de seguridad
    next();
    
});

//Configuración de Seguridad Incorrecta:
//Los headers de seguridad HTTP no están configurados o son inadecuados, dejando la aplicación vulnerable a varios ataques de navegador.
