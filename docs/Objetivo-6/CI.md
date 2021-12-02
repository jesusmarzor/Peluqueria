# Integración Continua

## Travis CI
Como primer CI, he escogido [Travis-CI](https://www.travis-ci.com/about-us/) porque el entorno de integración continua esta compuesto de multiples runtimes. De este modo, podemos probar nuestro código en distintas versiones sin tenerlas instaladas localmente. Tienen varias máquinas virtuales preparadas para cada combinación y puedes instalarle lo que necesites.

He optado por probar la ejecución de los test en versiones pares de node ya que son las que actualmente están activas. Por ahora estas son las versiones: 12, 14, 16.

Las versiones 12 y 14 todavía se siguen usando ya que hasta abril de 2022 y 2023 no se dejarán de mantener. La version 18 todavía no se ha lanzado. Todo esto está documentado en la página oficial [aquí](https://nodejs.org/es/about/releases/).

Me he informado de que la versión 12 tiene algunos bugs ejecutando jest, he decidido probarla para ver si los test aun así pasaban. El resultado ha sido satisfactorio.

En el archivo de Travis, ejecuto los test de forma local.

## Semaphore CI
Como segundo CI, he escogido [SemaphoreCI](https://semaphoreci.com/) porque comparado con otros CI, su interfaz de usuario es simple e intuitiva. Además de esto, ofrece una integración muy buena con Github hasta tal punto que puedes ver, al igual que con Travis-CI, en cada commit si ha pasado los test o no.

Desde la propia web, puedes observar como se van ejecutando los test y si quieres modificar el fichero *.yml*, puedes hacerlo desde ahí y hacer un push en la rama donde se encuentra el fichero o crear una rama nueva.

En el archivo de Semaphore, ejecuto docker utilizando la imagen que subimos a Dockerhub en el objetivo anterior.
