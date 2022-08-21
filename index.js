let books = [
    {
      title: "Eloquent JavaScript",
      price: 16.00,
      inventory: 5
    },
    {
      title: "JavaScript: The Good Parts",
      price: 10.50,
      inventory: 10
    },
    {
      title: 'Learn JavaScript VISUALTYY',
      price: 25.00,
      inventory: 2
    },
    {
      title: 'You don\'t Know JavaScript',
      price: 60.00,
      inventory: 8
    },
    {
      title: 'JavaScript: The Definitive Guide',
      price: 18.95,
      inventory: 7
    },
  ]
  //.reduce
  /*Produce a single value of some kind */
  /*give a total for example */

 /* calcluate the total of to be paid on the inventory */
  const reducer = (accumulator, item) => {
//     console.log(accumulator)
//     console.log(item)
// let total = item.price * item.inventory
// console.log(total)

// return accumulator += total
console.log(accumulator, item)
return accumulator + " , "+ item.title
  }

  let total1 = books.reduce(reducer, '').substring(3)
  /*the .substring() is an inbuilt JavaScript method that removes a given number in the brackets() i.e .substring(4) will remove the first four values of a string from the front of the string. in the total1 will have 3 values removed from the front */