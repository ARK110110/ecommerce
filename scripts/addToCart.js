async function addToCart(productId) {
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
        const quantityValue = Number(document.getElementById("quantity").value)
        let cart = JSON.parse(localStorage.getItem("cart")) || []
        
        const exsisted = cart.find(produk => produk.id === id)
        
        if (exsisted) {
            exsisted.quantity += Number(quantityValue)
            exsisted.total_price = Number(exsisted.quantity) * price
            alert(`added ${quantityValue}, ${title} to cart!`)
        } else {
            cart.push({
                "id": id,
                "image": img,
                "title": title,
                "category": ctgry,
                "price": price,
                "quantity": quantityValue,
                "total_price": quantityValue * price,
            })
            alert(`added ${title} to cart!`)
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        
    } catch(error) {
        console.log(error);
    }
}