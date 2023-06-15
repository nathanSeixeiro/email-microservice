import { kafka } from "./src/infra/kafka/kafka-config";
import KafkaConsumer from "./src/infra/kafka/kafka-consumer";
import KafkaProducer from "./src/infra/kafka/kafka-producer";

const producer = new KafkaProducer(kafka)
const consumer = new KafkaConsumer(kafka)

// Exemplo de envio de e-mail (usando o Kafka)
const emailMessage = {
    to: 'recipient@example.com',
    subject: 'Assunto do e-mail',
    text: 'Conteúdo do e-mail',
  };
  
  producer.sendMessageToKafka(emailMessage)
    .then(() => console.log('Mensagem enviada para o Kafka'))
    .catch((error) => console.error('Erro ao enviar mensagem para o Kafka:', error));
  
  // Inicia o consumidor do Kafka
  consumer.runConsumer('email').catch((error) => {
    console.error('Erro ao iniciar o consumidor do Kafka:', error);
  });