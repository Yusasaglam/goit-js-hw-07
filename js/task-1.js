const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Toplam kategori sayısı: ${items.length}`);

items.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("ul li").length;
    console.log(`Kategori: ${title}\nÖğe sayısı: ${elementsCount}`);
});
