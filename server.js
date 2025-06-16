const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const MAPPING_FILE = path.join(__dirname, "product_mapping.json"); // Archivo mapeo
const PRODUCTS_FOLDER = path.join(__dirname, "products"); // Carpeta de productos

// Ruta para obtener el archivo product_mapping.json
app.get("/api/data", (req, res) => {
    console.log(`📄 Buscando: ${MAPPING_FILE}`);
    if (!fs.existsSync(MAPPING_FILE)) {
        console.error("❌ Archivo product_mapping.json NO encontrado");
        return res.status(404).json({ error: "Archivo product_mapping.json no encontrado" });
    }

    try {
        const data = JSON.parse(fs.readFileSync(MAPPING_FILE, "utf8"));
        console.log("📄 Archivo product_mapping.json encontrado");
        res.json(data);
    } catch (error) {
        console.error("❌ Error leyendo product_mapping.json", error);
        res.status(500).json({ error: "Error al leer product_mapping.json" });
    }
});

// Ruta para obtener un producto por ID
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const filePath = path.join(PRODUCTS_FOLDER, `${productId}.json`);

    console.log(`📦 Buscando producto: ${filePath}`);
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Producto ${productId} NO encontrado`);
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    try {
        const productData = JSON.parse(fs.readFileSync(filePath, "utf8"));
        console.log(`📦 Producto ${productId} encontrado`);
        res.json(productData);
    } catch (error) {
        console.error(`❌ Error leyendo el archivo ${productId}.json`, error);
        res.status(500).json({ error: "Error al leer el archivo del producto" });
    }
});

app.listen(3000, () => console.log("✅ Servidor corriendo en http://localhost:3000"));
