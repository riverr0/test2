// header submenu
$(".submenu").hide()

$("#header .menu>ul>li, .hd_right>ul>li").mouseover(function(){
 $(this).find(".submenu").stop().slideDown()
})

$("#header .menu>ul>li, .hd_right>ul>li").mouseleave(function(){
 $(this).find(".submenu").stop().slideUp()
})

// header full_wrap
$(".full_wrap").hide()
$(".hd_right img").click(function(){
 $(".full_wrap").show()
 $(".side_icon").hide()
})
$(".full_wrap .close").click(function(){
 $(".full_wrap").hide()
 $(".side_icon").show()
})

//add_top slide
let swiper = new Swiper(".add_top .mySwiper", {
 loop:true,
 navigation: {
   nextEl: ".add_top .next_btn",
   prevEl: ".add_top .prev_btn",
 },
});

//main video autoplay
let video = $("#video")[0]
video.autoplay=true
video.muted=true 
video.loop=true 
video.play()

/* con1 slide */
let swiper2 = new Swiper(".con1 .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".con1 .con1_next",
    prevEl: ".con1 .con1_prev",
  },
});

// con2_slide1
let swiper3 = new Swiper(".con2_slide1 .mySwiper", {
  slidesPerView: 4,
  loop:true,
  navigation: {
    nextEl: ".con2_arrow",
  },
  simulateTouch:false, // 드래그 했을 때, 슬라이드 이동
});

//con2_slide2
let swiper4 = new Swiper(".con2_slide2 .mySwiper", {
  slidesPerView: 1,
  loop:true,
  navigation: {
    nextEl: ".con2_arrow",
  },
  simulateTouch:false,
});

//con4 site_menu

/*    $(".con4 .site_menu>.s1").click(function(){
    $(".con4 .site_menu>li").removeClass("active")
    $(this).addClass("active")
    $(".con4 .site>div").css({display:"none"})
    $(".con4 .site>.site1").css({display:"block"})
   })
   $(".con4 .site_menu>.s2").click(function(){
    $(".con4 .site_menu>li").removeClass("active")
    $(this).addClass("active")
    $(".con4 .site>div").css({display:"none"})
    $(".con4 .site>.site2").css({display:"block"})
   })
   $(".con4 .site_menu>.s3").click(function(){
    $(".con4 .site_menu>li").removeClass("active")
    $(this).addClass("active")
    $(".con4 .site>div").css({display:"none"})
    $(".con4 .site>.site3").css({display:"block"})
   })
   $(".con4 .site_menu>.s4").click(function(){
    $(".con4 .site_menu>li").removeClass("active")
    $(this).addClass("active")
    $(".con4 .site>div").css({display:"none"})
    $(".con4 .site>.site4").css({display:"block"})
   })
   $(".con4 .site_menu>.s5").click(function(){
    $(".con4 .site_menu>li").removeClass("active")
    $(this).addClass("active")
    $(".con4 .site>div").css({display:"none"})
    $(".con4 .site>.site5").css({display:"block"})
   }) */

   //index() ==> 안에있는 자식들의 순서를 불러올 때 사용하는 매서드
   // $(".site_menu>li").index() --> 0 1 2 3 4
   //eq() => 매칭시켜주는 매서드(값을 불러와서 매치시킴)
$(".site_menu>li").click(function(){
  //site_menu 클릭시 active 효과 넣기
  $(".site_menu>li").removeClass("active")
  $(this).addClass("active")

  //site_menu>li 클릭시 이미지 띄우기
  $(".con4 .site>div").css({display:"none"})

  let Index = $(this).index()

  $(".con4 .site>div").eq(Index).css({display:"block"})
})

//family site

$("#footer .link").hide()
$("#footer .site>li").click(function(){
  $("#footer .fsite .link").toggle()
  $("#footer .fsite .plus").toggle()
  $("#footer .fsite .minus").toggle()
})

//side_icon
//스크롤탑
/* $(document).ready(function(){
  $(".icon2").hide(); // 탑 버튼 숨김
 
   $(function(){
        $(window).scroll(function () {
           if ($(this).scrollTop() > 100) { // 스크롤이 100을 넘을면 ▲표시
               $('.icon2').fadeIn();
           } else {
               $('.icon2').fadeOut();
           }
       });
       $('.icon2').click(function () {
           $('body,html').animate({
               scrollTop: 0
           }, 500);  // 탑 이동 스크롤 속도
           return false;
       });
   });
 
  });/* 스크롤탑 끝 */ 
//icon2 클릭시 top 올리기
  $(".icon2").click(function(){
    $("html,body").animate({scrollTop: 0},500)
  })//초를 넣어도 되고, smooth라는 매서드도 사용 가능!

  //스크롤 내릴 때 효과(.icon2 나타내기)

  $(window).scroll(function(){
    let A = $(this).scrollTop()
    if(A > 0){
      $(".icon1").css({top:"0"})
      $(".icon2").css({opacity:"1"})
      $(".add_top").css({opacity:"0"})
    }else{
      $(".icon1").css({top:"90px"})
      $(".icon2").css({opacity:"0"})
      $(".add_top").css({opacity:"1"})
    }
  })





  AOS.init();