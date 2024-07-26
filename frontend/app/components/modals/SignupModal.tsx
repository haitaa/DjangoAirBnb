"use client";

import { useState } from "react";

import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

function SignupModal() {
    const signupModal = useSignupModal();

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
                <input
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                    placeholder="Repeat password"
                />

                <div className="p-5 bg-air text-wihte bg-airbnb rounded-xl opacity-80">
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
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        ></Modal>
    );
}

export default SignupModal;
