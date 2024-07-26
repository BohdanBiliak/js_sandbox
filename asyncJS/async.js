const getAllProducts = async() =>{
    try {
        const res = await  fetch('https://dummyjson.com/products/add');
        const json = await res.json();
        console.log(json)
        
    } catch (err) {
        console.log(err)
        
    }
  
}
getAllProducts()

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    
    },
    body: JSON.stringify({
        description : 'Iphone',
        price: '100',
        rating: '9/10'
    })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))