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

var todos = [
    {
        id: 1,
        task: "belajar object",
        status: 0
    },{
        id: 2,
        task: "belajar function",
        status: 1
    }
]

// function viewTodos(todos){ 
//     console.log("Todolist :");
//     for (var i=0; i<todos.length;i++){
//         console.log("[" + todos[i].status + "]" + todos[i].task);
//     }
// }
// viewTodos(todos)
function viewTodos(todos){ 
    console.log("Todolist :");
    for (var i=0; i<todos.length;i++){
        if (todos[i].status === 1){
            console.log(todos[i].id + ". [X] " + todos[i].task);
        } else (console.log(todos[i].id+ ". [ ] " + todos[i].task))

    }
}
//viewTodos(todos)

// function addTodo("belajar coding",1)

function addTodo(task, status){
    var id = todos[todos.length - 1].id +1;
    var tempObj = {
        id,
        task,
        status
    }
    todos.push(tempObj)
    console.log ("'"+ task + "' has been created")
}
function deleteTodo(id){
    var tempArray = []

    for( var i=0; i< todos.length; i++){
        if( todos[i].id !== id){
            tempArray.push(todos[i])
        }
    }
    todos = tempArray
    console.log("Id: " + id + " has been deleted")
}

addTodo("belajar ES6", 0)
addTodo("makan siang", 0)
addTodo("jemput dia", 0)
deleteTodo(5)
deleteTodo(3)
// console.log(todos)
viewTodos(todos)

