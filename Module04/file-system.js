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

// Un apunte sobre recursividad
async function findFiles(folderName) {
  const items = await fs.readdir(folderName, { withFileTypes: true });
  items.forEach((item) => {
    if (item.isDirectory()) {
      // this is a folder, so call this method again and pass in
      // the path to the folder
      findFiles(`${folderName}/${item.name}`);
    } else {
      console.log(`Found file: ${item.name} in folder ${folderName}`);
    }
  });
}
findFiles("stores");
