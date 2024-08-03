"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

import { handleLogin } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

function LoginModal() {
    const router = useRouter();
    const loginModal = useLoginModal();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<string[]>([]);

    async function submitLogin() {
        const formData = {
            email: email,
            password: password,
        };

        const response = await apiService.postWithoutToken(
            "/api/auth/login/",
            JSON.stringify(formData)
        );

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh);
            loginModal.close();
            router.push("/");
        } else {
            setErrors(response.non_field_errors);
        }
    }

    const content = (
        <>
            <form action={submitLogin} className="space-y-4">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                    placeholder="Your email address"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                    placeholder="Your password"
                />

                {errors.map((error, index) => {
                    return (
                        <div
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    );
                })}

                <CustomButton label="Submit" onClick={submitLogin} />
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
