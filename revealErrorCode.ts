import * as express from 'express';

const app: express.Application = express();

app.get('/user/:id', async (req: express.Request, res: express.Response) => {
    try {
        const userId = req.params.id;
        // Supongamos que aquí hay alguna lógica para recuperar información del usuario...
        throw new Error('Fallo al intentar recuperar información de la base de datos');
    } catch (error) {
        // Exponer información detallada de los errores internos al cliente puede ser peligroso.
        res.status(500).send(`Se produjo un error interno del servidor: ${error.message}`);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
