
//--------------------------------
//objekt destruction
// -----------------------------------------


// const person = {
//     name: "andrew",
//     age: 26,
//     location: {
//         city: "krakow",
//         temp: 20
//     }
// }
// const {name: firstName ='anon', age} = person
// console.log(`${firstName} is ${age}.`)
// const {city, temp: temperature} = person.location //zmiana temp na temperature
// if (city && temperature) {
// console.log(`its ${temperature} in ${city}`)
// }

// const book = {
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//     name: "Penguin"
//     }
// }
// const {name: publisherName = "Unkown"} = book.publisher
// console.log(publisherName);

//-----------------------------------------
//array destructing
//--------------------------------------------

const address = ['33 oswiecenia', 'krakow', 'nowa huta', '31-636'];

const [ , city, state ='xDDDD'] = address;

console.log(`you are in ${city}, ${state}`)

const item = ['coffee(hot)', '2$', '3$', '5$'];

const [coffee, , mediumPrice] = item;
console.log(`a medium ${coffee} cost ${mediumPrice}`);