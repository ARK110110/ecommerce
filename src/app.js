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
  if (data.length === 0) {
    await getData();
  }

  let featuredProducts = document.getElementById("featuredProducts")
  let highRatingProducts = data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, -1);

  featuredProducts.innerHTML = ""
  highRatingProducts.map((index) => {
      let shortedtitle = shortenText(index.title, 17)
      featuredProducts.innerHTML += `
            <div class="w-[220.4px] h-[484px] flex flex-col items-center border border-[#E8E8EA] bg-[#FFFFFF] rounded-[12px] gap-2 hover:scale-103">
                <img src="${index.image}" alt="img.png" class="w-full h-[216px] flex rounded-t-[12px]">
                <h1 class="text-[20px] text-[#1A1C1E] font-semibold text-center" title="${index.title}">${shortedtitle}</h1>
                <p class="text-[16px] text-[#3E4944] text-left w-[188.4px] flex" title="${index.description}">${shortenText(index.description, 70)}</p>
             </div>     
      `
  })
}

loadFeaturedProducts();

async function loadData() {
    if (data.length === 0) {
        await getData()
    }

    let content = document.getElementById("content")
    content.innerHTML = ""
    data.forEach((index) => {
       content.innerHTML += `
       <div class="w-[220.4px] h-[484px] flex flex-col items-center border border-[#E8E8EA] rounded-[12px] gap-2">
            <img src="" alt="img.png" class="w-full h-[216px]">
            <h1 class="text-[20px] text-[#1A1C1E] font-semibold text-center">Minimalist Ceramic Watch</h1>
            <p class="text-[16px] text-[#3E4944] text-left w-[188.4px] flex">A timeless piece featuring a scratch-…</p>
         </div>  
       `
    });
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

