function preload(){

}
function setup() {
    canvas=createCanvas(640,480);
    canvas.position(180,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}
function draw(){
    image(video,0,0,640,480);
tint(tint_color);
}
function filter__() {
    tint_color=document.getElementById("color_name").value;
}
function take_snapshot(){
    save('img1.png');
}