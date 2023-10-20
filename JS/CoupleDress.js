// document.getElementById("AddToCart").addEventListener("click", function () {
//     console.log("HI");
// });

window.addEventListener('load', () => {
    const pas = (new URL(document.location)).searchParams;
    const pn = pas.get('Product-Name');
    const pp = pas.get('Product-Price');

    document.getElementById("ProductName").innerHTML = pn;
    document.getElementById("ProductPrice").innerHTML = pp;
})