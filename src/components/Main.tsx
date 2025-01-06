// components/Main.tsx
import React from "react";
import { Box, Typography, Toolbar } from "@mui/material";
import Table from "./Table.tsx";
import RegisterButton from "./RegiterButton.tsx";

interface MainProps {
    drawerWidth: number;
}

const Main: React.FC<MainProps> = ({ drawerWidth }) => {


    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                ml: `${drawerWidth}px`
            }}
        >
            <Toolbar />
            <Typography variant="h4">Bem Vindo</Typography>
            <Typography variant="body1">
                Lista de carros.
            </Typography>
            <RegisterButton />
            <Table columns={[]}/>
        </Box>
    );
};

export default Main;
