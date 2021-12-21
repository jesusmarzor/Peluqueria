# Servicios de registros de logs y configuración remota

## Servicio de registros de logs

Los requisitos que necesito son:
- Fácil configuración.
- Buena documentación.
- Exportar en formato JSON.

He estado investigando sobre varios registros de logs y estaba entre Bunyan, Morgan y Winston.

[Bunyan](https://github.com/trentm/node-bunyan) tiene más versiones, menos dependencias y su documentación me ha parecido dificil de entender.

[Morgan](https://github.com/expressjs/morgan) tiene menos issues en su repositorio y para exportar en formato json tienes que instalar aparte [morgan-json](npmjs.com/package/morgan-json).

[Winston](https://github.com/winstonjs/winston) tiene una comunidad más grande de mantenedores, más descargas diarias, más descargas semanales, más descargas mensuales, más estrellas en Github y más seguidores en Github.

Al final me decanté por **Winston** ya que cumple todos mis requisitos y toda la comunidad que tiene detrás ayuda muchísimo a cualquier problema que te surja ya que, al ser tan grande, lo más seguro es que esté resuelto.

## Servicio de configuración remota

Para el uso de variables de entorno he usado **Dotenv** y para la configuración remota he usado **Etcd3**, como se recomendó en clase.
