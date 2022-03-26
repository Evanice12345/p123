leftWristX=0;
rightWristX=0;
difference=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    canvas = createCanvas(500, 500);
    canvas.position(510, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is inizialized!");
}


function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);
        difference= Math.floor(leftWristX - rightWristX);
    }

}
function draw(){
    background("#FCB0B3");
   document.getElementById("square_side").innerHTML= "The Width And Height Of The Text Is " + difference + "px";
  text('Eva Banerjee',50,400);
  fill("#82D99E");
  textSize(difference);


   
}