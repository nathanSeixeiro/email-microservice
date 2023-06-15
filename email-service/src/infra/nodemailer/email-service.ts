import Email from "../../entities/email-entity";
import EmailInterface from "../../interfaces/emailService-interface";
import transporter from "./email-config";

class EmailService implements EmailInterface {
    async sendEmail(email: Email): Promise<void> {
        const mailOptions = {
            from: 'seixeiro.dev@gmail.com',
            to: email.to,
            subject: email.subject,
            text: email.content
        }

        try {
            await transporter.sendMail(mailOptions)
            console.log("send email: ", email);
        } catch (error) {
            console.error('err: ', error);
            throw error
        }
    }
}

export default EmailService