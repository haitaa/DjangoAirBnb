import { create } from "zustand";

interface SignupModalProps {
    isOpen: boolean,
    open: () => void;
    close: () => void;
}

const useSignupModal = create<SignupModalProps>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}))

export default useSignupModal;