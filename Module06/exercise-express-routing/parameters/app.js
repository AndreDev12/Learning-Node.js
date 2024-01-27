const express = require('express');
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: 'Ivanhoe',
    author: 'Sir Walter Scott',
  },
  {
    id: 2,
    name: 'Colour Magic',
    author: 'Terry Pratchett',
  },
  {
    id: 3,
    name: 'The Bluest eye',
    author: 'Toni Morrison',
  },
];

app.get('/', (req, res) => res.send('Hello API!'));
app.get('/products/:id', (req, res) => {
  const findProduct = products.find(
    (product) => product.id === Number(req.params.id)
  );
  if (findProduct) {
    res.json(findProduct);
  }
});
app.get('/products', (req, res) => {
  const page = Number(req.query.page);
  const pageSize = Number(req.query.pageSize);

  if (page && pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    res.json(products.slice(start, end));
  } else {
    res.json(products);
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
