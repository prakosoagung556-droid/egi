function revealMessage() {
    const message = document.getElementById('message');
    const btn = document.getElementById('openBtn');

    if (message.classList.contains('show')) {
        message.classList.remove('show');
        btn.innerText = 'Buka Kejutan ✨';
    } else {
        message.classList.add('show');
        btn.innerText = 'Tutup Pesan ✖';
    }
}