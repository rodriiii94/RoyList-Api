# TFG API

Este proyecto es una API desarrollada como parte de un Trabajo de Fin de Grado (TFG). Proporciona funcionalidades específicas para gestionar y procesar datos relacionados con el proyecto.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes antes de comenzar:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/usuario/tfg-api.git
    cd RoyList-Api
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias. Un ejemplo de archivo `.env` podría ser:

    ```bash
    PORT=3000
    PRODUCTS_FILE=./data/products.json
    ```

4. Inicia el servidor:

    ```bash
    node server.js
    ```

    El servidor estará disponible en `http://localhost:3000`.

## Scripts disponibles

- `node server.js`: Inicia el servidor en modo producción.

## Contribución

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request. Agradecemos tus aportes.
