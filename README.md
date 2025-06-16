# 🌐 RoyList API – Microservicio para Catálogo de Productos

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey)](https://expressjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**RoyList API** es un microservicio backend creado con **Node.js** y **Express**, encargado de servir archivos `.json` que contienen un catálogo de productos de supermercado. Estos datos son consumidos por la aplicación web [RoyList](https://github.com/rodriiii94/RoyList), para permitir a los usuarios añadir productos reales a sus listas de la compra.

Los archivos JSON ya están generados y este servidor solo se encarga de exponerlos de forma eficiente y ordenada.

---

## 📦 Estructura del proyecto

```bash
├── products/
│   └── {id}.json
├── products_mapping.json     
├── server.js                 
├── package.json
└── README.md
```

---

## 🚀 Endpoints disponibles

`GET /data`  
Devuelve el archivo `products_mapping.json`, que actúa como índice global de productos.

`GET /products/:id`  
Devuelve el archivo de producto individual correspondiente al `id` solicitado (por ejemplo, `4717.json`).

---

## ⚙️ Instalación

```bash
git clone https://github.com/rodriiii94/RoyList-Api.git
cd RoyList-Api
npm install
node server.js
```

El servidor quedará accesible por defecto en `http://localhost:3000`.

---

## 🌍 Uso en producción

* Puedes desplegar este microservicio en un VPS o servicio cloud.
* Recomendado: utilizar Nginx como proxy inverso para servir los archivos estáticos con caché.
* Configura tareas externas para actualizar los archivos `.json` si el catálogo cambia periódicamente.

---

## 🧩 Integración con RoyList

Este backend está diseñado para funcionar junto a la aplicación principal RoyList:
➡️ [https://github.com/rodriiii94/RoyList](https://github.com/rodriiii94/RoyList)

---

## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

## 👨‍💻 Autor

**José Rodrigo Santamaría**
Microservicio backend para el catálogo de productos de la aplicación [RoyList](https://github.com/rodriiii94/RoyList).
Contacto: [rodrisantaga94@gmail.com](mailto:rodrisantaga94@gmail.com)
