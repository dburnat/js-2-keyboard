let body = document.body;
let record = document.querySelector('.record');
let stop = document.querySelector('.stop');
let soundClips = document.querySelector('.sound-clips');
let canvas = document.querySelector('.visualizer');
let mainSection = document.querySelector('.main-controls');
let audioClip = document.querySelector('.clip');

stop.disabled = true;

class Record {
    constructor(){
        this.audioClip[10] = audioClip[10];
        this.timeAt = timeAt;
    }
}

let keyList = ['q' , 'w', 'e' , 'r' , 'a' , 's' , 'd' , 'f'];

function startRecording(){
    let record = new Record();
    //if(body.addEventListener('keypress' , (e) == )
}






body.addEventListener('keypress' , (e)=>{
    switch(e.key){
        case 'q':
            console.log(e.key);
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
})    
