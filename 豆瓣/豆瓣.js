$('footer>div').click(function(){
    var index = $(this).index()
    $('section').hide().eq(index).fadeIn()
    $(this).addClass('active').siblings().removeClass('active')
})

var index = 0
start()
var isLoading = false
function start(){
    if(isLoading) return
    isLoading = true
    $('.loading').show()
    $.ajax({
        url:'http://api.douban.com/v2/movie/top250',
        type:'GET',
        data:{
            start:index,
            count:20
        },
        dataType:"jsonp"
    }).done(function(ret){
        console.log(ret)
        setData(ret)
        index+=20
    }).fail(function(){
        console.log('数据出错了哦亲。。')
    }).always(function(){
        isLoading = false
        $('.loading').hide()
    })
 }
$('main').scroll(function(){
    if($('section').eq(0).height() - 20 <= $('main').height() + $('main').scrollTop()){
    start()    
    }
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
            <div class="extra"><span class="score"></span>分 / <span class="collect"></span>收藏</div>
            <div class="extra"><span class="year"></span> / <span class="type"></span></div>
            <div class="extra">导演: <span class="director"></span></div>
            <div class="extra">主演: <span class="actor"></span></div>
          </div>
        </a>
      </div> `
      var $node = $(tpl)
      $node.find('a').attr('href',movie.alt)
      $node.find('.cover img').attr('src', movie.images.medium )
      $node.find('.detail h2').text(movie.title)
      $node.find('.detail .score').text(movie.rating.average)
      $node.find('.detail .collect').text(movie.collect_count)
      $node.find('.year').text(movie.year)
      $node.find('.type').text(movie.genres.join('/'))
      
      $node.find('.director').text(function(){
        var directorArr = []
        movie.directors.forEach(function(item){
        directorArr.push(item.name)
        })
        return directorArr.join('、')
      })

      $node.find('.actor').text(function(){
        var actorArr = []
        movie.casts.forEach(function(item){
        actorArr.push(item.name)
        })
        return actorArr.join('、')
      })
      
      $('#top250').append($node)
    })
}




