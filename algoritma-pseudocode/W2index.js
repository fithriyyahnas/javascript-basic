// function countVote(votes) {
//     var countFlag = {
//         vincent: 0,
//         ncent: 0,
//         stella: 0
//     };
// for (var i = 0; i < votes.length;i++){
//      if(votes[i].toLowerCase() === "vincent"){
//          countFlag.vincent += 1;
//      } else if(votes[i].toLowerCase() === "ncent"){
//         countFlag.ncent += 1;
//     } else if(votes[i].toLowerCase() === "stella"){
//         countFlag.stella += 1;
//     }
//     return countFlag
//  }

//  var votes = ["Vincent", "Ncent", "Stella", "VinCent",
// "nCent", "stellA", "Vincent"]

// console.log(countVote(votes))

// /** Jika lebih dari 3 nama atau tidak tahu berapa jumlah suara */

// function countPeopleVote (arr){
//     var result = {};

//     for (var i =0; i< arr.length; i++){
//         if (result[arr[i]] === undefined){
//             result[arr[i]] = 1;
//         } else {
//             result[arr[i]] += 1}
//     }
//     return result;

// }

// console.log(countPeopleVote([ "james", "jim", "jake", "james", "john","john", "james", "jane"
// ]))

/** STUDY CASE 4
 *
 * Dalam sebuah kelas terdapat banyak suara untuk memilih
 * siapa yang menjadi sekretaris
 *
 * Tentukan nama dari pemenang dengan cara memilih dari yang paling
 * banyak suaranya
 *
 * Buatlah 2 function dengan ketentuan berikut:
 * - countPeopleVote(arr)
 * + parameter berupa array berisi suara vote
 * + result yang dihasilkan berupa object
 * (james : 3, jim: 1)
 *
 * - voteWinner(arr)
 * + parameter berupa array yang dihasilkan oleh function
 * countPeopleVote
 * + hasil return berupa string nama pemenang
 */

//  function countPeopleVote (arr){
//     var result = {};

//     for (var i =0; i< arr.length; i++){
//         if (result[arr[i]] === undefined){
//             result[arr[i]] = 1;
//         } else {
//             result[arr[i]] += 1}
//     }
//     return result;

// }

// console.log(countPeopleVote([ "james", "jim", "jake", "james", "john","john", "james", "jane"
// ]))

// function voteWinner(arr){
//     var objVotes = countPeopleVote(arr);
//     var currentScore = 0;
//     var winner;

//     if (arr.length !== 0){
//         for( var key in objVotes){
//             if (currentScore < objVotes[key]){
//                 currentScore = objVotes[key];
//                 winner=key;
//             }
//         }
//         return winner
//     } else {
//         return "Tidak ada suara."}
//     }

//     console.log(voteWinner(["abc", "xyz", "aabc", "abc", "xyz",
// "aabc", "aabc", "xy"]))
//     console.log(voteWinner([]))

/** STUDY CASE 5
 * Buatlah sebuah apps untu todolist
 *
 * 1. buat function -> viewTodos()
 *
 * Result :
 * 1. [ ] Belajar Object
 * 2. [X] Belajar Function
 *
 * 2. Buat function -> addTodo()
 * Ex: addTodo("Task Name", 1) -> 1 : done, 0 : in progress
 *
 * 3. Buat function -> deleteTodo()
 * Ex: deleteTodo(3) -> 3 adalah id task
 */

// var todos = [
//     {
//         id: 1,
//         task: "belajar object",
//         status: 0
//     },{
//         id: 2,
//         task: "belajar function",
//         status: 1
//     }
// ]

// function viewTodos(todos){
//     console.log("Todolist :");
//     for (var i=0; i<todos.length;i++){
//         console.log("[" + todos[i].status + "]" + todos[i].task);
//     }
// }
// viewTodos(todos)
// function viewTodos(todos){
//     console.log("Todolist :");
//     for (var i=0; i<todos.length;i++){
//         if (todos[i].status === 1){
//             console.log(todos[i].id + ". [X] " + todos[i].task);
//         } else (console.log(todos[i].id+ ". [ ] " + todos[i].task))

//     }
// }
// //viewTodos(todos)

// // function addTodo("belajar coding",1)

// function addTodo(task, status){
//     var id = todos[todos.length - 1].id +1;
//     var tempObj = {
//         id,
//         task,
//         status
//     }
//     todos.push(tempObj)
//     console.log ("'"+ task + "' has been created")
// }
// function deleteTodo(id){
//     var tempArray = []

//     for( var i=0; i< todos.length; i++){
//         if( todos[i].id !== id){
//             tempArray.push(todos[i])
//         }
//     }
//     todos = tempArray
//     console.log("Id: " + id + " has been deleted")
// }

// addTodo("belajar ES6", 0)
// addTodo("makan siang", 0)
// addTodo("jemput dia", 0)
// deleteTodo(5)
// deleteTodo(3)
// // console.log(todos)
// viewTodos(todos)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/** Selasa, 14 Desember 2021
 *
 * ES6
 *
 * deklarasi = membuat sebuah variable
 * initialization = memasukkan value ke dalam variable
 * reassign = assign ulang atau memasukkan nilai lain ke
 * dalam variable yang sudah memiliki nilai
 */
