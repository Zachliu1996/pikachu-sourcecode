import string from './css.js'//模块化
let n = 1;
demo1.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)
console.log(n)

let time = 100;

const run = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id)//到最后一个字后停止。
        return
    }
    console.log(n + ':' + string.substr(0, n))
    demo2.innerHTML = string.substr(0, n)
    demo1.innerText = string.substr(0, n)
    demo1.scrollTop = demo1.scrollHeight;
}
let id = setInterval(() => {
    run();
}, time)
btnPause.onclick = () => {
    window.clearInterval(id)
}
btnPlay.onclick = () => {
    id = setInterval(() => {
        run()
    }, time)
}

btnSlow.onclick = () => {
    window.clearInterval(id)
    time = 300;
    id = setInterval(() => {
        run()
    }, time)
}
btnMid.onclick = () => {
    window.clearInterval(id)
    time = 100;
    id = setInterval(() => {
        run()
    }, time)
}
btnFast.onclick = () => {
    window.clearInterval(id)
    time = 0;
    id = setInterval(() => {
        run()
    }, time)

}