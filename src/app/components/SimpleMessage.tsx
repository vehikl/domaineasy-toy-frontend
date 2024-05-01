"use client";

import {useEffect, useState} from "react";
import axios from "axios";

export default function SimpleMessage() {
    const [message, setMessage] = useState("unset")
    useEffect(() => {
        try {
            (async () => {
                const response = await axios.get("http://localhost:3000/message")
                setMessage(response.data);

            })();
        } catch (e) {

        }


    }, []);

    return <>The message is: {message}</>;
}