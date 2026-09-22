function revealMessage() {
    const message = document.getElementById('message');
    const btn = document.getElementById('openBtn');
    const music = document.getElementById('bgMusic'); // Ambil elemen audio

    if (message.classList.contains('show')) {
        message.classList.remove('show');
        btn.innerText = 'Buka Kejutan ✨';
        music.pause(); // Matikan musik saat pesan ditutup
    } else {
        message.classList.add('show');
        btn.innerText = 'Tutup Pesan ✖';
        music.play(); // Putar musik saat pesan dibuka
    }
} 