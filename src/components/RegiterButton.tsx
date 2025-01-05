import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterButton: React.FC = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/registro"); // Altere para o caminho da página do seu formulário
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleRedirect}>
                Adicionar novo Registro
            </Button>
        </div>
    );
};

export default RegisterButton;
