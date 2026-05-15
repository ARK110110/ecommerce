const content =  document.getElementById("content")

const Params = new URLSearchParams(window.location.search);
const productId = Params.get("id");

// let url = "https://fakestoreapi.com/products"


function rupiahFormat(num) {
    return `Rp. ${(num * 17598.20).toLocaleString("id-ID", {minimumFractionDigits:2, maximumFractionDigits:2})}`
}

async function getData(dataid) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${dataid}`)
        const item = await res.json()
        const id    = item.id
        const img   = item.image
        const title = item.title
        const desc  = item.description
        const price = item.price
        const ctgry = item.category
        const rate  = item.rating.rate
        const count = item.rating.count
        const harga = document.getElementById("harga")
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
            <div class="flex flex-col gap-[8px]">
                <button class="w-full py-[16px] bg-[#00654B] text-white rounded-[8px] hover:scale-95 duration-300 cursor-pointer">Buy Now</button>
                <button class="w-full py-[16px] text-[#4547D7] rounded-[8px] bg-[#F9F9FC] border border-[#BDC9C2] hover:scale-95 duration-300 cursor-pointer">Add to Cart</button>
            </div>
        </div>
        `
    } catch(error) {
        console.log(`Error terdeteksi: ${error}`);
    }
}

getData(productId)

function quantityFunc(operator) {
    const quantity = document.getElementById("quantity")
    
    if (operator == "+" && quantity.value >= 1) {
        quantity.value = Number(quantity.value) + 1
    } else if (operator == "-" && quantity.value > 1) {
        quantity.value = Number(quantity.value) - 1
    }
}