var products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

var select = document.getElementById("productName");
if (select) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

var countLabel = document.getElementById("countLabel");
if (countLabel) {
    var count = localStorage.getItem("reviewCount");
    if (count === null) {
        count = 0;
    }
    count = Number(count) + 1;
    localStorage.setItem("reviewCount", count);
    countLabel.textContent = count;
}

var summary = document.getElementById("summary");
if (summary) {
    var params = new URLSearchParams(window.location.search);
    summary.innerHTML = "";
    params.forEach(function(value, key) {
        var dt = document.createElement("dt");
        dt.textContent = key;
        var dd = document.createElement("dd");
        dd.textContent = value;
        summary.appendChild(dt);
        summary.appendChild(dd);
    });
}

var year = document.getElementById("currentyear");
if (year) {
    year.textContent = new Date().getFullYear();
}
var lastMod = document.getElementById("lastModified");
if (lastMod) {
    lastMod.textContent = document.lastModified;
}