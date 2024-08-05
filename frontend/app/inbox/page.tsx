import React, { useState, useEffect } from "react";

import apiService from "../services/apiService";
import Conversation from "../components/inbox/Conversation";
import { getUserId } from "../lib/actions";

export type UserType = {
    id: string;
    name: string;
    avatar_url: string;
};

export type ConversationType = {
    id: string;
    users: UserType[];
};

async function InboxPage() {
    const userId = await getUserId();

    if (!userId) {
        return (
            <main className="max-w-[1500px] mx-auto px-6 py-12">
                <p>You need to be authenticated...</p>
            </main>
        );
    }

    let conversations: ConversationType[] = [];
    try {
        const response = await apiService.get("/api/chat/");
        conversations = Array.isArray(response)
            ? response
            : response.conversations || [];
    } catch (err) {
        return <p>Error fetching conversations</p>;
    }

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">Inbox</h1>

            {conversations.map((conversation: ConversationType) => {
                return (
                    <Conversation
                        key={conversation.id}
                        userId={userId}
                        conversation={conversation}
                    />
                );
            })}
        </main>
    );
}

export default InboxPage;
