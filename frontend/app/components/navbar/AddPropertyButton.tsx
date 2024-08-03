"use client";

import React from "react";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import LoginModal from "../modals/LoginModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface addPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<addPropertyButtonProps> = ({ userId }) => {
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();
    const airbnbYourHome = () => {
        if (userId) {
            addPropertyModal.open();
        } else {
            loginModal.open();
        }
    };

    return (
        <div
            onClick={airbnbYourHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            AirBnb your home
        </div>
    );
};

export default AddPropertyButton;
