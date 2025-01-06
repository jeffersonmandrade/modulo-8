import axios from "axios";

const BASE_URL: string = "http://52.45.177.208:9041"

export interface Car {
    id: number;
    modelo: string;
    ano: number;
    cor: string;
    cavalosDePotencia: number;
    fabricante: string;
    pais: string;
}
interface PaginatedCarsResponse {
    data: Car[];
    total: number;
}


class CarService {

    createCar(car: {
        modelo: string;
        ano: number | string;
        cor: string;
        cavalosDePotencia: number | string;
        fabricante: string;
        pais: string
    }): Promise<Car> {
        return axios.post<Car>(`${BASE_URL}/api/carros`, car).then((response) => response.data);
    }

    updateCar(id: number, car: Omit<Car, "id">): Promise<Car> {
        return axios.put<Car>(`${BASE_URL}/api/carros/${id}`, car).then((response) => response.data);
    }

    deleteCar(id: number): Promise<void> {
        console.log(id);
        return axios.delete(`${BASE_URL}/api/carros/${id}`).then(() => {});
    }

    getAllCarsPages(page: number, size: number): Promise<PaginatedCarsResponse> {
        return axios
            .get<Car[]>(`${BASE_URL}/api/carros`, {
                headers: {
                    "page": page.toString(),
                    "size": size.toString(),
                },
            })
            .then((response) => {
                const totalCount = parseInt(response.headers['x-total-count'], 10);
                return {
                    data: response.data,
                    total: totalCount,
                };
            })
            .catch((error) => {
                console.error("Error fetching cars:", error);
                throw error;
            });
    }

}

export default new CarService();
