let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*
你好，我叫Dodo
* 接下来我展示一下我的前端基础
* 首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成八卦图
* 首先把 div 变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 太极生两仪，
* 两仪生四象
* 四象生八卦
* 故八卦由阴阳组成
* 一阴一阳
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 但这不是我们印象中的八卦呀
* 接下来把它优化一下
* 让它称为我们熟知的样子
* 先加上一个外白内黑的小球
**/
#div1::before{
    width: 100px;
    height: 100px;
    left: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
/* 再加上一个外黑内白的小球
**/
#div1::after{
    width: 100px;
    height: 100px;
    left: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
`;
let string2 = '';                               //缓存显示到屏幕的结果

let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {               //是回车的话就替换掉
            string2 += "<br>";
        } else if (string[n] === " ") {          //如果不是回车就照搬
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        // string2 += (string[n] === "\n" ? '<br>' : string[n]);
        html.innerHTML = string2;               //把结果放到innerHTML里面
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);                //75、76行都是让页面自动往下滚，懒得区分移动端还是pc端
        if (n < string.length - 1) {            //判断结果是否到了最后一个，不是的话继续n+1重复操作
            n += 1;
            step();                             // 不是最后一个,就继续
        }

    }, 50);
}

step();


