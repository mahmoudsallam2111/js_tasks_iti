// let funcTwoParams = function(param1, param2) {
//     try {   
//     if(arguments.length != 2)
//         throw new Error("pass only two parameters");
//         console.log("done");
//     }catch(e) {console.log(e);}
       
// };
// funcTwoParams(1,5,5);
////////////////////////////////////////////////////
/*
let addNumber = function(...args) {
   return args.reduce(function(sum,number){
    if(typeof number !="number")  throw new Error("invalid number");
        return sum + number
    },0);
  
};
console.log(addNumber(1,1,5));
*/
////////////////////////////////////////////////////

let reverse = function(...args) {
    for(item in args){
        console.log(args[args.length- item-1])}
};
reverse("a",2,3,5);
////
/*
let reverse2 = function(...args) {
    let arr =[];
    for(item of args){
        arr.unshift(item)
    }
    for(item of arr){
       console.log(item)
    }
}
reverse2("a",2,3,5);
*/