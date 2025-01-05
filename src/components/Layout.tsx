import React, { ReactNode } from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Menu from "./Menu.tsx";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="container">
                <Header  />
                <Menu />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
