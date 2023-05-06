const twilio = require('twilio');

const accountSid = 'AC4c4e3da05e4ef2781ae2ef2410db837e'; // Your Account SID from www.twilio.com/console
const authToken = '4139d0bbbc375c72d3b62b30da9e3f66'; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

const sms = () => {
    client.messages
        .create({
            body: 'veuillez vous connecter avec le mdp 123',
            to: '+237651595825', // Text this number
            from: '+14754738156', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
}

module.exports = {
    sms,
}