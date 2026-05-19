const content =  document.getElementById("content")
const relatedProducts = document.getElementById("relatedProducts")

const Params = new URLSearchParams(window.location.search);
const productId = Params.get("id");

// let url = "https://fakestoreapi.com/products"


function rupiahFormat(num) {
    return `Rp. ${(num * 17598.20).toLocaleString("id-ID", {minimumFractionDigits:2, maximumFractionDigits:2})}`
}

function quantityFunc(operator) {
    const quantity = document.getElementById("quantity")
    
    if (operator == "+" && quantity.value >= 1) {
        quantity.value = Number(quantity.value) + 1
    } else if (operator == "-" && quantity.value > 1) {
        quantity.value = Number(quantity.value) - 1
    }
}

function shortenText(text, limit) {
    if (text.length > limit) {
        return text.substring(0, limit) + "...";
    }
    return text;
}

async function getData(dataid) {
    let currentDetailedData = {
        id: Number,
        category: ""
    }
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${dataid}`)
        const item = await res.json()
        // Keywords
        const id    = item.id
        const img   = item.image
        const title = item.title
        const desc  = item.description
        const price = item.price
        const ctgry = item.category
        currentDetailedData.category = ctgry
        currentDetailedData.id = id
        const rate  = item.rating.rate
        const count = item.rating.count
        const harga = document.getElementById("harga")
        //--------------------------------------------//
        content.innerHTML = `
        <div class="overflow-hidden w-[650px] h-[650px] border border-[#BDC9C2] bg-[#F3F3F6] rounded-[12px] flex justify-center items-center">
             <img src="${img}" alt="" class="object-cover hover:scale-110 duration-500">
        </div>
        <div class="flex flex-col gap-[10px] max-w-[462px]">
            <div class="flex flex-col gap-[5px]">
                <p class="px-[8px] py-[4px] w-fit bg-[#92F6CF] rounded-[4px] font-semibold text-[12px] tracking-[-0.25px] hidden">New Arrival</p>
                <h1 class="text-[30px] font-semibold tracking-[-0.5px] leading-[40px]">${title}</h1>
                <p id="harga" class="text-[24px] font-bold text-[#00654B]" onmouseenter="harga.innerHTML = '${rupiahFormat(price)}'" onmouseleave="harga.innerHTML = '$${price}'">$${price}</p>
            </div>
            <div>
                <p class="p-[10px] bg-[#F3F3F6] border border-[#BDC9C2] rounded-[12px] text-[14px] text-[#3E4944] leading-[28px]">${desc}</div>
            <div class="flex flex-col gap-[5px]">
                <h2 class="text-[20px] font-semibold">Specifications</h2>
                <div>
                    <div class="flex justify-between items-center py-[8px] border-b border-[#BDC9C2]">
                        <p class="text-[16px] text-[#3E4944] leading-[24px]">Category</p>
                        <p class="text-[16px] text-[#1A1C1E] leading-[24px]">${ctgry}</p>
                    </div>
                    <div class="flex justify-between items-center py-[8px] border-b border-[#BDC9C2]">
                        <p class="text-[16px] text-[#3E4944] leading-[24px]">Rating</p>
                        <p class="text-[16px] text-[#1A1C1E] leading-[24px]">${rate}</p>
                    </div>
                    <div class="flex justify-between items-center py-[8px] border-b border-[#BDC9C2]">
                        <p class="text-[16px] text-[#3E4944] leading-[24px]">Sold</p>
                        <p class="text-[16px] text-[#1A1C1E] leading-[24px]">${count}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-[16px] h-[40px] items-center">
                <p class="text-[16px] text-[#1A1C1E] leading-[24px]">Quantity:</p>
                <div class="border border-[#BDC9C2] rounded-[8px] flex flex-row">
                    <button onclick="quantityFunc('-')" class="cursor-pointer hover:bg-[#e8e8e8] rounded-l-[8px]">
                        <svg class="mx-[16px] my-[7px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">	<path d="M0 0h24v24H0z" fill="none" />	<path fill="#1a1c1e" d="M19 12.998H5v-2h14z" /></svg>
                    </button> 
                    <input id="quantity" value="1" type="number" inputmode="numeric" class="w-[48px] text-center border-l border-r border-[#BDC9C2] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" min="1">
                    <button onclick="quantityFunc('+')" class="cursor-pointer hover:bg-[#e8e8e8] rounded-r-[8px]">
                        <svg class="mx-[16px] my-[7px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">	<path d="M0 0h24v24H0z" fill="none" />	<path fill="#1a1c1e" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
                    </button>
                </div>
            </div>
            <div class="flex flex-row gap-[8px]">
                <button class="w-full py-[16px] bg-[#00654B] text-white rounded-[8px] hover:scale-95 duration-300 cursor-pointer">Buy Now</button>
                <button onclick="addToCart(${id})" class="px-[16px] py-[16px] rounded-[8px] bg-[#F9F9FC] border border-[#00654B] hover:scale-95 duration-300 cursor-pointer flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00654B" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" stroke-width="0.5" stroke="#00654B"/></svg>  
                </button>            
            </div>
        </div>
        `
    } catch(error) {
        console.log(`Error terdeteksi: ${error}`);
    }

    try {
        const res = await fetch(`https://fakestoreapi.com/products`)
        const data = await res.json()
        const filteredCtgry = data.map((item) => {
            if (item.category == currentDetailedData.category && item.id !== currentDetailedData.id) {
                const id    = item.id
                const img   = item.image
                const title = item.title
                const price = item.price
                const ctgry = item.category
                relatedProducts.innerHTML += `
                    <div onclick="location.href='detail.html?id=${id}'" class="rounded-[12px] flex flex-col border border-[#BDC9C2] group hover:scale-105 duration-500 cursor-pointer">
                        <div class="overflow-hidden rounded-t-[12px] w-[365px] h-[365px] justify-center flex items-center bg-[#ffff]">
                            <img src="${img}" alt="" class="max-w-[300px] max-h-[300px] object-cover group-hover:scale-110 duration-300">
                        </div>
                        <div class="px-[16px] py-[16px] gap-[6px]">
                            <p class="text-[16px] text-[#3E4944]">${ctgry}</p>
                            <h1 class="font-semibold text-[20px] text-[#1A1C1E]" title="${title}">${shortenText(title, 20)}</h1>
                            <p id="harga_${id}" class="font-bold text-[16px] text-[#00654B]" onmouseenter="harga_${id}.innerHTML = '${shortenText(rupiahFormat(price), 20)}'" onmouseleave="harga_${id}.innerHTML = '$${price}'" >$${price}</p>
                        </div>
                    </div>
                `
            }
        })
    } catch (error) {
        
    }
}

getData(productId)

// async function relatedProductsFunc(category) {
//     try {
//         // console.log(filteredCtgry.title);
        
//     } catch(error) {
//         console.log(error);
//     }
// }

// relatedProductsFunc()
