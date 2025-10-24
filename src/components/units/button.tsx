import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "Primary" | "Outline";

type ButtonType = {
    variant?: ButtonVariant;
    children: ReactNode;
    className?: string;
};

const Button = ({ variant = "Primary", children, className }: ButtonType) => {
    const getClasses = (v: ButtonVariant) => {
        switch (v) {
            case "Primary":
                return "bg-primary text-white";
            case "Outline":
                return "bg-white/85 border border-black/10 hover:border-primary/80 transition-all  ease-in";
            default:
                return "";
        }
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:cursor-pointer flex gap-2 items-center",
                getClasses(variant),
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
