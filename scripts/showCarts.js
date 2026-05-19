function shortenText(text, limit) {
    if (text.length > limit) {
        return text.substring(0, limit) + "...";
    }
    return text;
}

async function showProducts() {
    let Subtotal = 0
    // ids
    const cartItems = document.getElementById("cartItems")
    const cartProducts = document.getElementById("cartProducts")
    const orderSummary = document.getElementById("orderSummary")
    Subtotal = 0
    const cart = JSON.parse(localStorage.getItem("cart"))
    cartProducts.innerHTML = ""
    cart.map((item) => {
        console.log(item);
        // Keywords
        const id    = item.id
        const img   = item.image
        const title = item.title
        const desc  = item.description
        const price = item.price
        const ctgry = item.category
        const quantity = item.quantity
        // 
        cartItems.innerHTML = `You have ${cart.length} items in your shopping cart.`
        cartProducts.innerHTML += `
        <div class="flex flex-row gap-[16px] px-[16px] py-[16px] rounded-[8px] border border-[#BDC9C2]">
        <div class="w-32 h-32 rounded-[8px]  flex items-center justify-center">
        <img src="${img}" alt="" class="object-cover rounded-[8px] scale-85 hover:scale-95 duration-300">
        </div>
        <div class="flex flex-col justify-between w-full">
                    <div class="flex flex-row justify-between">
                    <div class="flex flex-col">
                        <p class="text-[20px] font-semibold text-[#1A1C1E]">${shortenText(title, 45)}</p>
                        <p class="text-[13px] font-medium text-[#3E4944]">Category: ${ctgry}</p>
                        </div>
                        <p class="text-[20px] font-semibold text-[#00654B]">$${price}</p>
                        </div>
                        <div class="flex flex-row justify-between">
                        <div class="border border-[#BDC9C2] rounded-[8px] flex flex-row">
                        <button onclick="quantityFunc('-', ${id})" class="cursor-pointer hover:bg-[#e8e8e8] rounded-l-[8px]">
                        <svg class="mx-[16px] my-[7px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">	<path d="M0 0h24v24H0z" fill="none"></path>	<path fill="#1a1c1e" d="M19 12.998H5v-2h14z"></path></svg>
                        </button> 
                        <input id="quantity_${id}" value="${quantity}" onchange="updateQuantity(${id})" type="number" inputmode="numeric" class="w-[48px] text-center border-l border-r border-[#BDC9C2] focus:outline-none [appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:appearance-none" min="1">
                        <button onclick="quantityFunc('+', ${id})" class="cursor-pointer hover:bg-[#e8e8e8] rounded-r-[8px]">
                        <svg class="mx-[16px] my-[7px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">	<path d="M0 0h24v24H0z" fill="none"></path>	<path fill="#4547D7" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path></svg>
                        </button>
                        </div>
                        <button class="cursor-pointer">
                                <div class="flex flex-row gap-[4px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><g fill="none" stroke="#ba1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 20h5c0.5 0 1 -0.5 1 -1v-14M12 20h-5c-0.5 0 -1 -0.5 -1 -1v-14"></path><path d="M4 5h16"></path><path d="M10 4h4M10 9v7M14 9v7"></path></g></svg>    
                                <p class="text-[16px] text-[#ba1a1a]">Remove</p>
                                </div>
                            </button>
                    </div>
                    </div>
            </div>
            `
            Subtotal += item.total_price
    })
    cart.map((item) => {
        console.log(item);
        // Keywords
        const id    = item.id
        const img   = item.image
        const title = item.title
        const desc  = item.description
        const price = item.price
        const ctgry = item.category
        const quantity = item.quantity
        orderSummary.innerHTML = `
        <div class="pb-[24px] w-full flex">
            <p class="text-[24px] font-semibold">Order Summary</p>  
        </div>
        <div class="flex flex-col gap-[16px] pb-[24px] border-b border-[#E2E2E5]">
            <div class="flex flex-row justify-between justify-between">
                    <p class="text-[#3E4944]">Subtotal</p>
                    <p class="text-[#3E4944]">$${Subtotal.toFixed(2)}</p>
            </div>
            <div class="flex flex-row justify-between justify-between">
                    <p class="text-[#3E4944]">Delivery (Standard)</p>
                    <p class="text-[#00654B] font-bold ">Free</p>
            </div>
            <div class="flex flex-row justify-between justify-between">
                <p class="text-[#3E4944]">Tax (PPN 11%)</p>
                    <p class="text-[#3E4944]">$${(Subtotal * 0.11).toFixed(2)}</p>
                </div>
                </div>
                <div class="flex flex-row pt-[24px] pb-[48px] justify-between items-center">
                <p class="text-[20px] font-semibold text-[#1A1C1E]">Total</p>
                <p class="text-[24px] font-bold text-[#00654B]">$${(Subtotal * 1.11).toFixed(2)}</p>
                </div>
                <button class="bg-[#008060] rounded-[8px] py-[16px] gap-[8px] flex flex-row justify-center cursor-pointer hover:scale-105 duration-300">
                <p class="text-[20px] font-semibold text-[#D6FFEB]">Proceed to Checkout</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path fill="#d6ffeb" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"></path></svg>
                </button>
                `
    })
    
}
showProducts()

function updateQuantity(id) {
    const quantity = document.getElementById(`quantity_${id}`)
    const quantityValue = Number(document.getElementById(`quantity_${id}`).value)
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    
    const exsisted = cart.find(produk => produk.id === id)

    exsisted.quantity = quantityValue
    exsisted.total_price = quantityValue * exsisted.price
    localStorage.setItem("cart", JSON.stringify(cart))
    showProducts()
}

function quantityFunc(operator, id) {
    const quantity = document.getElementById(`quantity_${id}`)
    const quantityValue = Number(document.getElementById(`quantity_${id}`).value)
    
    if (operator == "+" && quantityValue >= 1) {
        quantity.value = quantityValue + 1
        updateQuantity(id)
        // exsisted.quantity = Number(quantityValue) + 1
        // showProducts()
        // exsisted.total_price = Number(exsisted.quantity) * exsisted.price
        // document.getElementById("quantity").value = exsisted.quantity
    } else if (operator == "-" && quantityValue > 1) {
        quantity.value = quantityValue - 1
        updateQuantity(id)
    }
}