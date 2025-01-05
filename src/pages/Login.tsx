import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/AuthService";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { token } = await loginUser(email, password);
            localStorage.setItem("token", token);
            navigate("/home");
        } catch (error: any) {
            setErrorMessage(error.message || "Erro inesperado durante o login.");
        }
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: "30px",
                    width: "100%",
                    maxWidth: "400px",
                }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                    />
                    {errorMessage && (
                        <Typography color="error" align="center">
                            {errorMessage}
                        </Typography>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        fullWidth
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;
