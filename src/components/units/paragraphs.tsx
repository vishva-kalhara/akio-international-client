import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const Paragraph = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                "text-black/55 leading-normal text-center font-medium",
                className
            )}
        >
            {children}
        </p>
    );
};

export default Paragraph;
