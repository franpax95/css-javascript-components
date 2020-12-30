document.querySelectorAll('.gridListButton').forEach(function(button) {
    button.addEventListener('click', toggleGridListButton);
});

function toggleGridListButton() {
    let btn = this;
    btn.classList.add('animation');
    btn.classList.toggle('active');

    let newElem = btn.cloneNode(true);
    btn.parentNode.replaceChild(newElem, btn);
    newElem.addEventListener('click', toggleGridListButton);
}