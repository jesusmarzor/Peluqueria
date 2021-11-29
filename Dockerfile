FROM node:16.13-alpine
LABEL maintainer="jesusmarzor28@gmail.com"
RUN adduser --disabled-password peluqueria
WORKDIR /app 
RUN chown -R peluqueria .
USER peluqueria
COPY package*.json ./
RUN npm ci
ENTRYPOINT [ "npm", "run", "test" ]