import axios from "axios";

export interface LoginResponse {
    token: string;
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    const url = "http://localhost:8080/api/usuarios/login";

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

        return response.data; // Retorna o token no formato esperado
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
