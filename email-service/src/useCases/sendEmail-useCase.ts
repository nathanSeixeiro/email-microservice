import Email from "../entities/email-entity";
import EmailInterface from "../interfaces/emailService-interface";

export default class SendEmailUseCase{
    constructor(private emailService: EmailInterface){}
    
    execute(to: string, subj: string, text: string): void{
        const email = new Email(to, subj, text)
        this.emailService.sendEmail(email)
    }
}