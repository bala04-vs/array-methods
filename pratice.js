// array.length()
// to find array length

let ar1=[0,2,3,4];
console.log(ar1.length);

//1.array.tostring()
let array1=[1,2,3]
console.log(array1.toString())
// it gives as a string

// 2.at()
let array2=[1,2,3,4]
console.log(array2.at(-1));
// it gives index and values 
// but arr[2] gives positive index only neg doesnot support

// 2.join()
let array3=[1,2,3,5];

console.log(array3.join(" "));
console.log(array3.join("-"))
// note:
// join returns array to string
// empty space allow in this string
// this is also as separater

// 3.pop()
let array4=[1,2,3,4,5];
let x=array4.pop();
console.log(x);
// pop method removes an element in the array
// it removes last element of the array
 

// 4.push()

let array5=[1,2];
let o=array5.push(4);;
console.log(o);
console.log(array5)
// we can push the element of the string
// with help of push we can also find length
 

// 5.shift and unshift

let array6=[1,2,3,4]
array6.shift();
console.log(array6);
// shift modifyes the exixting array by removing the first element from the array
// returns the element which is removed

array6.unshift("hi","js",6,9,0);
console.log(array6);

// unshift will modifies the exixting array by adding the elements at the starting of the array
// returns the updated length of the array


// 7.slice()
let array8=[1,2,3,4,5];

let d=array8.slice(2,5);
console.log(d)

// slice the values of the array 
// it supports the neg values 

// splice()
let array9=[1,"hi","venkat",8]
array9.splice(0,0,"lemon","mango");
console.log(array9.splice(1,2))  // first index can act as starting index and second index  can be act as deleting index
console.log(array9)
// the splice methods can be act as adding an element of  an array
// in splice method we can add anyware of the string
// starting index is maintained as a place of the string
// we can also remove array
// splice will modifies exixting array by removing /adding elements at the particular array

// tospliced()
let array10=[1,2,3,4]
array10.toSpliced(1,2);
console.log(array10);
// spliced doesnot modifyes the exixting array


// array search methods
// indexof
let array11=[2,3,5,6,5,4,4];
console.log(array11.indexOf(5))
// it returns index of an array
// it suppor the last index


// includes

console.log(array11.includes(5))
// it returns boolean values



// search methods in arrays:
// 1.find():
let hi=[1,2,4,5,3];
let i=hi.find(function(value,index,array){
    return value>4}

)
console.log(i)
// the find( ) method used for checking condition's
//  we take a cbf function in side the find()
// it check every element of the array
// they have three parameters "value","index","array" 
// it only takes values not manditory on index and array
// it return values of the array based on the condition
// it treat as for loop 
// example:

let find=["hii","my","name","is","venkat"];
let out=find.find(function(value,index,array){
    return index>2;
})
console.log(out);

// arrow function

let arrow=find.find((value,index,array)=>{
    return index>1;
})
console.log(arrow)
// 
let only=find.find(x=>x.length>0)
console.log(only)


// findindex()
let findindex=["p",2,3,4]
let po=findindex.findIndex(x=>x.length>2)
console.log(po);

// it returns the first index of the array


// array of objects

let koo=[{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 222.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 135.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  }]
  let toy=koo.find(value=>{return value.price>95})
  console.log(toy)

// findlast()

let ven=[1,2,5,4,8];
let love=ven.findLast(function(value,index,array){
    return value>5
})
console.log(love)
// it returns last value if the arra

// findLastIndex()
let u=[1,2]
let lop=u.findLastIndex(function(value,index,array){
    return value>1;
})
console.log(lop);
// it returns the last index of the array





// js array iteration methods

// 1.map

let ji=[1,2,3,4,5];
let ih=ji.map(function(value,index,array){
    return value+3;
})

console.log(ih);

// map method will return a new array of an existing array by applying a logic
// it also give the boolean values


// forEach():
let amma=["hi","hello","welcome"];
let good=amma.forEach(function(value,index,array){
    return (value=="venkat")
})
console.log(good);

// forEach won't return anything
// here both map and for each are used to iterate every element and performs function for each
// but map will return a new array but for each doest'n return anything


let ag=["hi","hello","js"]
let upper=ag.map(function(x,y,z){
    return x[0].toUpperCase()+x.slice(1)
}) 
console.log(upper);
let lower=ag.map(function(x,y,z){
    return x.slice(0,-1)+x.at(-1).toUpperCase()
})
console.log(lower)




// examples:
let fruits=["apple","bananan","orange","grape","mango"];
fruits.splice(1,2)
console.log(fruits)

