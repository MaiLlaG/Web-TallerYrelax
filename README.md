# TallerYrelax

## Diseño

- Diseño de la aplicación (draw.io): [Diseño](./doc/estructura%20proyecto%20Talleres%20web%20principal.drawio)
- Diseño de la BBDD (draw.io): [BBDD](./doc/Entidad%20relaci%C3%B3n%20proyecto%20TallerYrelax.drawio)


## Codigo

Hay varias partes:
- En el raíz está la aplicación de Spring Boot (el backend).
- Hay test hechos en insomnia [aquí](./src/test/insomnia/talleryrelax-insomnia.json)
- En [/talleryrelax-cliente](./talleryrelax-cliente/) está el front para clientes (hecho con React).
- En [/talleryrelax-gestion](./talleryrelax-gestion/) está el front para clientes (hecho con React).

## Cómo usarlo

Tienes que tener instalado:
- Java versión 17.0.6
- Maven versión 3.8.7
- Node versión v16.14.0
- Npm versión 8.3.1

Bájate el código y despues:
- Entra en el raiz (Web-TallerYrelax) y ejecuta  `.\mvnw.cmd install` para compilar el backend. Para arrancarlo puedes lanzarlo desde el VS Code o ejecutar `.\mvnw.cmd spring-boot:run`
- Entra en `talleryrelax-cliente` y `talleryrelax-gestion` y ejecuta en ellos `npm install` para compilarlo y `npm start` para arrancarlo.

Una vez hecho lo anterior puedes entrar en:
- [Consolsa de BBDD de h2](http://localhost:8080/h2-console/). Usuario `sa` y sin contraseña.
- [Listado de métodos de pago](http://localhost:8080/publico/metodosDePago). Sólo para ver que la parte de back está funcionando bien.
- [Aplicación de cliente](http://localhost:3000/)
- [Aplicación de gestión](http://localhost:3001/)

