# API LinkTracker

API LinkTracker es una aplicación desarrollada con Nest.js para gestionar enlaces enmascarados y obtener estadísticas de acceso.

## Instalación

Para ejecutar esta aplicación localmente, asegúrate de tener instalado Node.js y npm en tu sistema. Luego, sigue estos pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd api-linktracker

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).

Crea un archivo .env en el directorio raíz del proyecto y configura las siguientes variablesPORT=8080
PORT=8080

Uso
Crear un nuevo enlace
Para crear un nuevo enlace, utiliza el endpoint POST /links con la siguiente estructura JSON:

curl -X POST \
  <http://localhost:8080/links> \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "<https://ejemplo.com>"
  }'
  
Redireccionar a un enlace enmascarado
Para redirigir a un enlace enmascarado, utiliza el endpoint GET /links/l/:maskedUrl donde :maskedUrl es el segmento del enlace enmascarado: curl -I <http://localhost:8080/links/l/aBsJu>

Obtener estadísticas de acceso
Para obtener las estadísticas de acceso de un enlace enmascarado, utiliza el endpoint GET /links/:maskedUrl/stats donde :maskedUrl es el segmento del enlace enmascarado: curl <http://localhost:8080/links/aBsJu/stats>

Invalidar un enlace
Para invalidar un enlace enmascarado, utiliza el endpoint PUT /links/l/:maskedUrl/invalidate donde :maskedUrl es el segmento del enlace enmascarado: curl -X PUT <http://localhost:8080/links/l/aBsJu/invalidate>
