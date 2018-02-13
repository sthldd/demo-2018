function wirteCode(code){
  let domCode = document.querySelector('#code')
  var n = 0 
  var id = setInterval(()=>{
      n+=1
      domCode.innerHTML = Prism.highlight(code.substring(0,n), Prism.languages.css)
      styleTag.innerHTML = code.substring(0,n)
      if(n>=result.length){
          window.clearInterval(id)
      }
  },10)
}


var result = `/*
*你好，我是老马
*我来介绍一下我自己
*算了，还是用代码来介绍我吧
*接招
*/
*{
  transition:all 1s;
}
html{
  background:rgb(222,222,222);
  font-size:16px;
}
#code{
 border:1px solid red;
 padding:16px;
}
/*现在我们需要让代码高亮*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}
/*我们来让它翻个跟头*/
#code{
    transform:rotate(360deg);
}
/*不玩了，我来介绍一下我自己吧*/
/*我需要一张白纸*/
` 
var result2 = `

`

writeCode(result)
function fn2(){
    var paper = document.createElement('div')
    paper.id='paper'
    document.body.appendChild(paper)
}
function fn3(preResult){
    var result = `
      #paper{
        width:100px;
        height:100px;
        background:red;
      }
    `
    var n = 0 
    var id = setInterval(()=>{
        n+=1
        code.innerHTML = preResult + result.substring(0,n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
        styleTag.innerHTML = preResult + result.substring(0,n)
        if(n>=result.length){
        window.clearInterval(id)
        }
  },10)
}
