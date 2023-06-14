export default interface KafkaProducerInterface{
    send(topic: string, msg: string): void
}