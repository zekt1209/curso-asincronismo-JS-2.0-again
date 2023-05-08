import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

// Le mandamos la API y la informacion que vamos a insertar
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Xbox Master Race",
    "price": 20000,
    "description": "Merge of an Xbox S and a PC Master Race",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))


