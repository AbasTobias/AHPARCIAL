import { createServer } from 'http';
import ProductManager from './ProductManager.js';

const productManager = new ProductManager();

const server = createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end('<h1>Bienvenido</h1>');

    } else if (url === '/products' && method === 'GET') {
        const list = await productManager.getProducts();
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(list));

    } else if (url.startsWith('/products/') && method === 'GET') {
        const id = url.split('/')[2];
        const product = await productManager.getProductById(parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if (product) {
            res.statusCode = 200;
            res.end(JSON.stringify(product));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Producto no encontrado' }));
        }

    } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.end('<h1>Página no encontrada</h1>');
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
