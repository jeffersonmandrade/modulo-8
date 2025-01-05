import axios from "axios";

const BASE_URL = "http://localhost:8080";

export interface Car {
    id: number;
    modelo: string;
    ano: number;
    cor: string;
    cavalosDePotencia: number;
    fabricante: string;
    pais: string;
}

class CarService {
    getAllCars(): Promise<Car[]> {
        return axios.get<Car[]>(`${BASE_URL}/api/carros`).then((response) => response.data);
    }

    getCarById(id: number): Promise<Car> {
        return axios.get<Car>(`${BASE_URL}/api/carros/${id}`).then((response) => response.data);
    }

    createCar(car: Omit<Car, "id">): Promise<Car> {
        return axios.post<Car>(`${BASE_URL}/api/carros`, car).then((response) => response.data);
    }

    updateCar(id: number, car: Omit<Car, "id">): Promise<Car> {
        return axios.put<Car>(`${BASE_URL}/api/carros/${id}`, car).then((response) => response.data);
    }

    deleteCar(id: number): Promise<void> {
        console.log(id);
        return axios.delete(`${BASE_URL}/api/carros/${id}`).then(() => {});
    }

    getAllCarsPages(page: number, size: number): Promise<Car[]> {
        return axios
            .get<Car[]>(`${BASE_URL}/api/carros`, {
                headers: {
                    "page": page,
                    "size": size,
                },
            })
            .then((response) => {
                const totalCount = response.headers['x-total-count'];
                return {
                    data:response.data,
                    total: totalCount
                }


            })
            .catch((error) => {
                console.error("Error fetching cars:", error);
                throw error;
            });
    }

}

export default new CarService();
