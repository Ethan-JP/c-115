function preload(){

}

function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    //code for creating the live webcam view
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()//to hide the video from the default location

    //code for initializing posenet

    poseNet=ml5.poseNet(video,modelLoaded)
    //code for executing the model
    poseNet.on("pose",gotPoses)

} 

function draw(){
    //code fot drawing the video over the canvas
    //image(var,x,y,w,h)
    image(video,0,0,400,400)
}

function snapshot() {
    save("filter.png")
}

function modelLoaded(){
    console.log("hello PoseNet is working")
}

function gotPoses(results) {
   
    if (results.length>0) {
        console.log(results)
    }
}