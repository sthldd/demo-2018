$('footer>div').click(function(){
    var index = $(this).index()
    $('section').hide().eq(index).fadeIn()
    $(this).addClass('active').siblings().removeClass('active')
})

$.ajax({
    url:'http://api.douban.com/v2/movie/top250',
    type:'GET',
    data:{
        start:0,
        count:20
    },
    dataType:"jsonp"
}).done(function(ret){
    console.log(ret)
    setData(ret)
}).fail(function(){
    console.log('数据出错了哦亲。。')
})

function setData(data){
    data.subjects.forEach(function(movie){
        var tpl = `<div class="item">
        <a href="#">
          <div class="cover">
            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.webp" alt="">
          </div>
          <div class="detail">
            <h2>霸王别姬</h2>
            <div class="extra"><span class="score">9.3分</span> / 1000收藏</div>
            <div class="extra">1994 / 剧情、爱情</div>
            <div class="extra">导演: 张艺谋</div>
            <div class="extra">主演: 张艺谋、张艺谋、张艺谋</div>
          </div>
        </a>
      </div> `
      var $node = $(tpl)
      $node.find('.cover img').attr('src', movie.images.medium )
      $node.find('.detail h2').text(movie.title)
      $node.find('.detail .score').text(movie.rating.average)
      $('section').eq(0).append($node)
    })
}