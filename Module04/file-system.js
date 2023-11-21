const fs = require("fs").promises;

// Muestra del contenido en un directorio
async function showContentDirectory() {
  const items = await fs.readdir("stores");
  console.log(items);
}
showContentDirectory();

// Distinción del tipo de contenido
async function contentTypeDistinction() {
  const items = await fs.readdir("stores", { withFileTypes: true });
  console.log(items);
  for (let item of items) {
    const type = item.isDirectory() ? "folder" : "file";
    console.log(`${item.name}: ${type}`);
  }
}
contentTypeDistinction();
