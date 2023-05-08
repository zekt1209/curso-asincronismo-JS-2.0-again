// Importamos a fetch
import fetch from 'node-fetch';

// Declaramos la Endpoint base de la API
const API = 'https://api.escuelajs.co/api/v1';

// Vamos a hacer la funcion fetch data donde vamos a recibir la promesa de fetch y la API para transformar la data

const fetchData = async (urlApi) => {
    // Llamamos a la promesa fetch y le pasamos la API
    const response = await fetch(urlApi);

    // Transformamos la data para poder usarla
    const data = await response.json();

    // Retornamos la data ya transformada
    return data;
}

// Vamos a hacer la funcion "anotherFunction" para hacer las peticiones GET a la API con las endpoints correspondientes

const anotherFunction = async (urlApi) => {
    
    try {
        // Primera llamada a la API para traernos todos los productos
        const products = await fetchData(`${API}/products`);
        
        // Segunda llamada a la API - el ID de un producto en particular (El primero)
        const product = await fetchData(`${API}/products/${products[0].id}`);

        // Tercera llamada - categoria del primer priducto
        const category = await fetchData(`${API}/categories/${product.category.id}`);


        // Mostrar la informacion que deseamos segun lo que recolectamos en las llamadas

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch(error) {
        console.error(error);
    }
}

anotherFunction(API);