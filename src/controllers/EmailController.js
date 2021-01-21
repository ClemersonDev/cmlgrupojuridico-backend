require('dotenv').config();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = {
    async enviaMail(request, response) {
        const { name, email, whatsapp, msgm } = request.body;

        let transporter = nodemailer.createTransport(smtpTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        }));

        await transporter.sendMail({
            from: `Castro Moura e Lima - Grupo Jurídico <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `Olá, eu sou ${name}`,
            html: `Meu telefone: ${whatsapp}<br/>Meu e-mail: ${email}<br/>Mensagem: ${msgm}`,
        }).then(message => {
            console.log("Mensagem enviada!", message);
        }).catch(err => {
            console.log(err);
        });
        
        return response.json();
    }
}