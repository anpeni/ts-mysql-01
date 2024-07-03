/*


import * as express from 'express';
import * as mysql from 'mysql';

const app: express.Application = express();

// Configuración de la conexión a la base de datos (este es solo un ejemplo, necesitas configurar esto correctamente)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos'
});

app.get('/unsafe', (req: express.Request, res: express.Response) => {
    // Obteniendo el id de usuario de la consulta, sin validación ni sanitización: esto es inseguro.
    const userId = req.query.id;

    // Creando una consulta SQL directamente con la entrada del usuario: esto es una vulnerabilidad de inyección SQL.
    const sqlQuery = `SELECT * FROM users WHERE id = ${userId}`;

    connection.query(sqlQuery, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
*/

