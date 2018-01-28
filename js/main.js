(function() {
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');
    let n = 0;
    let timer = setInterval( () => {
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if(n >= code.length){
        window.clearInterval(timer);
        fn && fn.call();
      }
    },10)
  }
  let code =  
  `.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee433;
  }
  .wrapper {
    width: 100%;
    height: 170px;
    position: relative;
  }
  .wrapper > :not(:last-child) {
    z-index: 1;
  }
  .nose {
    width: 0px;
    height: 0px;
    border: 11px solid transparent;
    border-radius: 50%;
    border-top-color: black;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
  .eye {
    width: 49px;
    height: 49px;
    background-color: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
  }
  .eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
  }
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }
  
  .eye.right {
    left: 50%;
    margin-left: 90px;
  }
  
  .face {
    width: 60px;
    height: 60px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: #fc0d1c;
    position: absolute;
    top: 85px;
  }
  .face.left{
    right: 50%;
    margin-right: 116px;
  }
  .face.right{
    left: 50%;
    margin-left: 116px;
  }
  .upperTip {
    height: 25px;
    width: 80px;
    border: 3px solid black;
    transform: rotate(-20deg);
    position: absolute;
    top: 50px;
    background-color: #fde348;
  }
  .upperTip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
  }
  .upperTip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
  }
  .lowerTip-wrapper {
    position: absolute;
    height: 112px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    overflow: hidden;
  }
  .lowerTip {
    width: 300px;
    height: 3500px;
    background-color: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  .lowerTip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px; 
    background-color: #fc4a62;
    border: 1px solid red;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
  }`

  writeCode('', code);
})().call()