import type { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
    return (
        <h1 className="text-primary font-bold text-5xl text-center mt-2">
            {children}
        </h1>
    );
};

export default Heading;
