# Contenedor de test

## Docker

Se crea un contenedor para poder ejecutar los test de la aplicación.

La imagen que he utilizado es **node v16.13 alpine**.

La versión **v16.13** la he escogido ya que es la ultima versión de node que tiene un estado [LTS Activo](https://nodejs.org/es/about/releases/).

Por otro lado, he escogido la versión **alpine** ya que es la imagen más pequeña que nos ofrece docker. A esta versión le instalaremos las dependencias de nuestra aplicación, así tendremos una imagen lo más simple posible.

## Github Action

He creado un **Github Action** que se encargará de actualizar el contenedor de Docker y subirlo a Dockerhub.