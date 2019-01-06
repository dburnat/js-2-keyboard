let body = document.body;
let record = document.querySelector('.record');
let stop = document.querySelector('.stop');
let soundClips = document.querySelector('.sound-clips');
let canvas = document.querySelector('.visualizer');
let mainSection = document.querySelector('.main-controls');
let audioClip = document.querySelector('.clip');

stop.disabled = true;
let timeOfStart = 10;
let timeOfPress = 15;


let keyList = ['q' , 'w', 'e' , 'r' , 'a' , 's' , 'd' , 'f'];
let numberOfTracks = 0;

let track = {
    length: 0,

    addElem: function addElem(elem, timen , namen){
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem, timen, namen);
    }
};


function startRecording(){
    console.log('it works');
    stop.disabled = false; // wlączamy dostęp do przycisku stop
    record.disabled = true;
    
   // let currentTrack = numberOfTracks; //numer ścieżki aktualni
    let timeOfStart = Date.now() //aktualny czas w sekundach
    let track = {
        length: 0,
        timeOfPress: 0,

        addElem: function addElem(elem){
            // obj.length is automatically incremented 
            // every time an element is added.
            [].push.call(this, elem , timeOfPress - timeOfStart)
        }
    };

        body.addEventListener('keypress' , (e)=>{
            switch(e.key){
                case 'q':
                    let timeOfPress = Date.now();
                    console.log(timeOfPress);
                    track[0].push({sound: sound1} , {time:  timeOfPress - timeOfStart});
                    break;
                case 'w':
                    timeOfPress = Date.now;
                    console.log(e.key + timeOfPress);
                    track.push({sound: sound2} , {time:  timeOfPress - timeOfStart});
                    break;
                case 'e':
                    timeOfPress = Date.now;
                    console.log(e.key + timeOfPress);
                    track.push({sound: sound3} , {time:  timeOfPress - timeOfStart});
                    break;
                case 'r':
                    timeOfPress = Date.now;
                    console.log(e.key + timeOfPress);
                    track.push({sound: sound4} , {time:  timeOfPress - timeOfStart});
                    break;
            }
        })

        function sound1(){
             let sound1 = document.querySelector('#sound1');
             sound1.currentTime = 0;
             sound1.play();
        }
        function sound2(){
             let sound2 = document.querySelector('#sound2');
             sound2.currentTime = 0;
             sound2.play();
        }
        function sound3(){
             let sound3 = document.querySelector('#sound3');
             sound3.currentTime = 0;
             sound3.play();
        }
        function sound4(){
             let sound4 = document.querySelector('#sound4');
             sound4.currentTime = 0;
             sound4.play();
        }
        
}

record.addEventListener("click", startRecording);



body.addEventListener('keypress' , (e)=>{
    switch(e.key){
        case 'q':
            console.log(e.key + " poza");
            sound1();
            break;
        case 'w':
            console.log(e.key);
            sound2();
            break;
        case 'e':
            console.log(e.key);
            sound3();
            break;
        case 'r':
            console.log(e.key);
            sound4();
            break;
    }
})

function sound1(){
     let sound1 = document.querySelector('#sound1');
     sound1.currentTime = 0;
     sound1.play();
}
function sound2(){
     let sound2 = document.querySelector('#sound2');
     sound2.currentTime = 0;
     sound2.play();
}
function sound3(){
     let sound3 = document.querySelector('#sound3');
     sound3.currentTime = 0;
     sound3.play();
}
function sound4(){
     let sound4 = document.querySelector('#sound4');
     sound4.currentTime = 0;
     sound4.play();
} 
