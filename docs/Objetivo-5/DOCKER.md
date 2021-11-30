# Contenedor de test

## Docker

Se crea un contenedor para poder ejecutar los test de la aplicación.

La imagen que he utilizado es **node v16.13 alpine**.

La versión **16.13** la he escogido ya que es la ultima versión de node que tiene un estado [LTS Activo](https://nodejs.org/es/about/releases/).

Por otro lado, estaba entre 3 distros: **alpine**, **buster-slim** y **stretch-slim**. Cada una de estas, pesa **38.13MB**, **60.75MB** y **56.48MB**.

He leido que mucha gente no usa **alpine** porque al pesar tan poco, no contiene paquetes que se podrían necesitar, pero como solo vamos a usar la imagen para ejecutar los test, he escogido esa versión. Solo tengo que tener en cuenta que cuando vaya a ejecutar los test, tengo que instalar las dependencias necesarias.

Gracias a la distro **alpine**, he creado una imagen ligera y con lo necesario para la ejecución de los test.

## Github Action

He creado un **Github Action** que se encargará de actualizar el contenedor de Docker y subirlo a Dockerhub.
