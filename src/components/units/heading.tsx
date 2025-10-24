import type { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
    return (
        <h1 className="text-primary font-bold text-4xl md:text-5xl text-center mt-1 md:mt-2 px-10">
            {children}
        </h1>
    );
};

export default Heading;
