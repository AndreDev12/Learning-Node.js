const fs = require("fs").promises;
const path = require("path");

async function calculateSalesTotal(){
  let salesTotal = 0;

  // Read files loop
  return salesTotal;
}

async function findSalesFiles(folderName) {
  // this array will hold sales files as they are found
  let salesFiles = [];

  async function findFiles(folderName) {
    // read all the items in the current folder
    const items = await fs.readdir(folderName, { withFileTypes: true });

    // iterate over each found item
    for (item of items) {
      // if the item is a directory, it will need to be searched
      if (item.isDirectory()) {
        // call this method recursively, appending the folder name to make a new path
        await findFiles(path.join(folderName, item.name));
      } else {
        // Make sure the discovered file is a .json file
        if (path.extname(item.name) === ".json") {
          // store the file path in the salesFiles array
          await salesFiles.push(path.join(folderName, item.name));
        }
      }
    }
  }

  await findFiles(folderName);

  return salesFiles;
}

async function main() {
  const salesDir = path.join(__dirname, "stores");
  const salesTotalsDir = path.join(__dirname, "salesTotals");
  const pathToCreate = path.join(__dirname, "stores", "201", "newDirectory");
  const pathToFile = path.join(__dirname, "greeting.txt");

  await fs.writeFile(pathToFile, String("¡Hola mundo!"));

  try {
    await fs.mkdir(salesTotalsDir);
    await fs.mkdir(pathToCreate);
  } catch {
    console.log(`${pathToCreate} already exists.`);
    console.log(`${salesTotalsDir} already exists.`);
    // return;
  }

  // find paths to all the sales files
  const salesFiles = await findSalesFiles(salesDir);

  // write the total to the "totals.txt" file
  await fs.writeFile(path.join(salesTotalsDir, "totals.txt"), String());
  console.log(`Wrote sales totals to ${salesTotalsDir}`);

  const data = JSON.parse(await fs.readFile("stores/201/sales.json"));
  
  // write the total to the "totals.json" file
  await fs.writeFile(path.join("salesTotals/totals.txt"), `${data.total}\r\n`, {flag: "a"})
}

main();
