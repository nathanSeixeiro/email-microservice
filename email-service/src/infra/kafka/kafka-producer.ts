import { Kafka, Producer } from "kafkajs";
import { topic } from "./kafka-config";


class KafkaProducer implements KafkaProducerInterface{
  private producer: Producer

  constructor(kafka: Kafka){
    this.producer = kafka.producer()
  }

  async sendMessageToKafka(msg: any) {
    await this.producer.connect()
    await this.producer.send({
      topic: topic,
      messages: [{ value: JSON.stringify(msg)}]
    })
    await this.producer.disconnect()
  }
}

export default KafkaProducer