//=================================================================
//var, lety, const
//  var angka = 10;
//  console.log(angka); --> 10
//  Hoisting :pengangkatan awal

// let angka = 10;
// console.log(angka);

// let pi = 3.14; //declare: membuat sebuah variable
// pi = 10; //reassign
// const pi = 3.14;
// pi = 10
// console.log(pi)
//logic error --> hasil keluar, tpi tidak sesuai dengan yg kita mau
//syntax error --> hasil tidak kluar
//===============================================================
//template literal

//  var kata1 = "saya";
//  var kata2 = "sudah";
//  var kata3 = "makan";

//  console.log(`${kata1} ${kata2} ${kata3}`)
//===============================================================
//arrow function
//ES5 - Declaration
// function hello(){
//     console.log("Met pagi.")
// }
// hello()

//ES6 - Expression
//let biar bisa ditimpa ulang, const biar nggak ketimpa

// let hello = function(){
//     console.log("Met pagi.")

// let hello = () =>
//     console.log("Met pagi.")

// //hello = 10;
// hello()
// console.log(hello)

// const checkGanjilGenap = function(num){
//     if(num % 2 === 0){
//         return "Genap"
//     } else {
//         return "Ganjil"
//     }
// }
// const checkGanjilGenap = num => num % 2 === 0 ? "Genap":"Ganjil";
// console.log(checkGanjilGenap(5))
//===============================================================
//destructuring array dan object

//ES5
//  let items = ["Samsung A50", "Laptop", "5000000"];

// // let name = items[0];
// // let type = items[1];
// // let price = items[2];

// //ES6
// let [name, type, price] = items
// console.log(name, type, price);

// const student = {
//     name: "James",
//     gpa : 3.21,
//     status : true
// }
// let { name, gpa, status } = student
// console.log(name, gpa, status)
//===============================================================
//high order function
//.forEach, .map, .filter

//fOR EACH
// const numbers = [3, 2, 5, 7, 10];
// // for (let i =0; i< numbers.length;i++)
// // console.log(numbers[i])

// //ES6
// numbers.forEach((number, index) => {
//     console.log(number, index)
//}  )

//MAP
//[9, 4, 25, 49, 100]

//ES5
// let squareNumbers = [];

// for (let i = 0; i< numbers.length; i++){
//     squareNumbers.push(numbers[i] ** 2);
// }
// console.log(squareNumbers
//     )

/** ** artinya pangkat/power
 * math.pow(3,2) artinya 3 pangkat 2
 */
// //ES6
// let squareNumbers = numbers.map(
//     number => number **2
// )
// console.log(squareNumbers)

//FILTER - filter yang lebih dari sama dengan 5
// let filterNumbers =[];
// for (let i=0; i<numbers.length;i++){
//     if(numbers[i] >= 5){
//         filterNumbers.push(numbers[i])
//     }
// }
// console.log(filterNumbers)

//ES6
// let filterNumbers = numbers.filter( number => number >= 5)
// console.log(filterNumbers)
// //  ===============================================================

//Chainig Part
// const numbers = [100, 55, -15, 75, -10, 0, 123, -50];
/**
 * numbers akan di kali 10
 * numbers akan dipilih lebih besar dari 0
 * numbers akan di show
 */
//ES5
// function processNumber(numbers){
//     for (let i=0; i<numbers.length;i++){
//         if(numbers[i] > 0)

//     console.log(numbers[i]*10)
//     } 
// }
// processNumber(numbers)

//ES6
// numbers.map(number => number *10).filter(number =>
//     number > 0).forEach(number=> console.log(number))

//========================================================
//Object Oriented Programming (OOP)
/**
 * Perbedaan antara Object vs Class
//  */
// let vehicle = {
//     //Attribute atau keys
//     name : "Civic 2022",
//     type :"Sedan",
//     cc : 1500,
//     engine : true,
//     tags: ["lcgc", "affordable,"],
//     //method: function yg ada dalam sebuah object
//     startEngine : function(){
//         console.log("Start Engine!")
//         this.engine = true;
//     },
//     stopEngine: function(){
//         console.log("Stop Engine!")
//         this.engine = false;
//     },
//     identifySelf: function(){ 
//         console.log(` ${this.name}, type: ${this.type}, cc: ${this.cc}`)
//     },
//     showTags: function(){
//         console.log("Vehicle tags: ")
//         this.tags.forEach((tag, index) => {
//             console.log(`${index+1}.${tag}`)
//         })
//     }
// }

// //console.log(vehicle)
// // vehicle.startEngine();
// // vehicle.stopEngine()
// // // vehicle.identifySelf()
// // console.log(vehicle)
// vehicle.showTags()

//CASE STUDY - 1

 class Todo{
     constructor( id, task, status){
         this.id = id;
         this.task = task;
         this.status = status
     }
 }

 class TaskBoard {
     constructor(boards){
         this.boards = boards || [];
     }
 }
  
 let Todo = new (1, "Belajar Koding", "j");
 console.log(Todo);
