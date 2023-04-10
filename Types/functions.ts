// Defining Parameter Type Annotation
function greet(person: string) {
  return `Hi ${person}`;
}

greet('Shoaib')

function square(num: number) {
  return num * num
}
square(2)

//Default Parameter 

const isActive = (a: boolean = true) => {
  return a
}

isActive()

// Defining Return Type Annotation 

function sum(x: number, y: number): number {
  return x + y
}

sum(5, 5)

//Anonymous Functions Contextual Typing
let colors = ['Orange', 'Green', 'Blue'];

const myColor = colors.map(color => {
  return color
})

//Void Type (function does not return anything)
function isMale(male: boolean): void {
  console.log(male);
}

isMale(true)