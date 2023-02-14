const pianoMap = new Map();
const keyBindsMap = new Map()
const buttons = document.querySelectorAll("button")

pianoMap.set('wk1', new Audio("sound/note01.mp3"))
pianoMap.set('wk2', new Audio("sound/note02.mp3"))
pianoMap.set('wk3', new Audio("sound/note03.mp3"))
pianoMap.set('wk4', new Audio("sound/note04.mp3"))
pianoMap.set('wk5', new Audio("sound/note05.mp3"))
pianoMap.set('wk6', new Audio("sound/note06.mp3"))

pianoMap.set('bk1', new Audio("sound/note07.mp3"))
pianoMap.set('bk2', new Audio("sound/note08.mp3"))
pianoMap.set('bk3', new Audio("sound/note09.mp3"))



// the event loop, fucks it.

buttons.forEach(button => {
    button.addEventListener("click", () => {
        pianoMap.get(button.name).play()
        console.log(button.name)
    })

});
