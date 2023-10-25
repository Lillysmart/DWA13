const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//Console each name
names.forEach(name => {
    console.log(name)
});

//console each province 
provinces.forEach((provinceName)=>{
console.log(provinceName)
})


//log both the province and name with their indeces.
names.forEach((name, index) => {
    const province = provinces[index] || ''; // Use an empty string if the array is shorter
    console.log(` ${name}( ${province})`);
});


//Province to uppercase
 provinces.map(province => {
    
   console.log(province.toUpperCase()
   ) 
   
});


//Amount of characters in each name
names.map(name => {
    
    console.log(name.length
    ) 
    
 });

//Province in alphabetical Order
 const provincesSort =provinces.toSorted ()
 console.log(provincesSort)
 

