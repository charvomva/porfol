$(document).ready(function(){

$('.gnb > li').mouseenter(function(){       // 메인 메뉴에 마우스를 올려놨을 때 
$('.gnbLayer').stop().slideDown(500);       // gnbLayer가 슬라이드되서 나타남 
$('.gnb span').stop().fadeIn(300);                 // 각각의 메뉴의 한글 보임 
$(this).find('span').css({color:'#fff'})    // 마우스를 올려놓은 메뉴 밑에 글자들 흰색으로 바뀜
}); 

$('.gnb > li').mouseleave(function(){           // 각 메인 메뉴에 마우스를 제거했을 때 
    $(this).find('span').css({color:''})         // 흰색 글씨를 다시 원래 색으론 
}); 



$('.gnbLayer').mouseleave(function(){              // 마우스가 gnbLayer에서 벗어났을 때
    $('.gnbLayer').stop().slideUp(500);               // 슬라이드가 위로 올라갑니덩
    $('.gnb span').stop().fadeOut(300);                  // 각 메뉴의 글씨들도 사라집니덩 
});

}); 

