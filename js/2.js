var vide;
var displa;
window.onload = function(){
    vide = document.getElementById("body1_3_box_videoPlayer2");
    displa = document.getElementById("body1_3_box_displayStatus2");
}
// 定义播放按钮
function play2(){
    video.play();
}
// 定义暂停按钮
function pause2() {
    video.pause();
}
// 定义重新开始按钮
function stop2() {
    video.pause();
    video.currentTime=0;
}
// // 设置进度条
// function body1_3_box_progressUpdate1() {
//     var positionBar = document.getElementById("positionBar");
//     positionBar.style.width = (video.currentTime / video.duration * 100) +"&nbsp";
//     display.innerHTML = (Math.round(video.currentTime *100)/100) + "能量值";
// }
