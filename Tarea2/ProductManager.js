import fs from 'fs';

const path = './products.json';

class ProductManager {
    products = [];

    constructor(products = []) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
        const data = JSON.stringify(this.products, null, 2);
        fs.writeFile(path, data, (err) => {
            if (err) console.error('No se pudo guardar', err);
        });
    }
    

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id == id);
        return product ? product : {};
    }
}


export { ProductManager,  };
