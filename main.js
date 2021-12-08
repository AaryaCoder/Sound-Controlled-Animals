function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier=ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/m7nXbUjMb/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random() *255) +1;
        random_number_g=Math.floor(Math.random() *255) +1;
        random_number_b=Math.floor(Math.random() *255) +1;

        document.getElementById("times_detected_label").innerHTML='Times Sound Detected - '+ results[0].label;
        document.getElementById("sound_detected_label").innerHTML='Detected Voice Is Of - '+ results;
        document.getElementById("times_detected_label").style.color="rgb("+ random_number_r+ " , " + random_number_g+ " , " + random_number_r+ ")";
        document.getElementById("sound_detected_label").style.color="rgb(" + random_number_r+ " , " + random_number_g+ " , " + random_number_r+ ")";

        if(results[0].label=="Barking"){
            img.src='barkingdog.jpg';
            
        }
        else if(results[0].label=="Meowing"){
            img.src='meowcat.jpg';
            
        }
        else if(results[0].label=="Roaring"){
            img.src='lion.png';
            
        }
        else{
            img.src='cow.jpg';
            
        }
    }
    
}


}