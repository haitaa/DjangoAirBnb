"use client";

import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import CustomButton from "../forms/CustomButton";
import { ConversationType } from "@/app/inbox/page";

interface ConversationDetailProps {
    conversation: ConversationType;
    token?: string | null;
    userId: string;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    conversation,
    userId,
    token,
}) => {
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

    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4 mt-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">John Doe</p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, sequi.
                    </p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">Mustafa Haita</p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, sequi.
                    </p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                ></input>

                <CustomButton
                    label="Send"
                    onClick={() => console.log("Clicked")}
                    className="w-[100px]"
                />
            </div>
        </>
    );
};

export default ConversationDetail;
