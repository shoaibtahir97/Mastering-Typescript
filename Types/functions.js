// Defining Parameter Type Annotation
function greet(person) {
    return "Hi ".concat(person);
}
greet('Shoaib');
function square(num) {
    return num * num;
}
square(2);
//Default Parameter 
var isActive = function (a) {
    if (a === void 0) { a = true; }
    return a;
};
isActive();
// Defining Return Type Annotation 
function sum(x, y) {
    return x + y;
}
sum(5, 5);
//Anonymous Functions Contextual Typing
var colors = ['Orange', 'Green', 'Blue'];
var myColor = colors.map(function (color) {
    return color;
});
//Void Type
function isMale(male) {
    console.log(male);
}
isMale(true);
