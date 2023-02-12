// let namaDepan = "fahmi";
// let namaBelakang = "azzuhri";

// console.log(`halo, nama lengkapku adalah ${namaDepan} ${namaBelakang}`);

/*let angkaSatu = 99;
let angkaDua = 1;

console.log(`${angkaSatu}x${angkaDua} = ${angkaSatu * angkaDua}`);
*/

/*let kalimat = "saya sangat senang belajar javascript di always ngoding";
console.log(
  `jumlah karakter yang ada pada variabel kalimat adalah ${kalimat.length} kata`
);
*/
let username = "testtest";
let password = "1111";

if (username.length >= 8) {
  if (password.length >= 15) {
    console.log("password aman");
  } else {
    console.log("password minimal 15 karakter");
  }
} else {
  console.log("username minimal 8 karakter ");
}
