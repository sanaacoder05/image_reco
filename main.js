Webcam.set({ 
    width:350, 
    height:300, 
    image_format : 'png',
     png_quality:90 });

    camera = document.getElementById("lightscamaction");
    Webcam.attach( '#camera' );
    function un7jg() 
    { 
        Webcam.snap(function(data_uri) { 
            document.getElementById("lca_output").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
         }); 
        }

        console.log('ml5 version:', ml5.version);
//ml5.js provides a pre-trained model which detects the images from a video OR webcam live view.

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1yQ8DmLy_/model.json',modelLoaded);
//imageClassifier is a predefined function of ml5.js that is used to trigger the ml5.js image classification function.

function modelLoaded() {
     console.log('Model Loaded!'); 
    }

    function jg(){
         img = document.getElementById('captured_image'); 
    classifier.classify(img, gotResult); 
}
function gotResult(error, results) 
{
    if (error) {
         console.error(error); 
        } 
        else { 
            console.log(results);
             document.getElementById("obj_name").innerHTML = results[0].label;
              document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(5); 
} 
}