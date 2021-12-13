/** OBJECT */
// var student = {
//     name: "Fitri",
//     gpa: 3.21,
//     isGraduated: true,
//     "able to code": "yes",
//     1: 100
// }
//console.log(student.name);
//console.log(student["able to code"]);
//console.log(student["1"])
//looping untuk objek
// for(var key in student){
//    // console.log(key); looping untuk key
//    //console.log(student[key]); looping untuk isi dari key
// }
// //Array of Object 
// var carts = [
//     {
//         id: 1,
//         name: "RAM Corsair 16gb",
//         type: "hardware",
//         price: 1250000,
//         brand: "Corsair"
//     },
//     {
//         id: 2,
//         name: "Keyboard RGB",
//         type: "hardware",
//         price: 150000,
//         brand: "Logitech"
//     },
//     {
//         id: 2,
//         name: "Samsung A50",
//         type: "handphone",
//         price: 5750000,
//         brand: "Samsung"
//     }
// ]
// // console.log(carts)
// /** STUDY CASE 1
//  * 
//  * Buat sebuah function untuk mengubah object diatas 
//  * menjadi tampilan list yang mudah dibaca oleh user
//  * 
//  * Carts:
//  * 1. RAM Corsair 16 GB, Rp. 12500000
//  * 2. Keyboard RGB, Rp 150000
//  * 3. Samsung A50, Rp 57500000
//  */
// function getCarts(carts) {
//   //  console.log ("Carts :");
//     for (var i=0; i<carts.length; i++){
//    //     console.log(carts[i].id + ". " + carts[i].name + ", Rp. "+
//      //   carts[i].price);
//     }
// }
// //getCarts(carts)
// /** STUDY CASE 2
//  * 
//  * Hitung jumlah huruf vokal dalam sebuah string
//  * Contoh:
//  * var str = "saya makan sayur asem lagi"
//  * 
//  * Result:
//  * {
//  *  a: 7,
//  *  i: 1,
//  *  u: 1,
//  *  e: 1,
//  *  o: 0 
//  * } --> objek, jdi pake return
//  */
// function countVocal(str){
//     var count = {
//         a:0,
//         i:0,
//         u:0,
//         e:0,
//         o:0
//     }
// for (var i=0;i < str.length; i++){
//     if (str[i] === "a"){
//         count.a++;
//     } else if (str[i] === "i"){
//         count.i++;
//     } else if (str[i] === "u"){
//         count.u++;
//     } else if (str[i] === "e"){
//         count.e++;
//     } else if (str[i] === "o"){
//         count.o++;}
// }
// return count
// }
// // console.log(countVocal("saya makan sayur asem lagi"))
/** STUDY CASE 3
 *
 * dalam sebuah kelas,akan dipilih ketua kelas dari beberapa suara
 *
 * hitung jumlah vote dalam kelas tersebut jika hanya ada 3 nama
 *
 * Contoh:
 * var votes = ["Vincent", "Ncent", "Stella", "vincent", "nCent",
 * "steLLA", "Vincent"]
 *
 * Result:
 * {
 * vincent : 3,
 * ncent : 2,
 * stella : 2
 * }
 *
 */


