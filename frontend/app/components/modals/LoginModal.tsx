"use client";

import { useState } from "react";

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

function LoginModal() {
    const loginModal = useLoginModal();

    const content = (
        <>
            <form className="space-y-4">
                <input
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                    placeholder="Your email address"
                />
                <input
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                    placeholder="Your password"
                />

                <div className="p-5 bg-air text-wihte rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log("Closed")}
                />
            </form>
        </>
    );

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        ></Modal>
    );
}

export default LoginModal;
