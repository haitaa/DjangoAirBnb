"use client";

import { useEffect, useState, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import CustomButton from "../forms/CustomButton";
import { ConversationType } from "@/app/inbox/page";
import { MessageType } from "@/app/inbox/[id]/page";
import { UserType } from "@/app/inbox/page";

interface ConversationDetailProps {
    conversation: ConversationType;
    token?: string | null;
    userId: string;
    messages: MessageType[];
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    conversation,
    userId,
    token,
    messages,
}) => {
    const messagesDiv = useRef(null);
    const [newMessage, setNewMessage] = useState("");
    const [realtimeMessages, setRealtimeMessages] = useState<MessageType[]>([]);

    const myUser = conversation.users?.find((user) => user.id == userId);
    const otherUser = conversation.users?.find((user) => user.id != userId);

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        `ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`,
        {
            share: false,
            shouldReconnect: () => true,
        }
    );

    useEffect(() => {
        console.log("Connection state changed", readyState);
    }, [readyState]);

    useEffect(() => {
        if (
            lastJsonMessage &&
            typeof lastJsonMessage === "object" &&
            "name" in lastJsonMessage &&
            "body" in lastJsonMessage
        ) {
            const message: MessageType = {
                id: "",
                name: lastJsonMessage.name as string,
                body: lastJsonMessage.body as string,
                conversationId: conversation.id,
                sent_to: otherUser as UserType,
                created_by: myUser as UserType,
            };

            setRealtimeMessages((realtimeMessages) => [
                ...realtimeMessages,
                message,
            ]);
        }

        scrollToBottom();
    }, [lastJsonMessage]);

    const sendMessage = async () => {
        sendJsonMessage({
            event: "chat_message",
            data: {
                body: newMessage,
                name: myUser?.name,
                sent_to_id: otherUser?.id,
                conversation_id: conversation.id,
            },
        });

        setNewMessage("");

        setTimeout(() => {
            scrollToBottom();
        }, 50);
    };

    const scrollToBottom = () => {
        if (messagesDiv.current) {
            messagesDiv.current.scrollTop = messagesDiv.current.scrollHeigth;
        }
    };

    return (
        <>
            <div
                ref={messagesDiv}
                className="max-h-[400px] overflow-auto flex flex-col space-y-4 mt-4"
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`w-[80%] py-4 px-6 rounded-xl ${
                            message.created_by.name == myUser?.name
                                ? "ml-[20%] bg-blue-200"
                                : "bg-gray-200"
                        }`}
                    >
                        <p className="font-bold text-gray-500">
                            {message.created_by.name}
                        </p>
                        <p>{message.body}</p>
                    </div>
                ))}

                {realtimeMessages.map((message, index) => (
                    <div
                        key={index}
                        className={`w-[80%] py-4 px-6 rounded-xl ${
                            message.name == myUser?.name
                                ? "ml-[20%] bg-blue-200"
                                : "bg-gray-200"
                        }`}
                    >
                        <p className="font-bold text-gray-500">
                            {message.name}
                        </p>
                        <p>{message.body}</p>
                    </div>
                ))}
            </div>

            <div className="mt-4 py-4 px-6 flex space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                ></input>

                <CustomButton
                    label="Send"
                    onClick={sendMessage}
                    className="w-[100px]"
                />
            </div>
        </>
    );
};

export default ConversationDetail;
