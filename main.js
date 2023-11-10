music1 = "";
music2 = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
   
}

    function modelLoaded(){
        console.log('PoseNet Is Initialized');
    }
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            leftWristX = results[0].pose.wrist.x - 15;
            rightWristX = results[0].pose.wrist.x - 15;
        }
    }
    
function preload(){
    music1 = loadSound(music.mp3);
    music2 = loadSound(music2.mp3);
}


function draw(){
    image(video, 0, 0, 600, 500);
}