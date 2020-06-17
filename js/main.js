$("#popup").slideDown(350);
$()
// 웹페이지 접속시 팝업창 구현

$(".popupWrap .footer .btnClose").on("click",function(){
    $(".popupWrap").fadeOut(250);
});
// 버튼 클릭시 팝업창 닫음


$(".utilMenu").on("click",function(){
    $("#gnb").fadeIn(250);
    $(".utilMenu").hide();
    $("#logo").hide();

    return false;
});
$("#gnb .btnClose").on("click",function(){
    $("#gnb").fadeOut(250);
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
