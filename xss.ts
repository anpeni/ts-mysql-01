/*
import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    // Este código es vulnerable a XSS ya que inserta directamente un parámetro de la query
    // en la respuesta HTML sin ninguna sanitización.
    const userInput = req.query.userInput;

    // Un atacante podría proporcionar un valor de userInput como:
    // <script>alert('Este es un ataque XSS');</script>
    // y este script se ejecutaría en el navegador del usuario final.
    res.send(`<div>${userInput}</div>`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
});

*/
