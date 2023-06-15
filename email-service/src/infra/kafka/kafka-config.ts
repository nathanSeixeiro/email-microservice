import { Kafka, logLevel } from "kafkajs";

const kafkaBroker = ['localhost:9092']
export const topic = 'emails';

// Cria uma instância do Kafka
export const kafka = new Kafka({
    brokers: kafkaBroker,
    logLevel: logLevel.ERROR, // Define o nível de log do KafkaJS
  });
  
