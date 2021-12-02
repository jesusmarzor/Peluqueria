FROM node:16.13-alpine
LABEL maintainer="jesusmarzor28@gmail.com"
RUN adduser --disabled-password peluqueria
WORKDIR /app
RUN chown -R peluqueria .
USER peluqueria
COPY --chown=peluqueria package*.json ./
RUN npm ci
WORKDIR /app/test
ENTRYPOINT [ "npm", "run", "test" ]