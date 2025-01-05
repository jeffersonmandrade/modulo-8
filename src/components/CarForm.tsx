import React, { useState } from "react";
import {
    TextField,
    Button,
    Paper,
    Typography,
    Grid,
    Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CarService from "../services/CarService";

const CarForm: React.FC = () => {
    const [modelo, setModelo] = useState<string>("");
    const [ano, setAno] = useState<number | string>("");
    const [cor, setCor] = useState<string>("");
    const [cavalosDePotencia, setCavalosDePotencia] = useState<number | string>("");
    const [fabricante, setFabricante] = useState<string>("");
    const [pais, setPais] = useState<string>("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const carData = {
            modelo,
            ano,
            cor,
            cavalosDePotencia,
            fabricante,
            pais,
        };

        try {
            await CarService.createCar(carData);
            alert("Carro cadastrado com sucesso!");
            setModelo("");
            setAno("");
            setCor("");
            setCavalosDePotencia("");
            setFabricante("");
            setPais("");

            navigate("/home");
        } catch (error) {
            console.error("Error creating car:", error);
            alert("Erro ao cadastrar o carro.");
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Cadastro de Carro
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Modelo"
                                variant="outlined"
                                value={modelo}
                                onChange={(e) => setModelo(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Ano"
                                variant="outlined"
                                type="number"
                                value={ano}
                                onChange={(e) => setAno(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Cor"
                                variant="outlined"
                                value={cor}
                                onChange={(e) => setCor(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Cavalos de Potência"
                                variant="outlined"
                                type="number"
                                value={cavalosDePotencia}
                                onChange={(e) => setCavalosDePotencia(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Fabricante"
                                variant="outlined"
                                value={fabricante}
                                onChange={(e) => setFabricante(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="País"
                                variant="outlined"
                                value={pais}
                                onChange={(e) => setPais(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Novo Carro!
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default CarForm;
