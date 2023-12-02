const path = require("path");

console.log(__dirname);

// Rutas de combinación
console.log(path.join("stores", "201"));

// Determinación de extensiones de nombre de archivo
console.log(path.extname("sales.json"));

// Obtención de todo lo que es necesario saber sobre un archivo o ruta de acceso
console.log(path.parse("stores/201/sales.json"));
