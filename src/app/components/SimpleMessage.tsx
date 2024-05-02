"use client";

import useWebsockets from "@/app/hooks/UseWebsockets";

export default function SimpleMessage() {
    const {messages: foobarMessages} = useWebsockets('foobar', 'buzzfizz');

    return <>
        <section>
            <h1>All messages from Websocket are:</h1>
            <ul>
                {foobarMessages.map((text: string, index: number) => <li key={index}>{text}</li>)}
            </ul>
        </section>
    </>;
}