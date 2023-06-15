import { Consumer, Kafka } from 'kafkajs';
import KafkaConsumerInterface from '../../interfaces/kafka/kafkaConsumer-interface';
import SendEmailUseCase from '../../useCases/sendEmail-useCase';
import EmailService from '../nodemailer/email-service';

// Configura o caso de uso e o serviço de e-mails
const emailService = new EmailService()
const sendEmailUseCase = new SendEmailUseCase(emailService)

class KafkaConsumer implements KafkaConsumerInterface{
  private consumer: Consumer
  constructor(kafka: Kafka){
    this.consumer = kafka.consumer({groupId: 'email-consumer'});
  }  
  async runConsumer(topic:string){
    await this.consumer.connect()
    await this.consumer.subscribe({ topic: topic})

    await this.consumer.run({
      eachMessage:async ({topic, partition, message}) => {
        const parsedMessage = JSON.parse(message.value?.toString() ?? '');
        if (parsedMessage) {
          const { to, subject, text } = parsedMessage;
          sendEmailUseCase.execute(to, subject, text);
        }
      }
    })
  }
}

export default KafkaConsumer