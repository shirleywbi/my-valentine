let buttonScale = 1.0;
let noMessageIndex = 0;
let noCount = 0;
let MAX_REJECTION_COUNT = 10;
let noMessages = [
    "Are you sure?",
    "Pretty please?",
    "Think about it?",
    "Just this once?",
    "You're missing out!",
    "Give me a chance?",
    "Trust me on this.",
    "Pretty please with a cherry on top?",
    "I can only handle so much rejection. :'(",
    "Yes?"
];

function increaseYesButtonSize() {
    let button = document.getElementById("yes-btn");
    buttonScale += 0.3;
    button.style.transform = "scale(" + buttonScale + ")";
}

function rotateNoMessages() {
    let noButton = document.getElementById("no-btn");
    if (noCount >= MAX_REJECTION_COUNT) {
        noButton.innerText = "<-- Click Here";
        noButton.disabled = true;
        noButton.style.backgroundColor = "grey";
    } else {
        noButton.innerText = noMessages[noMessageIndex];
    }
    noMessageIndex = (noMessageIndex + 1) % noMessages.length;
}

function handleNoButton() {
    increaseYesButtonSize();
    rotateNoMessages();
    noCount++;
}

function showSuccessDisplay() {
    document.body.innerHTML = "";
    let img = document.createElement('img');
    img.src = "./assets/milk-mocha-kiss.gif";
    img.alt = "I Love You";
    document.body.appendChild(img);

    let header = document.createElement('h1');
    header.innerText = "Happy Valentine's Day, Sweetie!"
    document.body.appendChild(header);
}

