//音乐控制
$("#musbtn").click(function () {
    if($("#mus-bg")[0].paused){
        $("#mus-bg")[0].play();
        $("#musbtn").css('animation','moverotate 2s linear infinite');
    }
    else{
        $("#mus-bg")[0].pause();
        $("#musbtn").css('animation','none');
    }
})

//打字效果
var l = $("#txt1").text().length;
var s = $("#txt1").text();
var arr = [];
for(var i = 0; i < l; i++){
    arr[i] = s.substr(i,1);
}
var t = 0;
function xiezi(){
    if(t < l){
        $("#txt").append(arr[t]);
        t++;
    }else{
clearInterval(init);
        $("#txt1").empty();
        t=0;
    }
}
var init = setInterval("xiezi()",100);


//四个窗口
$('#light-1').click(function () {
    $('#bg').css('animation','moverbig1 1s linear');
    $('#bg').animate({
        opacity:1,
    },1000,'linear',function () {
        $(this).css("display","none");
    });
    $('#children').css("display","block");
    $('#txt').css('display','none');
});
$('#children').click(function () {
    $('#children').css("display","none");
    $('#bg').css("display","block");
    $('#bg').animate({
        opacity:1,
    },0,'linear',function () {
        $(this).css('animation','moversmall 1s linear');
        $('#light-1').css("display","none");
    });
});


$('#light-2').click(function () {
    $('#bg').css('animation','moverbig2 1s linear');
    $('#bg').animate({
        opacity:1,
    },1000,'linear',function () {
        $(this).css("display","none");
    });
    $('#women').css("display","block");
    $('#txt').css('display','none');
});
$('#women').click(function () {
    $('#women').css("display","none");
    $('#bg').css("display","block");
    $('#bg').animate({
        opacity:1,
    },0,'linear',function () {
        $(this).css('animation','moversmall 1s linear');
        $('#light-2').css("display","none");
    });
});


$('#light-3').click(function () {
    $('#bg').css('animation','moverbig3 1s linear');
    $('#bg').animate({
        opacity:1,
    },1000,'linear',function () {
        $(this).css("display","none");
    });
    $('#work').css("display","block");
    $('#txt').css('display','none');
});
$('#work').click(function () {
    $('#work').css("display","none");
    $('#bg').css("display","block");
    $('#bg').animate({
        opacity:1,
    },0,'linear',function () {
        $(this).css('animation','moversmall 1s linear');
        $('#light-3').css("display","none");
    });
});


$('#light-4').click(function () {
    $('#bg').css('animation','moverbig4 1s linear');
    $('#bg').animate({
        opacity:1,
    },1000,'linear',function () {
        $(this).css("display","none");
    });
    $('#oldman').css("display","block");
    $('#txt').css('display','none');
});
$('#oldman').click(function () {
    $('#oldman').css("display","none");
    $('#bg').css("display","block");
    $('#bg').animate({
        opacity:1,
    },0,'linear',function () {
        $(this).css('animation','moversmall 1s linear');
        $('#light-4').css("display","none");
    });
});


var wins = 0;
$(".window").click(function() {
    var win = $(this).data('win');
    wins += 1;
    if(wins==4){
        $('#bg').css("display","none");
        $('#share').css("display","block");
    }
});

$('#sharebtn').click(function () {
    $('#shares').css("display","block");
});


