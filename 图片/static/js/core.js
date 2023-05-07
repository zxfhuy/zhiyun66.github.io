//给点了赞的添加done
add_done();

//给导航添加选中效果
var sign = getHashValue('sign');
sign = sign === '' ? 1 : sign;
$('#menu-item-' + sign).addClass('current-menu-item');

//给换一换添加链接
$('#rand').attr('href','?order=rand#sign=' + sign);

//取urlHash值
function getHashValue(key){
  var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
  return matches ? matches[1] : '';
}

$(".ycsd-up").click(function(){    
    var id = $(this).data("id"),
        action = $(this).data('action'),
        rateHolder = $(this).children('.count');
    if($(this).hasClass('doume done')){
        layer.msg('您已经点过赞了~');
        return false;
    }else if(is_like(id)){
        layer.msg('您已经点过赞了~');
        return false;
    }else{
        var ajax_data = {action: "like", id: id};
        $.post(xn.url('ajax', 1), ajax_data, function(res, sta){
            if(sta == 'success'){
                if(res.code === 0){
                    add_like(id);
                }else{
                    layer.alert(res.msg, {icon:5});
                }
            }else{
                layer.alert('连接服务器失败，请重试', {icon:2});
            }
        });
        return false;
    }
});

//是否已经点赞
function is_like(id){
    var likes = getCookie('LIKE');
    if(likes === '') return false;
    
    if(likes.indexOf('.') !== -1){
        likes = likes.split('.');
        likes.find(function(value){
            if(value == id){
                return true;
            }else{
                return false;
            }
        })
    }else{
        return likes == id ? true : false;
    }
}

//点赞添加cookie
function add_like(id){
    var likes = getCookie('LIKE');
    var obj = $('.ycsd-up[data-id='+ id +']');
    if(likes === ''){
        setCookie('LIKE',id,2000);
    }else{
        setCookie('LIKE',likes + '.' + id,2000);
    }
    obj.addClass('doume done');
    obj.children('.count').html((parseInt(obj.children('.count').html()) + 1).toString());
}

//给点了赞的添加done
function add_done(){
    var likes = getCookie('LIKE');
    if(likes === '') return true;
    
    if(likes.indexOf('.') !== -1){
        likes = likes.split('.');
        for (var i = 0; i < likes.length; i++){
            $('.ycsd-up[data-id='+ likes[i] +']').addClass('doume done');
        }
    }else{
        $('.ycsd-up[data-id='+ likes +']').addClass('doume done');
    }
}

//设置cookie
function setCookie(name, value, Days){
    if(!Days){
        var Days = 30;
    }
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    //';path=/'指定保存在根目录
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ';path=/';
}

//取cookie
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg)){
        return unescape(arr[2]);
    }else{
        return '';
    }
}

$(".go-copy").on("click", function(){
    $(this).html();
    var e = new ClipboardJS(".go-copy");
    e.on("success",    function(t){
        t.clearSelection(),
        layer.msg('复制成功');
        //layer.msg('复制成功',{icon:6});
    }),
    e.on("error", function(t){
        layer.msg('复制失败');
        //layer.msg('复制失败',{icon:5});
    });
})

jfox_search = $('#omnisearch .omnisearch-form');
jfox_search.on('submit', function(){
    var s = jfox_search.find('input[name="s"]').val();
    var url = xn.url('search-'+xn.urlencode(s), 1);
    window.location = url;
    return false;
});

/**
 * 判断是否是IE
 */
function isIE(){
    if(!!window.ActiveXobject || "ActiveXObject" in window){
        return true;
    }else{
        return false;
    }
}
/**
 * 判断是否是IE11
 */
function isIE11(){
    if((/Trident\/7\./).test(navigator.userAgent)){
        return true;
    }else{
        return false;
    }
}

function getScrollbarWidth(){
    var t, e, i = document.createElement("div"),
    a = {
        width: "100px",
        height: "100px",
        overflowY: "scroll"
    };
    for(t in a) i.style[t] = a[t];
    document.body.appendChild(i); 
    e = i.offsetWidth - i.clientWidth;
    if(isIE() || isIE11()){
        i.removeNode(true);
    }else{
        i.remove();
    }
    return e;
}

$("body").on("click", ".fox-sousuo", function(e){
    e.preventDefault();
    var i = $(this),
    a = i.data("action"),
    n = i.data("target"),
    o = getScrollbarWidth();
    switch (a){
    case "omnisearch-open":
        n = i.data("target"),
        i.addClass("active"),
        $(n).addClass("show"),
        $(n).find(".form-control").focus(),
        $("body").addClass("omnisearch-open").append('<div class="fox-sousuo mask-body mask-body-dark" data-action="omnisearch-close" data-target="' + n + '" />'),
        $("body").css("padding-right", o + "px");
        break;
    case "omnisearch-close":
        n = i.data("target"),
        $('[data-action="search-open"]').removeClass("active"),
        $(n).removeClass("show"),
        $("body").removeClass("omnisearch-open").find(".mask-body").remove(),
        $("body").css("padding-right", "0px")
    }
});

$(".search-ajax-input").bind("input propertychange", function(e){
    var i = $(".search-ajax-input").val(),
    a = $(".omnisearch-suggestions .heading");
    i && (a.html('数据加载中... <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="sr-only">Loading...</span></div>'), $.post(xn.url('ajax', 1), {action: "search", text: i},    function(e){
        var n = $("#search-ajax-res");
        if(a.html("[ <span class='text-danger'>" + i + "</span> ] 的搜索结果："), 0 == e.length){
            n.empty().show().append('<li class="text-muted"><a>没有搜到相关内容，切换关键词试试。</a></li>')
        }else{
            n.empty().show();
            for (var o = 0; o < e.length; o++) n.append('<li><a target="_blank" class="list-link" href="' + e[o].url + '"><i class="nmb a-404"></i>' + e[o].title + "<span> " + e[o].time + "</span></a></li>")
        }
    })),
    $(document).click(function(e){
        var i = $(".home-search-results");
        i.is(e.target) || 0 !== i.has(e.target).length || i.hide()
    })
});