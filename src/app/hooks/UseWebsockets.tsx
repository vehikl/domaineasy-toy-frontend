import {useEffect, useState} from "react";
import Pusher from "pusher-js";

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY ?? '', {
    cluster: 'mt1'
});

let subscriptions: string[] = [];

export default function useWebsockets(channelName: string, eventName: string) {
    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {
        if (!subscriptions.includes(channelName)) {
            pusher.subscribe(channelName)
                .bind(eventName, function (newMessage: string) {
                    setMessages((messages) => [...messages, newMessage])
                });

            subscriptions.push(channelName)
        }

        return () => {
            subscriptions = subscriptions.filter((name) => channelName !== name);
            pusher.unsubscribe(channelName);
        }
    }, [channelName, eventName]);

    return {messages}
}