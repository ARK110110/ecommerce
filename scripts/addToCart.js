async function addToCart(productId) {
    let currentDetailedData = {
        id: Number,
        category: ""
    }
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const item = await res.json()
        // Keywords
        const id    = item.id
        const img   = item.image
        const title = item.title
        const desc  = item.description
        const price = item.price
        const ctgry = item.category
        const rate  = item.rating.rate
        const count = item.rating.count

        const productData = {
            id: id
        }

        localStorage.setItem("item", JSON.stringify())
        console.log(item);
        
    } catch(error) {
        console.log(error);
        
    }
    
}