import axios from 'axios';

export async function getProducts(){
     const result = await axios.get('/api/products');
     return result?.data;
}