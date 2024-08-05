"use client";

import React from "react";
import { useRouter } from "next/navigation";

import CustomButton from "../forms/CustomButton";
import { ConversationType } from "@/app/inbox/page";

interface ConversationProps {
    userId: string;
    conversation: ConversationType;
}

const Conversation: React.FC<ConversationProps> = ({
    userId,
    conversation,
}) => {
    const router = useRouter();
    const otherUser = conversation.users.find((user) => user.id != userId);

    return (
        <div className="px-6 py-4 cursor-pointer border border-gray-300 rounded-xl">
            <p className="mb-6 text-xl">{otherUser?.name}</p>
            <p
                onClick={() => router.push(`/inbox/${conversation.id}`)}
                className="text-airbnb-dark"
            >
                Go to conversation
            </p>
        </div>
    );
};

export default Conversation;
