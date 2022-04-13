mustachX = 0;
mustachY = 0;


function preload()
{
    my_mustach = loadImage('https://i.postimg.cc/wjJV90w9/mustach.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialzied");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustachX = results[0].pose.nose.x-15;
        mustachY = results[0].pose.nose.y-1;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(my_mustach, mustachX, mustachY, 30, 30);
}

function take_snapshot()
{
    save('myFilter.png');
}