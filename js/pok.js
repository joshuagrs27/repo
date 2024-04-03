function beginPage() {
    let buttonCharacter = document.getElementById("button-character");

buttonCharacter.addEventListener('click', selectCharacter);
}

function selectCharacter() {
    alert("you select character");
}




window.addEventListener('load', beginPage);