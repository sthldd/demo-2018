let buttons = $('#foot>ul>li ')


for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click', function(x) {
      var index = $(x.currentTarget).index()
      var p = index * -920
      $('#slides').css({
        transform: 'translate(' + p + 'px)'
      })
      n = index
      activeButton(buttons.eq(n))
    })
  }
  var n = 0;
  var size = buttons.length
  buttons.eq(n % size).trigger('click')
  
  
  var timerId = setTimer()
  
  function setTimer() {
    return setInterval(() => {
      n += 1
      buttons.eq(n % size).trigger('click')
    }, 2000)
  }
  
  function activeButton($buttons) {
    $buttons
      .addClass('active')
      .siblings('.active').removeClass('active')
  }
  
  $('#container').on('mouseenter', function() {
    window.clearInterval(timerId)
  })
  
  $('#container').on('mouseleave', function() {
    timerId = setTimer()
  })

// $buttons.eq(0).on('click',function(e){
//   $slides.css({transform:'translateX(0px)'})
// })
// $buttons.eq(1).on('click',function(e){
//    $slides.css({transform:'translateX(-920px)'})
//   })
// $buttons.eq(2).on('click',function(e){
//    $slides.css({transform:'translateX(-1840px)'})
// })
// $buttons.eq(3).on('click',function(e){
//    $slides.css({transform:'translateX(-2760px)'})
// })
     