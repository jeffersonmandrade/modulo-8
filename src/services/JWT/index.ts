class JwtAuthService {
    public static decodeToken(token: string): object | null {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/'); // Corrige o base64 URL

            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map((char) => `%${('00' + char.charCodeAt(0).toString(16)).slice(-2)}`)
                    .join('')
            );

            return JSON.parse(jsonPayload);
        } catch (error) {
            console.error("Erro ao decodificar o token JWT:", error);
            return null;
        }
    }
}

export default JwtAuthService;
