let total = 0;
let pesanan = {};

function tambahFilm(nama, harga) {
  total += harga;
  pesanan[nama] = (pesanan[nama] || 0) + 1;
  updateTotal();
}

function kurangFilm(nama, harga) {
  if (pesanan[nama]) {
    total -= harga;
    pesanan[nama]--;
    updateTotal();
  }
}

function tambahItem(nama, harga) {
  total += harga;
  pesanan[nama] = (pesanan[nama] || 0) + 1;
  updateTotal();
}

function kurangItem(nama, harga) {
  if (pesanan[nama]) {
    total -= harga;
    pesanan[nama]--;
    updateTotal();
  }
}

function updateTotal() {
  document.getElementById("total").innerText = total;
}

function metodeBayar() {
  let metode = document.getElementById("pembayaran").value;
  let div = document.getElementById("infoBayar");

  if (metode === "ewallet") {
    div.innerHTML = "No E-Wallet: 08568147815";
  } else if (metode === "bank") {
    div.innerHTML = "No Rekening: Tidak Tersedia (BCA)";
   } else if (metode === "qris") {
    div.innerHTML = "qris:Pembayaran Qris Minta ke penjual,Untuk Meminta bercode Qris (qris)";
  } else {
    div.innerHTML = "Bayar di tempat";
  }
}

function checkout() {
  let nama = document.getElementById("nama").value;
  let wa = document.getElementById("wa").value;

  let noPesanan = Math.floor(Math.random() * 1000000);

  let pesan = `Halo, saya mau booking tiket%0A
Nama: ${nama}%0A
No Pesanan: ${noPesanan}%0A
Total: Rp ${total}`;

  window.open(`https://wa.me/628568147815/${wa}?text=${pesan}`);
}

function cariFilm() {
  let input = document.getElementById("search").value.toLowerCase();
  let film = document.getElementsByClassName("film");

  for (let i = 0; i < film.length; i++) {
    let text = film[i].innerText.toLowerCase();
    film[i].style.display = text.includes(input) ? "" : "none";
  }
}