let data = []

async function getData() {
    let url = "https://fakestoreapi.com/products"
    try {
        let response = await fetch(url)
        data = await response.json()
    } catch(error) {
        console.log("error jir, gk tau knp");
        
    }
}

getData()

function shortenText(text, limit) {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
}

async function loadFeaturedProducts() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    let featuredProducts = document.getElementById("featuredProducts")
    let highRatingProducts = data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5);
  
    featuredProducts.innerHTML = ""
    highRatingProducts.map((index) => {
      const id    = index.id
      const img   = index.image
      const title = index.title
      const desc  = index.description
      const price = index.price
      let shortedtitle = shortenText(title, 17)
        featuredProducts.innerHTML += `
              <div onclick="location.href='detail.html?id=${id}'" class="w-[220.4px] h-[484px] flex flex-col items-center border border-[#E8E8EA] bg-[#FFFFFF] rounded-[12px] gap-2 duration-300 group hover:scale-103 hover:border-[#c7c7c7] cursor-pointer">
                <div class="w-full h-[216px] overflow-hidden rounded-t-[12px] flex justify-center items-center">
                  <img src="${img}" alt="img.png" class="max-w-[200.4px] max-h-[200.4px] flex rounded-t-[12px] object-cover duration-300 group-hover:scale-110">
                </div>    
                    <h1 class="text-[20px] text-[#1A1C1E] font-semibold text-center" title="${title}">${shortedtitle}</h1>
                    <p class="text-[16px] text-[#3E4944] text-left w-[188.4px] flex" title="${desc}">${shortenText(desc, 70)}</p>
              </div>  
        `
    })
  } catch (error) {
    console.log(error);
    
  }
}

loadFeaturedProducts();

async function loadData() { // Not used yet.
    try {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json()
      let high = data.sort((a, b) => b.rating.rate - a.rating.rate);
      let content = document.getElementById("cardContent")
      content.innerHTML = ""
      data.forEach((item) => {
        const id    = item.id
        const img   = item.image
        const title = item.title
        const desc  = item.description
        const price = item.price
         content.innerHTML += `
         <div onclick="location.href='../view/detail.html?id=${id}'" class="cursor-pointer rounded-[12px] w-full max-w-[280px] max-h-[542px] flex flex-col border border-[#E1E3E5] group hover:scale-101 duration-300">
            <div class="w-full h-[278px] overflow-hidden bg-[#ffff] rounded-t-[12px] justify-center items-center flex">
                <img src="${img}" alt="" class="object-cover max-w-[278px] max-h-[278px] scale-90 group-hover:scale-105 duration-300">
            </div>
            <div class="px-[16px] py-[16px]">
                <p class="text-[#1A1C1E] pb-[4px]">${shortenText(title, 25)}</p>
                <p class="text-[#3E4944] pb-[16px] text-[14px]">${shortenText(desc, 30)}</p>
                <div class="pt-[4px] gap-[16px] flex flex-col">
                    <p class="text-[20px] text-[#00654B] font-semibold">$${price}</p>
                    <div class="flex flex-row gap-[8px]">
                      <button class="px-[10px] rounded-[4px] border border-[#00654B] hover:scale-95 duration-300 cursor-pointer flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00654B" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" stroke-width="0.5" stroke="#00654B"/></svg>  
                      </button>
                      <button class="cursor-pointer py-[10px] bg-[#00654B] rounded-[4px] w-full text-white hover:scale-95 duration-300">Buy Now</button>
                    </div>
                </div>
            </div>
          </div>
         `
      });
    } catch (error) {
      console.log(error);
    }
}

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

loadData()

