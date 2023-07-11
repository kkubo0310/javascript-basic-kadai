const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
    // 2秒（2000ミリ秒）の待ち時間を設定
  document.getElementById('text').textContent = 'ボタンをクリックしました';
}, 2000);
});

// setTimeoutの中にbtn～を入れてしまうと、2回押したときに文字が変わる仕様になってしまう。
