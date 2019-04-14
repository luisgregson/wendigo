import { ConsoleMessage, ConsoleMessageType } from 'puppeteer';

export default class Log {
    public message: ConsoleMessage;
    public readonly text: string;
    constructor(consoleMessage: ConsoleMessage, text?: string) {
        this.message = consoleMessage;
        this.text = text || consoleMessage.text();
    }

    get type(): ConsoleMessageType {
        return this.message.type();
    }
}
