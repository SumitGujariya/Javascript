const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

// console.log(myTotal);

const shoppingCart = [
    { itemName: "JavaScript course",
      price: 999 
    },
    { itemName: "python data sciene course",
      price: 11999 
    },
    { itemName: "Java full stack course",
      price: 2999
    },
    { itemName: " Web development course",
      price: 599
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);


