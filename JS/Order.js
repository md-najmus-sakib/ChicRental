// var y = localStorage.getItem("x-value");

// document.getElementById("bbb").addEventListener("click", function () {
//     console.log(y);
// })

// if (y == 1) {
//     document.getElementById("setName").innerHTML = "Model";
//     document.getElementById("setPrice").innerHTML = "10005";
// }

document.getElementById("setName").innerHTML = localStorage.getItem("n-value");
document.getElementById("setPrice").innerHTML = localStorage.getItem("n-price");