nose_x = 0;
nose_y = 0;

left_eye_x = 0;
left_eye_y = 0;

function preload(){
    img = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    img2 = loadImage('https://lh3.googleusercontent.com/proxy/I63HmqxTwPLXjV3QXwyYqlrfZ-yTS-KvBhNfl1Lb6Yll2-ICMfWrTS4n9YCcBdR-F3kNXo3rStQV-L6vvxtoAN-peVemzN34G0l8NjnYkTEC4a_7Dzh6dZsXSDQ');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 20;
        console.log("Nose x = " + nose_x);
        console.log("Nose y = " + nose_y);

        left_eye_x = results[0].pose.leftEye.x - 60;
        left_eye_y = results[0].pose.leftEye.y - 30;
    }
}

function modelLoaded(){
    console.log("Pose Net is Initialized");
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(img, nose_x, nose_y, 30, 30);
    image(img2, left_eye_x, left_eye_y, 80, 50);
}

function take_snapshot(){
    save('clown_filter.png');
}