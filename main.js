let body = document.body;
let record = document.querySelector('.record');
let stop = document.querySelector('.stop');
let play = document.querySelector('.play');
let soundClips = document.querySelector('.sound-clips');
let canvas = document.querySelector('.visualizer');
let mainSection = document.querySelector('.main-controls');
let audioClip = document.querySelector('.clip');

stop.disabled = true;

//TODO
//Solve playing audio one after another


//creating new track
let track = {
    length: 0,

    addElem: function addElem(elem){
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};
function startRecording(){
    
    stop.disabled = false; // wlączamy dostęp do przycisku stop
    record.disabled = true;
    console.log('it is recording');


    let timeOfStart = Date.now() //aktualny czas w sekundach
        body.addEventListener('keypress' , (e)=>{
            switch(e.key){
                case 'q':
                    sound1Add();                
                    break;
                case 'w':
                    sound2Add(); 
                    break;
                case 'e':
                    sound3Add(); 
                    break;
                case 'r':
                    sound4Add(); 
                    break;
            }
        })

        function sound1Add(){
            let timeOfPress = Date.now();
            console.log(timeOfPress);
            track.addElem({audio: sound1, time: timeOfPress - timeOfStart});
            console.log('dodano dzwiek1')
        }
        function sound2Add(){
            let timeOfPress = Date.now();
            console.log(timeOfPress);
            track.addElem({audio: sound2, time: timeOfPress - timeOfStart});
            console.log('dodano dzwiek2')
        }
        function sound3Add(){
            let timeOfPress = Date.now();
            console.log(timeOfPress);
            track.addElem({audio: sound3, time: timeOfPress - timeOfStart});
            console.log('dodano dzwiek3')
        }
        function sound4Add(){
            let timeOfPress = Date.now();
            console.log(timeOfPress);
            track.addElem({audio: sound4, time: timeOfPress - timeOfStart});
            console.log('dodano dzwiek4')
        }

    
        
}

function playTrack()
{
    play.disabled = true;
    console.log("playing  " + track);
    for(let i = 0; track.length > i ; i++)
    {
        //setInterval( track.audio(), track.time);
        setTimeout(function(){
        track[i].audio();
        }, track[i].time);

    }
}


record.addEventListener("click", startRecording);
play.addEventListener("click", playTrack);


body.addEventListener('keypress' , (e)=>{
    switch(e.key){
        case 'q':
            console.log(e.key + "");
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

function sound1(time = 0){
     let sound1 = document.querySelector('#sound1');
     sound1.currentTime = time;
     sound1.play();
}
function sound2(time = 0){
     let sound2 = document.querySelector('#sound2');
     sound2.currentTime = time;
     sound2.play();
}
function sound3(time = 0){
     let sound3 = document.querySelector('#sound3');
     sound3.currentTime = time;
     sound3.play();
}
function sound4(time = 0){
     let sound4 = document.querySelector('#sound4');
     sound4.currentTime = time;
     sound4.play();
} 
