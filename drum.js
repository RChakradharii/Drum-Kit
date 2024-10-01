
function playSound(key) {
    let button = document.querySelector(`button.${key}`);
    if (button) {
        button.classList.add('active-border'); 
        setTimeout(function () {
            button.classList.remove('active-border'); 
        }, 100);
    }

    switch (key) {
        case 's':
            var audio = new Audio('drum6.mp3');
            audio.play();
            break;
        case 'r':
            var audio = new Audio('open-hat-presence.wav');
            audio.play();
            break;
        case 'g':
            var audio = new Audio('drum3.mp3');
            audio.play();
            break;
        case 'm':
            var audio = new Audio('open-hat-thin.wav');
            audio.play();
            break;
        case 'p':
            var audio = new Audio('drum2.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('drum1.mp3');
            audio.play();
            break;
        case 'n':
            var audio = new Audio('drum6.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('break-drum-loop-132276.mp3');
            audio.play();
            break;
        default:
           window.location.href = 'error.html';
    }
}


document.addEventListener('keydown', function(event) {
    playSound(event.key.toLowerCase());
});


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        playSound(button.innerHTML.toLowerCase());
    });
});
