import Email from "../entities/email-entity";

export default interface EmailInterface{
    sendEmail(email: Email): Promise<void>
}