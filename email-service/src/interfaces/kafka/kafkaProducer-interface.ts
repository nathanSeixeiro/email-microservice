export default interface KafkaConsumerInterface{
    startConsuming(topic: string, callback: (msg: string) => void): void
}