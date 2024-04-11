app.post('/change-password', (req, res) => {
    const { oldPassword, newPassword } = req.body;
    // No hay verificación de que la solicitud provenga de un usuario autenticado.
    user.changePassword(newPassword);
    res.send('Contraseña actualizada con éxito');
});

Falta de Seguridad en la Autenticación:
La aplicación no implementa medidas de seguridad adecuadas para las funciones de autenticación y gestión de sesiones.
