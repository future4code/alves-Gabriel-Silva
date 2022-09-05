import transporter from "./nodeMailerTransport";

const sendEmail = async (email: string): Promise<void> => {
    try {
      let validacao = await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: email,
            subject: "Conta criada com sucesso!",
            html: "<p>Sua conta foi criada com sucesso em minha api teste ;)</p>"
        })
        console.log("sendemail: ",validacao)
    } catch (error) {
        throw new Error("Email inválido! Até o momento apenas E-mails com domínio '@gmail' são aceitos.")
    }
}

export default sendEmail