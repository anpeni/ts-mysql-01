import * as express from 'express';
import * as bodyParser from 'body-parser';

const app: express.Application = express();
app.use(bodyParser.json());

app.post('/login', (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;
    
    // Supuesto chequeo de credenciales (este es solo un pseudo-código)
    const loginSuccessful = checkCredentials(username, password); // Esta función debe implementarse correctamente

    if (loginSuccessful) {
        // Esto es inseguro ya que puede exponer contraseñas en logs que podrían no estar adecuadamente protegidos.
        console.log(`Usuario ${username} inició sesión con la contraseña ${password}`);
        res.status(200).send('Login exitoso!');
    } else {
        res.status(401).send('Login fallido.');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

function checkCredentials(username: string, password: string): boolean {
    // Simulando una comprobación de credenciales exitosa
    return true;
}
