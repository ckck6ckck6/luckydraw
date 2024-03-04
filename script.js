document.getElementById('drawButton').addEventListener('click', function() {
    const prizes = ["男友任我擺布一日券", "停止吵架券", "專屬擁抱券", "愛的告白券", "神秘驚喜券"];
    const resultIndex = Math.floor(Math.random() * prizes.length);
    document.getElementById('result').textContent = "恭喜你獲得: " + prizes[resultIndex];
});
