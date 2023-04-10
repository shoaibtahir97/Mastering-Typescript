//Creating an Object with Type Notation
const student: { name: string; class: number; degree: string; isGraduated: boolean; } = {
  name: "Shoaib",
  class: 5,
  degree: "Pharm-D",
  isGraduated: true
}

//Defining an Object Parameter passed in a function with Type Notation
function printName(person: { first: string, last: string }): void {
  console.log(`${person.first}, ${person.last}`)
}

printName({ first: "Shoaib", last: "Tahir" });


// Defining the return type of a function if it is an Object;
function randomCoordinate(): { x: number, y: number } {
  return { x: Math.random(), y: Math.random() }
}

//Excess Properties
function bookRead(book: { name: string, author: string }) {
  console.log(`${book.name}, ${book.author}`)
}

bookRead({ name: "Harry Potter", author: "JK Rowling", price: 300 })
let book = { name: "Harry Potter", author: "JK Rowling", price: 300 };
bookRead(book)

// Type Alias
type Book = {
  name: string;
  author: string;
  price: number;
  isFirstEdition: boolean;
}

function favoritebook(book: Book): Book {
  return { name: book.name, author: book.author, price: book.price, isFirstEdition: book.isFirstEdition }
}

favoritebook({ name: "Harry Potter", author: "JK Rowling", price: 800, isFirstEdition: true })