export interface chatMessage{
    from: string;
    message: string;
    time?: Date;
    lastMessage: boolean;
}