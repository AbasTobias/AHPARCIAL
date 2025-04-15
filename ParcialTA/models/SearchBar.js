
const barra = document.getElementById('barraBusqueda');
const resultados = document.getElementById('resultados');
let productos = [];

// Cargo el json
fetch('products.json') 
  .then(res => res.json())
  .then(data => {
    productos = data;
    mostrarResultados(productos);
  })
  .catch(error => {
    resultados.innerHTML = '<p>Error al cargar los productos.</p>';
    console.error(error);
  });

function mostrarResultados(filtrados) {
  resultados.innerHTML = '';
  if (filtrados.length === 0) {
    resultados.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }
  filtrados.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('resultado');
    div.textContent = `${producto.nombre} - $${producto.precio}`;
    resultados.appendChild(div);
  });
}

barra.addEventListener('input', () => {
  const texto = barra.value.toLowerCase();
  const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
  mostrarResultados(filtrados);
});
