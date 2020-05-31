export interface IChat {
    id: string;
    message: string;
    isMe: boolean;
    createdAt: string;
    type: 'human' | 'bot';
    welcome: 'Hello, I am Simi.';
    welcome2: 'Where can i help you get to today?';
}
