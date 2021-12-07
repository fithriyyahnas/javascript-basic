/**
 * STUDY CASE 1
 * 
 * Buatlah sebuah rumus luas segitiga
 * 
 * ALGORITMA
 * 
 * 1. cari definisi rumus luas segitiga = 1./2 * alas * tinggi
 * 2. Buat variable alas
 * 3. Buat variable tinggi
 * 4. Buat variable luas
 * 5. masukan rumus luas segitiga ke dlm variable luas
 * 6. proses luas
 * 7. cetak luas
 * 
 * PSEUDOCODE
 * 
 * STORE alat WITH ANY NUMBER
 * STORE tinggi WITH ANY NUMBER
 * 
 * SET luas WITH 1/2 MULTIPLY alas MULTIPLY tinggi
 * PRINT luas
*/

// var alas = 5;
// var tinggi = 5;

// var luas = 1 / 2 * alas * tinggi
// console.log(luas);

/**
 * 
 * Buatlah luas lingkaran
 * 
 * ALGORITMA
 * 1. Cari definisi dari luas lingkaran = pi * r * r
 * 2. Buat variable r
 * 3. Buat variable pi isi dengan angka 3.14
 * 4. Buat variable luas
 * 5. Isi luas dengan rumus = pi * r * r
 * 6. Proses luas
 * 7. Cetak Luas
 * 
 * PSEUDOCODE
 * STORE r WITH ANY NUMBER
 * STORE pi WITH 3.14
 * SET luas WITH pi MULTIPLY r MULTIPLY r
 * PRINT luas
 * 
 */

// var r = 7;
// var pi = 3.14;

// var luas = pi * r * r
// console.log(Math.round(luas));

/** STUDY CASE 3
 * 
 * Buat rumus luas permukaan Balok
 * 
 * Algoritmna
 * 1. Cari definisi luas permukaan balok = 6
 * 
 */

/** Selasa, 7 Des 2021 */
/** CASE BELI MINUMAN HEHEHHEE */
// var minuman = "kopi";
// var nama = "Fitri";

// switch (minuman) {
//     case "kopi":
//         result = nama + ", kamu pilih " + minuman;
//         break;
//     case "teh":
//         result = nama + ", kamu pilih " + minuman;
//         break;
// }
// console.log(result);

/** CASE GANJIL OR GENAP YACH
 */
// var angka = 5
// if( angka % 2===0){console.log (angka + " adalah Genap")}
// else if (angka %2===1){console.log(angka + " adalah Ganjil")
// } 

// /** BERATTT BADANN MU APAka suda IDEAAALLL?!
// */
// var berat = 40
// if (berat >100){
//     console.log ("obesitas!!!")
// }else if (berat<= 100 && berat>80){
//     console.log ("gendatsss")
// }else if (berat<= 80 && berat >65){
//     console.log("yaa lumayan lhaa ideal")
// }else if (berat<= 65 && berat > 50){
//     console.log("kuruzzz")
// }else if (berat <= 50 && berat > 30){
//     console.log ("kuruzzz abiezz!!")
// }else{
//     (console.log("masukin data yang bener dwong bambank")
// }

 /** BELI BUKU DI TOKO BUKUU EAAA */
//  var buku = "Cara mencintaimu";
//  var total = 50000;
//  var nama = "ALAYERS";
//  var totalBayar;

//  switch (buku.toLowerCase()) {
//      case "coding":
//          if (total => 50000){
//              totalBayar = total - (total * 0.1)
//          } else {
//              totalBayar = total - (total * 0.05)
//          }
//          console.log(nama + ", membayar Rp. " + totalBayar);
//     break;
//     case "cooking":
//         if (total => 50000){
//             totalBayar = total - (total * 0,05)
//         } else {
//             totalBayar = total - (total * 0.025)
//         }  
//         console.log(nama + ", membayar Rp. " + totalBayar);
//     break;
//     default:
//         console.log("Masukkan data yang benar dwooongss please pake banget")
//  }

var access = "public"
var level = 3

switch (access) {
    case "":
        console.log ("Input Access");
        break;
    case "public":
        if (level < 5) {
           console.log (access + " di bawah 5")
        } else if (level > 5){
            console.log (access + " di atas 5")
        } else if (level == 5){
            console.log (access + " Five")
        };
        break;
case "private":
        if (level < 5) {
           console.log (access + " di bawah 5")
        } else if (level > 5){
            console.log (access + " di atas 5")
        } else if (level == 5){
            console.log (access + " Five")
        };
        break;
    case "protected":
        if (level < 5) {
           console.log (access + " di bawah 5")
        } else if (level > 5){
            console.log (access + " di atas 5")
        } else if (level == 5){
            console.log (access + " Five")
        };
        break;
    default:
        console.log ("Access is not defined")
}