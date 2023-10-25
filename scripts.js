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

//concat them together 
const nameAndProvince = `${names.join(' ')} 

${provinces.join(' ')}`

console.log(nameAndProvince)


names.forEach((name, index) => {
    const province = provinces[index] || ''; // Use an empty string if the array is shorter
    console.log(` ${name}( ${province})`);
});
