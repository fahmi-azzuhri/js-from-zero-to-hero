/*let orangSatu = {
  namaDepan: "Fahmi",
  namaBelakang: "Azzuhri",
  namaLengkap: function () {
    console.log(this.namaDepan + " " + this.namaBelakang);
  },
};
orangSatu.namaLengkap();
*/

function Orang(namaDepan, namaBelakang) {
  this.namaDepan = namaDepan;
  this.namaBelakang = namaBelakang;

  this.namaLengkap = function () {
    console.log(this.namaDepan + " " + this.namaBelakang);
  };
}

let orang = new Orang("Fahmi", "Azzuhri");

orang.namaLengkap();
