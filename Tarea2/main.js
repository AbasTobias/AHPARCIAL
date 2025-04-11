import { ProductManager } from './ProductManager.js';
import crypto from 'node:crypto';

const id = crypto.randomUUID();
const admin = new ProductManager();

admin.addProduct({ id, name: 'Teclado', price: 1200 });
admin.addProduct({ id: 2, name: 'Monitor', price: 2000 });
admin.addProduct({id: 3, name: 'MousePad de Sanlorenzo ;)', price:400});

console.log(admin.getProducts());
