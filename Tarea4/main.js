import { ProductManager } from './ProductManager.js';
import crypto from 'node:crypto';

const manager = new ProductManager();

const id1 = crypto.randomUUID();

manager.addProduct({ id: id1, name: 'Teclado', price: 1200 });
manager.addProduct({ id: 2, name: 'Monitor', price: 2000 });
manager.addProduct({ id: 3, name: 'MousePad de Sanlorenzo ;)', price: 400 });
manager.addProduct({ id: 4, name: 'Mouse', price: 700 });
manager.addProduct({ id: 5, name: 'Escritorio', price: 2500 });

console.log('Todos los productos:');
console.log(manager.getProducts());
