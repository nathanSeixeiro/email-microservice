import KafkaProducerInterface from "../../interfaces/kafka/kafkaConsumer-interface";
import { Producer, ProduceRequest } from "kafka-node";

export class KafkaProducer implements KafkaProducerInterface{
    private producer: Producer
    constructor(private kafkaClient: any) {
        this.producer = new Producer(kafkaClient);
    }
    
    send(topic: string, msg: string): void {
       const ṕayloads: ProduceRequest[] = [
        {
            topic,
            messages: [msg],
        }
       ]

       this.producer.send(ṕayloads, (error: any, data: any) => {
        if (error) {
            console.error('Error was sent message for kafka:', error);
        } else{
            console.log('Message sent for kafka', data);
        }
       })
    }
}