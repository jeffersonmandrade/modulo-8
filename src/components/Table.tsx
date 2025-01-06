import React, { useEffect, useState } from "react";
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper,
    TablePagination,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import CarService from "../services/CarService";
import { columns } from "../config/columns-cars";

interface Car {
    id: number;
    modelo: string;
    ano: number;
    cor: string;
    cavalosDePotencia: number;
    fabricante: string;
    pais: string;
}
interface TableProps {
    columns: string[];
}

const Table: React.FC<TableProps> = () => {
    const [data, setCars] = useState<Car[]>([]);
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(10);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [open, setOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [formData, setFormData] = useState<Car>({
        id: 0,
        modelo: '',
        ano: 0,
        cor: '',
        cavalosDePotencia: 0,
        fabricante: '',
        pais: ''
    });

    const fetchCars = async () => {
        try {
            const response: any = await CarService.getAllCarsPages(page, size);
            setCars(response.data);
            setTotalCount(response.total);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };

    useEffect(() => {
        fetchCars();
    }, [page, size]);

    const handleDelete = (id: number) => {
        CarService.deleteCar(id);
        setSize(size-1)
    };

    const handleUpdate = (car: Car) => {
        setSelectedCar(car);
        setFormData(car);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        if (selectedCar) {
            CarService.updateCar(selectedCar.id, formData)
                .then(() => {
                    setOpen(false);
                    fetchCars();
                })
                .catch((error) => console.error("Error updating car:", error));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSize(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper>
            <TableContainer>
                <MuiTable>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell key={col}>{col}</TableCell>
                            ))}
                            <TableCell>Update</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                {columns.map((col) => (
                                    <TableCell key={col}>{row[col.toLowerCase() as keyof Car]}</TableCell>
                                ))}
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleUpdate(row)}>
                                        Update
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="secondary" onClick={() => handleDelete(row.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={parseInt(String(totalCount))}
                rowsPerPage={size}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Car</DialogTitle>
                <DialogContent>
                    <TextField
                        name="modelo"
                        label="Modelo"
                        value={formData.modelo}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="ano"
                        label="Ano"
                        value={formData.ano}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="cor"
                        label="Cor"
                        value={formData.cor}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="cavalosDePotencia"
                        label="Cavalos de Potência"
                        value={formData.cavalosDePotencia}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="fabricante"
                        label="Fabricante"
                        value={formData.fabricante}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="pais"
                        label="País"
                        value={formData.pais}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default Table;
