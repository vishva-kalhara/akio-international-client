import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const Heading = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <h1
            className={cn(
                "text-primary font-bold text-4xl md:text-5xl text-center mt-1 md:mt-2 px-10",
                className
            )}
        >
            {children}
        </h1>
    );
};

export default Heading;
