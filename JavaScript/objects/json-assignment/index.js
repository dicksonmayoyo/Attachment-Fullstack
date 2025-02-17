
async function fetchProducts(){
    try {
        const response = await fetch('http://localhost:3000/products')
        const products = await response.json()
        
        const productList = document.querySelector('#product-list')
        productList.innerHTML=''
        products.forEach(product=>{
            const productDiv = document.createElement('div')
            productDiv.classList.add('product')
            productDiv.innerHTML=`<h2>${product.name}</h2>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>`;
            productList.appendChild(productDiv);
        })
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
document.addEventListener('DOMContentLoaded', fetchProducts);