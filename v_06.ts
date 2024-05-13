app.post('/submit-credit-card', (req, res) => {
    // Aquí, la información de la tarjeta de crédito se transmite sin cifrado.
    const creditCardNumber = req.body.creditCardNumber;
    
    // ...
});

//Exposición de Datos Sensibles:
//El código no emplea cifrado al enviar o recibir datos sensibles, lo cual podría exponer la información del usuario durante una transmisión.
