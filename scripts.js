const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

//Console each name
names.forEach((name) => {
  console.log(name);
});

//console each province
provinces.forEach((provinceName) => {
  console.log(provinceName);
});

//log both the province and name with their indeces.
names.forEach((name, index) => {
  const province = provinces[index] || ""; // Use an empty string if the array is shorter
  console.log(` ${name}( ${province})`);
});

//Province to uppercase
provinces.map((province) => {
  console.log(province.toUpperCase());
});

//Amount of characters in each name
names.map((name) => {
  console.log(name.length);
});

//Province in alphabetical Order
const provincesSort = provinces.toSorted();
console.log(provincesSort);

//Provinces without Cape
const provincesRemaining = provinces.filter(
  (province) => !province.includes("Cape")
);

console.log(provincesRemaining);


//array bof names that has 's'
const hasSArray = names.map(name => {
    const namesUppercase = name.toUpperCase();
    return namesUppercase.includes('S');
  });
  
  console.log(hasSArray);


//combine name and province
  const combinedArray = provinces.reduce((result, province, index) => {
    result.push(`${province}: ${names[index]}`);
    return result;
  }, []);
  
  console.log(combinedArray)

  const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]


  
  //one console
products.forEach(product => {
    console.log(product.product)
})


//second console
const productsFilter = products.filter((product)=>{
    return product.product.length <= 5;
  })

  console.log(productsFilter)


  
  const filteredProducts = products
  .map((product) => {
    const price = parseFloat(product.price);
    return isNaN(price) ? null : { ...product, price };
  })
  .filter((product) => product !== null);

console.log(filteredProducts);

 