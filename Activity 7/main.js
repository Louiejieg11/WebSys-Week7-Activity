let productName = "T-shirt";
let productId = (Symbol("uniqueId"))
let price = 25.99
let isOnSale = true
let quantity = 50

console.log(typeof productName)
console.log(typeof productId)
console.log(typeof price)
console.log(typeof isOnSale)
console.log(typeof quantity)

let inventoryArray = [
 {  
    id: productId,
    name: productName,
    price: price,
    quantity: quantity,
    isOnSale: isOnSale,
    details: {
        color: "blue",
        size: 32
    }
},
{
    id: 2,
    name: "Pants",
    price: 35.99,
    quantity: 50,
    isOnSale: false,
    details: {
        color: "black",
        size: 34
    }
},
{
    id: 3,
    name: "Hat",
    price: 15.99,
    quantity: 50,
    isOnSale: true,
    details: {
        color: "red",
        size: 8
    }
}

]


Object.freeze(inventoryArray[0])

inventoryArray[0].price = 1000
inventoryArray[0].discount = 15
inventoryArray[0].details.color = "red"
inventoryArray[0].details.size = 34
delete inventoryArray[0].quantity
console.log("Color: "+ inventoryArray[0].details.color)
console.log("Size: "+ inventoryArray[0].details.size)

console.log(inventoryArray[0])

Object.seal(inventoryArray[1])
inventoryArray[1].price = 1000
console.log("Price: " + inventoryArray[1].price)
inventoryArray[1].description = "new"
console.log("Description: " + inventoryArray[1].description)
delete inventoryArray[1].quantity
console.log("Quantity: " + inventoryArray[1].quantity)

//Comparison: Explain the differences in behavior between Object.freeze() and Object.seal()

/* 
    object freeze() can't change the value of the object property in array
    object seal() can change the value of the object property in array but can't delete the property 

*/




let num1 = 10
console.log(num1)
num1 = 20
let str1 = "hello"
console.log(str1)
str1 = "world"   

let arr = [10, "hello", true]

arr = 444
console.log(arr) // 

//Choosing the Right Method: Describe scenarios where you would use const, Object.freeze(), or Object.seal() to manage data immutability and restricted modifications 
/* 
    const: when you want to make sure that the value of the variable doesn't change
    object freeze(): when you want to make sure that the value of the object property doesn't change
    object seal(): when you want to make sure can change the value of the object property in array but can't delete the property 

*/