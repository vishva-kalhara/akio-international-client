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
                "text-black/55 leading-normal text-sm md:text-base text-center font-medium px-10 max-w-[75ch]",
                className
            )}
        >
            {children}
        </p>
    );
};

export default Paragraph;
