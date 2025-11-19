const data = [
        { soal: "1. Apa ibu kota indonesia ?", jawab: "jakarta" },
        { soal: "2. Nama planet terbesar di tata surya ?", jawab: "Jupiter" },
        { soal: "3. Apa ibu kota jepang ?", jawab: "tokyo" },
        { soal: "4. Nama alat untuk mengetik di layar monitor ?", jawab: "keyboard" },
        { soal: "5. Tahun berapa indonesia merdeka ?", jawab: "1945" },
        { soal: "6. (kursi) terjemahkan ke dalam bahasa inggris", jawab: "chair" },
        { soal: "7. (meja) terjemahkan ke dalam bahasa inggris", jawab: "table" },
        { soal: "8. (ohayo gozaimasu) terjemahkan ke dalam bahasa indonesia (", jawab: "selamat pagi" },
        { soal: "9. (konbanwa) terjemahkan ke dalam bahasa indonesia", jawab: "selamat malam" },
        { soal: "10. (sayonara) terjemahkan ke dalam bahasa indonesia", jawab: "selamat tinggal" }
    ];

    let index = null;
    let skor = 0;

    function soalBaru() {
        index = Math.floor(Math.random() * data.length);
        document.getElementById("soal").innerText = data[index].soal;
        document.getElementById("jawabanUser").value = "";
        document.getElementById("status").innerText = "";
    }

    function cekJawaban() {
        if (index === null) return;

        let user = document.getElementById("jawabanUser").value.trim().toLowerCase();
        let benar = data[index].jawab.toLowerCase();

        let status = document.getElementById("status");

        if (user === benar) {
            skor++;
            status.innerHTML = "<span class='neon'>Jawaban Benar! 🎉</span>";
        } else {
            status.innerHTML = "<span style='color:#f87171;'>Salah! Jawaban: " + data[index].jawab + "</span>";
        }

        document.getElementById("skor").innerText = "Skor: " + skor;
    }

    function toggleMode() {
        let body = document.body;
        let card = document.getElementById("card");

        if (body.style.background === "var(--bg-light)") {
            body.style.background = "var(--bg-dark)";
            body.style.color = "var(--text-dark)";
            card.style.background = "var(--card-dark)";
        } else {
            body.style.background = "var(--bg-light)";
            body.style.color = "var(--text-light)";
            card.style.background = "var(--card-light)";
        }
    }
    // JAM DIGITAL
    function padZero(num) { return (num < 10 ? '0' : '') + num; }
    function updateJam() {
      const now = new Date();
      const jam = padZero(now.getHours());
      const menit = padZero(now.getMinutes());
      const detik = padZero(now.getSeconds());
      document.getElementById('jam').textContent = `${jam}:${menit}:${detik}`;
      setTimeout(updateJam, 1000);
    }
    updateJam();