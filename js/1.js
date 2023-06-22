var video;
var display;
window.onload = function(){
    video = document.getElementById("body1_3_box_videoPlayer1");
    display = document.getElementById("body1_3_box_displayStatus1");
}
// 定义播放按钮
function play(){
    video.play();
}
// 定义暂停按钮
function pause() {
    video.pause();
}
// 定义重新开始按钮
function stop() {
    video.pause();
    video.currentTime=0;
}
// // 设置进度条
// function body1_3_box_progressUpdate1() {
//     var positionBar = document.getElementById("positionBar");
//     positionBar.style.width = (video.currentTime / video.duration * 100) +"&nbsp";
//     display.innerHTML = (Math.round(video.currentTime *100)/100) + "能量值";
// }
