import React, { useEffect, useState } from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";
import JwtAuthService from "../services/JWT";

const drawerWidth = 240;

const Sidebar: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate(); // Hook para navegação

    useEffect(() => {
        const token = localStorage.getItem("token") || "";
        const payload = JwtAuthService.decodeToken(token)
        if (payload) {
            setEmail(payload["email"]);
        }
    }, []);

    const handleBackToPage = () => {
        localStorage.clear()
        navigate("/");
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box sx={{ width: drawerWidth, bgcolor: 'background.paper', padding: 2 }}>
                <Divider />
                <List sx={{ paddingTop: 16 }}>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary={`${email}`} />
                    </ListItem>
                    <Divider sx={{ marginY: 1 }} />
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleIcon sx={{ color: 'green' }} />
                        </ListItemIcon>
                        <ListItemText primary="Status: Active" />
                    </ListItem>
                </List>
                <Divider sx={{ marginY: 2 }} />
                {/* Botão para voltar à página */}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 'auto' }}
                    onClick={handleBackToPage} // Chama a função de navegação
                >
                 Sair
                </Button>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
