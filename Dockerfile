FROM node:latest
COPY . /app
ARG PORT=5173
WORKDIR /app
ENV PORT=$PORT
EXPOSE $PORT
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]
