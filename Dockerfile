FROM node:latest

# Copia os arquivos do diretório atual para o diretório /app no contêiner
COPY . /app

# Define a variável de ambiente para a porta (opcional, caso queira mudar a porta)
ARG PORT=5173
WORKDIR /app
ENV PORT=$PORT

# Expondo a porta configurada
EXPOSE $PORT

# Instala as dependências
RUN npm install

# Define o comando para rodar o aplicativo
ENTRYPOINT ["npm", "run", "dev"]
