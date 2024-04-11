//Cross-Site Request Forgery (CSRF):
//La aplicación no tiene medidas para prevenir ataques CSRF, donde un sitio malicioso puede realizar acciones en nombre de un usuario autenticado.


app.post('/update-profile', (req, res) => {
    // La aplicación no verifica la existencia de un token CSRF en la solicitud.
    updateUserProfile(req.body);
    res.send('Perfil actualizado');
});
