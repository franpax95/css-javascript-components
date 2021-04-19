const buttons = document.querySelectorAll(".animatedButton2");

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        this.setAttribute('data-active', this.getAttribute('data-active') === 'true' ? false : true);
        event.preventDefault();
    });
}