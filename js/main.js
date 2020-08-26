$("#popup").slideDown(350);
$()
// 웹페이지 접속시 팝업창 구현

$(".popupWrap .footer .btnClose").on("click",function(){
    $(".popupWrap").fadeOut(250);
});
// 버튼 클릭시 팝업창 닫음


$(".utilMenu").on("click",function(){
    $("#gnb").fadeIn()
    $(".utilMenu").hide();
    $("#logo").hide();
    return false;
});
$("#gnb .btnClose").on("click",function(){
    $("#gnb").fadeOut();
    $(".utilMenu").show()
    $("#logo").show();
    return false;
});

// 버튼 클릭시 메뉴 

let util = document.querySelector(".utilMenu");
let logo = document.querySelector("#logo");
let txt = document.querySelector(".txt");
let gnb = document.querySelector("#gnb");

$(window).on("scroll",function(){
    let st = this.scrollY;
    // console.log("st", st)
    if(st >= 1200) {
        gnb.classList.add("last");
        txt.classList.add("last");
    } 
    else {
        gnb.classList.remove("last");
        txt.classList.remove("last");
    }
});

//스크롤시 애니메이션

let ratio = window.devicePixelRatio;
console.log(ratio);
if (ratio >= 2 && $(window).width()+17 <= 1800){
    $(".popupWrap").hide()
}

// 모바일 접속시 팝업창이 뜨지않음 (모바일 버전은 기존 사이트와 같음)
