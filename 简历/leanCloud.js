var APP_ID = 'lI0DWrIxPfrtdYKkQK1zn6un-gzGzoHsz';
var APP_KEY = 'aVLkkjI6jicupKNHGrSfqp7J';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
  query.find()
    .then(
      function (messages) {
        let array = messages.map((item)=> item.attributes)
        array.forEach((item)=>{
          let li = document.createElement('li')
          li.innerText = item.content
          let messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
        })
        }, 
      function (error) {
        alert('提交失败了')
     }
    )

let myForm = document.querySelector('#postMessage')

myForm.addEventListener('submit',function(e){
  e.preventDefault()
  let content = document.querySelector('input[name=content]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'content':content
  }).then(function(object) {
    window.location.reload()
    console.log(object)
  })
})
