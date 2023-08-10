# Mercado Libre Chanllenge

El objetivo de esta etapa es conocer tus destrezas técnicas en el framework en el que sientas más comodidad, puede ser VueJS, ReactJS o
AngularJS. Para esto te encargarás de construir una app utilizando las APIs de Mercado Libre.
La app debe permitir al usuario hacer 3 cosas, buscar usando el API pública de items de MercadoLibre, visualizar el resultado de su búsqueda
en forma de listado y seleccionar alguno de los items de la lista para ver el detalle.
Para lograr lo anterior, Mercado Libre posee APIs abiertas a la comunidad de desarrolladores que pueden ser consumidas y que permiten
realizar búsquedas u obtener detalles de los artículos publicados por nuestros sellers.
Idealmente la app deberá contar con :
1. Búsqueda.
2. Resultados de la búsqueda.
3. Detalle de un producto.


## Dependencias

En el presente repositorio se ha desarrollado para FrontEnd Web Desktop, utilizando React + Vite de acuerdo a las siguientes dependencias:

- "react-js": "^18.2.0",
- "react-image-magnify": "^2.7.4",
- "sass": "^1.64.1",
- "vite": "^4.4.5"

### Instalación
Para la instalación de las dependencias requeridas para iniciar este proyecto se 
debe ejecutar el comando "npm install" o "npm i "

#### Inicio del proyecto
para levantar el proyecto en el navegador favor ejecutar

1. npm run build
2. npm run preview

##### Consideraciones

En la siguiente página el usuario accederá al inicio del buscador, el buscador puede buscar cualquier palabra ingresada en él, para entregar los resultados en otra pagina, dentro del buscador se pueden visualizar filtros, los cuales no se encuentran operativos por el momento, a excepción del ordenamiento de la lista.

En la página de detalle del producto, los campos de compra no se encuentran operativos, las secciones para opiniones, preguntas no fue posible acceder a los recursos de las apis por falta de token. 

Para la información al respecto de las variantes, tipos de colores del producto no venian detallado en la respuesta de la api /items, al intentar la conexion con la api products, más highligths no se tenia la autorización por falta de token.


