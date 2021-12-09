# Integración Continua

## Travis CI
Como primer CI, he escogido [Travis-CI](https://www.travis-ci.com/about-us/) porque el entorno de integración continua esta compuesto de multiples runtimes. De este modo, podemos probar nuestro código en distintas versiones sin tenerlas instaladas localmente. Tienen varias máquinas virtuales preparadas para cada combinación y puedes instalarle lo que necesites.

He optado por probar la ejecución de los test en versiones pares de node ya que son las que actualmente están activas. Por ahora estas son las versiones: 12, 14, 16.

Las versiones 12 y 14 todavía se siguen usando ya que hasta abril de 2022 y 2023 no se dejarán de mantener. La version 18 todavía no se ha lanzado. Todo esto está documentado en la página oficial [aquí](https://nodejs.org/es/about/releases/).

Me he informado de que la versión 12 tiene algunos bugs ejecutando jest, he decidido probarla para ver si los test aun así pasaban. El resultado ha sido satisfactorio.

En el archivo de Travis, ejecuto los test de forma local.

## Semaphore CI
Como segundo CI, he escogido [SemaphoreCI](https://semaphoreci.com/). Quería elegir un CI que se pueda integrar de manera fácil con github y que me ejecute los test muy rápido. Este CI me ha sorprendido ya que he realizado varios test y los tiempos de ejecución han sido: 0.15s, 0.20s, 0.16s, 0.18s, 0.17s. Comparado con el CI anterior, este ha llegado a ejecutarse en la mitad de tiempo. Antes de probarlo me había informado de su rapidez en su página web mencionada anteriormente. Allí se habla de que esto se debe a sus recursos de hardware dedicados y sus pruebas en paralelo.

Por otro lado, tambien he realizado los test en [CircleCI](https://circleci.com/) pero los tiempos de ejecución no han sido muy buenos ya que rondan los 0.40s y 0.60s. Por este motivo me decanté por **semaphore** ya que sus tiempos de ejecución me dejaron muy impresionado y agradecido.

En el archivo de Semaphore, ejecuto docker utilizando la imagen que subimos a Dockerhub en el objetivo anterior.
