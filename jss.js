let data = [];

async function getData() {
  let url = "https://fakestoreapi.com/products";
  try {
    let response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.log("error jir, gk tau knp");
  }
}

getData();

async function loadFeaturedProducts() {
  if (data.length === 0) {
    await getData();
  }

//   let featuredProducts = document.getElementById("featuredProducts")
  let highRatingProducts = data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5);

  highRatingProducts.map((items, index) => {console.log(items.id)})


  // featuredProducts.innerHTML = ""
  // featuredProducts.innerHTML += `
  //       <div class="w-[220.4px] h-[484px] flex flex-col items-center border border-[#E8E8EA] rounded-[12px] gap-2">
  //           <img src="${}" alt="img.png" class="w-full h-[216px]">
  //           <h1 class="text-[20px] text-[#1A1C1E] font-semibold text-center">Minimalist Ceramic Watch</h1>
  //           <p class="text-[16px] text-[#3E4944] text-left w-[188.4px] flex">A timeless piece featuring a scratch-…</p>
  //        </div>     
  // `

}

loadFeaturedProducts();

// async function loadFeaturedProducts() {
//   if (data.length === 0) {
//     await getData();
//   }

//   let highRatingProducts = data
//     .sort((a, b) => b.rating.rate - a.rating.rate)
//     .slice(0, 5);
// }

// loadFeaturedProducts();
