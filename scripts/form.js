// Product Data
const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
  ];
  
  // Populate Product Options
  const productSelect = document.getElementById("product");
  
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Review Counter
  if (localStorage.getItem("reviewCount") === null) {
    localStorage.setItem("reviewCount", 0);
  }