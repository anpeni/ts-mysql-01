app.get('/admin/data', (req, res) => {
    // Cualquier usuario puede acceder a datos de administración sin verificar si es un administrador.
    res.send(adminData);
});

//Control de Acceso Inadecuado:
//El código permite el acceso a funciones o datos críticos sin una comprobación adecuada de permisos.
