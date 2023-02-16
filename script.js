
const pianoSound1 = [
    ["wk1", "sounds/note1.mp3"], ["bk1", "sounds/note2.mp3"], ["wk2", "sounds/note3.mp3"], 
    ["bk2", "sounds/note4.mp3"], ["wk3", "sounds/note5.mp3"], ["wk4", "sounds/note6.mp3"],
    ["bk3", "sounds/note7.mp3"], ["wk5", "sounds/note8.mp3"], ["bk4", "sounds/note9.mp3"],
    ["wk6", "sounds/note10.mp3"], ["bk5", "sounds/note11.mp3"], ["wk7", "sounds/note12.mp3"]
];

const backgroundDesigns = [
    ["bg0","original-background"], ["bg1","background-test1"]
];

const pianoDesigns = [
    ["pdc","piano-classic"], ["pdgrad","piano-gradient"]
];



const pianoSoundMap1 = new Map(pianoSound1);
const backgroundMap = new Map(backgroundDesigns);
const pianoDesignMap = new Map(pianoDesigns);
const background = document.querySelector('[name="background"]');
const backDesign = document.querySelector(".back-design");
const piano = document.querySelector('[name="piano"]');
const pianoDesign = document.querySelector(".piano-design");


addButtonListeners(pianoSoundMap1)


function addButtonListeners(pianoSoundMap) {
    let buttons = document.querySelectorAll(".keys button");
    buttons.forEach(b => {
        b.addEventListener("click", () => {
            new Audio(pianoSoundMap.get(b.name)).play()
            console.log(b.name)
        })
    });
}


function renderBackground() {
    let currentBackground = background.className
    background.classList.add(selectedBackground())
    background.classList.remove(currentBackground)
}

function selectedBackground() {
    return backgroundMap.get(backDesign.value)
}

function renderPiano() {
    const currentPianoDesign = piano.className
    piano.classList.add(selectedPianoDesign())
    piano.classList.remove(currentPianoDesign)
}

function selectedPianoDesign() {
    return pianoDesignMap.get(pianoDesign.value)
}







