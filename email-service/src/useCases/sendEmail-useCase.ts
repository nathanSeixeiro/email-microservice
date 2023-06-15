import Email from "../entities/email-entity";
import EmailInterface from "../interfaces/emailService-interface";

class SendEmailUseCase{
    constructor(private emailService: EmailInterface){}
    
    execute(to: string, subject: string, text: string): void {
        const email = new Email(to, subject, text);
        this.emailService.sendEmail(email);
    }
}

export default SendEmailUseCase