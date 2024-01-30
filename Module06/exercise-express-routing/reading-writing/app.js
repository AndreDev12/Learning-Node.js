const express = require('express');
const app = express();
const port = 3000;

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.route('/').get((req, res) => res.send('Home'));

app
  .route('/products')
  .get((req, res) => {
    res.json(products);
  })
  .post((req, res) => {
    const newProduct = { ...req.body, id: products.length + 1 };
    products = [...products, newProduct];
    res.json(newProduct);
  })
  .put((req, res) => {
    const { id } = req.body;
    for (const product of products) {
      if (product.id === id) {
        products[id - 1] = req.body;
      }
    }
    res.json(req.body);
  })
  .delete((req, res) => {
    const productIndex = products.findIndex(
      (product) => product.id === req.body.id
    );
    if (productIndex >= 0) {
      const removedProduct = products.splice(productIndex, 1)[0];
      res.json(removedProduct);
    }
  });

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
