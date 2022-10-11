song1 = "music.mp3";
song2 = "music2.mp3"
 
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

leftWristX = 0;
rightWristX = 0;

leftWristY = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(600,500)
    canvas.center();

     video = createCapture(VIDEO);
     video.hide();
     
     poseNet = ml5.poseNet(video,modelloaded);
     poseNet.on('pose',gotPoses);
}

function modelloaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist =" + scoreRightWrist + "scoreLeftWrist"+ scoreleftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY"+ rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY"+ leftWristY);
    }
}

function draw()
{
    image(video,0,0,600,500);
}