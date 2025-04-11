import fs from 'fs';

const path = './products.json';

class ProductManager {
    products = [];

    constructor() {
        this.loadProductsFromFile();
    }

    loadProductsFromFile() {
        if (fs.existsSync(path)) {
            const data = fs.readFileSync(path, 'utf-8');
            try {
                this.products = JSON.parse(data);
            } catch (error) {
                console.error('Error al parsear el archivo:', error);
                this.products = [];
            }
        } else {
            this.products = [];
        }
    }

    saveProductsToFile() {
        const data = JSON.stringify(this.products, null, 2);
        fs.writeFileSync(path, data);
    }

    addProduct(product) {
        this.products.push(product);
        this.saveProductsToFile();
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(p => p.id == id) || null;
    }
}

export { ProductManager };
