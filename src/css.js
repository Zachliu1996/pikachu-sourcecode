const string = `
.skin* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.skin*::before,
.skin*::after {
    box-sizing: border-box;
}
/*初始化*/

.skin {
    position: relative;
    min-height: 60vh;
    background: #ebd60b;
}
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    33% {
        transform: rotate(5deg)
    }

    66% {
        transform: rotate(-5deg)
    }

    100% {
        transform: rotate(0deg)
    }
}

.nose:hover {
    transform-origin: 50% 100%;
    /*确定鼻子晃动的圆心*/
    animation: wave 300ms infinite linear;
}

.nose {
    border: 10px solid black;
    border-color: black transparent transparent transparent;
    /*制作三角形*/
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 6;
}

.yuan {
    border: 1px solid black;
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    left: -10px;
    border-radius: 6px 6px 0 0;
    background: black;
}

@keyframes eyemove {
    0% {
        transform: none;
    }

    20% {
        transform: translateX(16px);
    }

    30% {
        transform: translateX(8px);
    }

    40% {
        transform: translateX(16px);
    }

    60% {
        transform: none;
    }

    75% {
        transform: translateX(16px);
    }

    90% {
        transform: translateX(16px) translateY(30px);
    }

    100% {
        transform: none;
    }
}

.eye {
    border: 2px solid #000;
    height: 64px;
    width: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #373737;
    border-radius: 50%;
}

.eye::before {
    display: block;
    content: '';
    border: 3px solid #000;
    height: 24px;
    width: 24px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 10px;
    animation: eyemove 4000ms infinite ease-out;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

@keyframes mouthmove {
    0% {
        transform: scale(1.0);
    }

    100% {
        transform: scale(0.7);
    }
}

.mouth {
    width: 200px;
    height: 150px;
    position: absolute;
    top: 170px;
    left: 50%;
    margin-left: -100px;
    animation: mouthmove 2s infinite alternate;
}

.mouth .up {
    position: relative;
    top: -10px;
}

.mouth .up .lip {
    border: 4px solid black;
    width: 100px;
    height: 30px;

    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ebd60b;
    z-index: 1;
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 10px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ebd60b;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 25px;
    transform: rotate(-15deg) translateX(-48px);
    border-top-color: transparent;
    border-right-color: transparent;
}

.mouth .up .lip.left::before {
    right: -7px;
}

.mouth .up .lip.right {
    border-radius: 0 0 25px 0;
    transform: rotate(15deg) translateX(48px);
    border-top-color: transparent;
    border-left-color: transparent;
}

.mouth .up .lip.right::before {
    left: -7px;
}

.mouth .down {
    height: 170px;
    position: absolute;
    width: 100%;
    top: 10px;
    overflow: hidden;

}

.mouth .down .yuan2 {
    border: 3px solid black;
    height: 800px;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/250px;
    background: #980f18;
    overflow: hidden;
}

.mouth .down .yuan2 .yuan3 {
    height: 300px;
    width: 200px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    background: #ee4d61;
    border-radius: 100px;
}

.face {
    border: 3px solid black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top: 220px;
    left: 50%;
    margin-left: -25px;
    background: #ea0102;
}

.face.left {
    margin-left: -200px;
}

.face.right {
    margin-left: 120px;
}

.face>img {
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left>img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
    /*以左上为圆心翻转180度*/
}

.lefthand {
    position: absolute;
    left: 50%;
    top: 450px;
    transform: translateX(-200px);
}

.righthand {
    position: absolute;
    left: 50%;
    top: 450px;
    transform: translateX(200px);
}

.righthand>img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
`
export default string;