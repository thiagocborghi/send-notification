require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
        body: 'Olá, Sua consulta está marcada para as 14:30.',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+556281385009'
      })
      .then(message => console.log(message.sid))
      .done();