import React from "react";
import { Box, CssBaseline} from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";
import CarForm from "../components/CarForm.tsx";

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <CssBaseline />
            <Header />
            <Sidebar />
            <Box
                sx={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                }}
            >
                <CarForm />
            </Box>
            <Footer />
        </Box>
    );
};

export default Home;
