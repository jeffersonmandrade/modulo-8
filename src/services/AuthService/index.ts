import axios from "axios";

export interface LoginResponse {
    token: string;
}
const BASE_URL: string = "http://52.45.177.208:9041"


export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    const url = `${BASE_URL}/api/usuarios/login`;

    try {
        const response = await axios.post<LoginResponse>(
            url,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("Erro na API:", error.response.data);
            throw new Error("Falha no login: Verifique suas credenciais.");
        } else {
            console.error("Erro de conexão:", error.message);
            throw new Error("Erro ao conectar ao servidor.");
        }
    }
};
