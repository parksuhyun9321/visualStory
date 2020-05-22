
$(".utilMenu").on("click",function(){
    $("#gnb").fadeIn(250);
    $("body").addClass("overHidden");
    $(".utilMenu").hide();
    $("#logo").hide();

    return false;
});
$("#gnb .btnClose").on("click",function(){
    $("#gnb").fadeOut(250);
    $("body").removeClass("overHidden");
    $(".utilMenu").show()
    $("#logo").show();
    return false;
});
let util = document.querySelector(".utilMenu");
let logo = document.querySelector("#logo");
let txt = document.querySelector(".txt");
let gnb = document.querySelector("#gnb");
window.addEventListener("scroll",function(){
    let st = this.scrollY;
    console.log("st", st)
    if(st > 1200) {
        gnb.classList.add("last");
    } 
    
    else {
        gnb.classList.remove("last");
    } if (st > 1559) {
        txt.classList.add("last");
    } else {
        txt.classList.remove("last");
    }

});

