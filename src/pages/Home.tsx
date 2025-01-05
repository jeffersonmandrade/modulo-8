import React from "react";
import { Box, CssBaseline} from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";
import Main from "../components/Main.tsx";

const Home: React.FC = () => {
    const drawerWidth = 240;


    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <CssBaseline />
            <Header />
            <Sidebar />
            <Main drawerWidth={drawerWidth} />
            <Footer />
        </Box>
    );
};

export default Home;
