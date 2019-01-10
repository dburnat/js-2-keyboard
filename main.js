let body = document.body;
let stop = document.getElementsByClassName('stop');
let record1 = document.getElementById('clip1rec');
let play1 = document.getElementById('clip1play');
let record2 = document.getElementById('clip2rec');
let play2 = document.getElementById('clip2play');
let record3 = document.getElementById('clip3rec');
let play3 = document.getElementById('clip3play');
let record4 = document.getElementById('clip4rec');
let play4 = document.getElementById('clip4play');
//TODO
//Solve playing audio one after another - done
//recording multiple tracks - done
//find a way to stop recording all the time 


let timeoutID; //używane do zatrzymania funkcji

//creating new track
let track1 = {
    length: 0,

    addElem: function addElem(elem){
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

let track2 = {
    length: 0,

    addElem: function addElem(elem){
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

let track3 = {
    length: 0,

    addElem: function addElem(elem){
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

let track4 = {
    length: 0,

    addElem: function addElem(elem){
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem);
    }
};

function startRecording(track, record){
    
    
    //record.disabled = true; //blokujemy przycisk nagrywania
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

function stopRecording(){
    console.log("stopped")
    clearTimeout(timeoutID);
}



function playTrack(track)
{
    for(let i = 0; track.length > i ; i++)
    {
        //setInterval( track.audio(), track.time);
        setTimeout(function(){
        track[i].audio();
        }, track[i].time);
    }
}

function call(calledtrack , callback){
    return callback(calledtrack);
}


for(let i = 0; i < stop.length; i++)  
     stop[i].addEventListener('click', stopRecording) ;


record1.addEventListener("click", function(){
    startRecording(track1,this);
});
play1.addEventListener("click", function(){
    playTrack(track1);
});



record2.addEventListener("click", function(){
    startRecording(track2,this);
});
play2.addEventListener("click", function(){
    playTrack(track2);
});

record3.addEventListener("click", function(){
    startRecording(track3,this);
});
play3.addEventListener("click", function(){
    playTrack(track3);
});

record4.addEventListener("click", function(){
    startRecording(track4,this);
});
play4.addEventListener("click", function(){
    playTrack(track4);
});


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

