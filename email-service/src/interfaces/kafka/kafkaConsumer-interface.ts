import { Consumer } from "kafkajs";

interface KafkaConsumerInterface{
    runConsumer(consumer: Consumer, topic: string): void
}

export default KafkaConsumerInterface