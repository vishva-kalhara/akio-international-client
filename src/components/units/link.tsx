import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const Link = ({
    children,
    href,
    isUnderlined = true,
    className,
}: {
    href: string;
    children: ReactNode;
    isUnderlined?: boolean;
    className?: string;
}) => {
    return (
        <a
            href={href}
            className={cn(
                "text-primary font-semibold",
                isUnderlined && "hover:underline underline-offset-3",
                className
            )}
        >
            {children}
        </a>
    );
};

export default Link;
