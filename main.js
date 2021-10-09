function setup() {
  canvas = createCanvas(300, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier  = ml5.imageClassifier('MobileNet', modelloaded);
}
function modelloaded(){
  console.log('Model Loaded!')
}
function draw(){
  image(video, 0,0,300,250);
  classifier.classify(video, gotResults);
}
function gotResults(error, results){
if(error){
  console.error(error);
}else{
  console.log(results);
  document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  document.getElementById("result_object_name").innerHTML = results[0].label;
}
}



