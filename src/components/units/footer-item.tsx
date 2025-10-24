import type { PropsWithChildren } from "react";

const FooterItem = ({ children }: PropsWithChildren) => {
    return (
        <p className="text-white/60 font-medium text-sm mt-3 text-center leading-tight">
            {children}
        </p>
    );
};

export default FooterItem;
