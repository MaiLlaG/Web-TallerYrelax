# TallerYrelax

## Diseño

- Diseño Web de la aplicación (draw.io)
- Diseño funcional de la aplicación (draw.io)


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

## Notas sobre GitHub

Aparecen dos usuarios. Ambos soy yo:
- MaiLlaG Maite Llamas: La cuenta con la que he creado el respositorio.
- Maitlla Maite Llamas: Mi cuenta personal. Le di permisos de "contributor" para poder hacer commits con este usuario y no tener que cambiar mis credenciales en VS Code.

## Ejecución del proyecto por semana

- abr-10: 
  - Pruebas haciendo la estructura de navegación y el diseño de cómo sería la web, en html y css solamente.
  - Pruebas con un front en React, para hacerme una idea.
  - Comienzo el proyecto real creando un repositorio en Github y haciendo el primer commit.
- abr-17:
  - Creo el proyecto de Spring Boot (desde https://start.spring.io/)
  - Quito alguna dependencia de seguridad que sobraba.
  - Añado la entidad/repositorio/controlador para la entidad "mensaje" y sus correspondientes pruebas con insomnia.
- abr-24: 
  - Añado entidad "Taller" en el backend.
  - Permitir llamadas CORS en el back porque intentando crear un front de prueba para llamar al back daba errores.
  - Añado la estructura del front para la parte de clientes en React.
  - Añado la entidad "Métodos de pago" en el backend.
  - Separo los métodos públicos (los que usan los clientes) de los de la parte de gestión. Para en un futuro securizarlos aparte y porque no se usan los mismos en los dos sitios.
  - Añado las entidades "Cliente" y "Pago" y las relaciones entre las entidades existentes.
- may-01:
  - Tener en cuenta el usuario en el pago (de momento uso un identificador de ejemplo porque no hay autenticación).
  - Primeras pruebas de autenticación con Firebase de Google en el front.
  - Pruebo también la autenticación en el back.
  - Con la autenticación ya funcionando, cambio el usuario de ejemplo que usaba en el back por el que se saca de la autenticación (sólo en el back).
  - No dejar comprar talleres si no tienen plazas disponibles (en el back).
  - Cambios en el front para que llame al back usando la autenticación.
  - Empiezo a dar la apariencia a la parte de cliente.
- may-08
  - Cambios en el front de clientes para permitir comprar un taller y sólo si estás autenticado.
  - Arreglado el logout con Google, que no funcionaba bien.
  - En el backend cargar las imágenes en los talleres y mostrarlas en el front (de momento no se pueden subir desde el front, así que las subo desde insomnia).
  - Creo la estructura del front de gestión con la gestión de talleres y clientes.
  - Permitir subir archivos (imágenes de talleres) desde el front de gestión.
  - Añado control de react para seleccionar fechas. (React Datepicker)
- may-15
  - Junto la parte de añadir y editar (front de gestión) en un único punto porque son práctiamente iguales.
  - Pongo la apariencia del front de gestión con Bootstrap.
  - Añado el resto de campos al taller y dejo que se ponga HTML en la descripción.
  - Añado entidad "Trabajadores" en el back y en el front de gestión.
  - "MensajesList" en el front de gestión, para que reciba y se puedan consultar los mensajes enviados desde "Contacto" en el front cliente.
- may-22
  - Termino la parte de mensajes de contacto.
  - Añado validaciones de formularios (en front de cliente y gestión).
  - Termino la apariencia en el front cliente con Bootstrap y mezcla de css.
  - Creo un alert personalizado para los dos front.
  - Termino de documentar y pequeños cambios.
- ------------------------------------------------------






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
