import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "Primary" | "Outline";

type ButtonType = {
    variant?: ButtonVariant;
    children: ReactNode;
};

const Button = ({ variant = "Primary", children }: ButtonType) => {
    const getClasses = (v: ButtonVariant) => {
        switch (v) {
            case "Primary":
                return "bg-primary text-white";
            case "Outline":
                return "bp-ivory";
            default:
                return "";
        }
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:cursor-pointer flex gap-2 items-center",
                getClasses(variant)
            )}
        >
            {children}
        </button>
    );
};

export default Button;
