document.querySelector('.LoadingButton1').addEventListener('click', function(evt) {
    evt.target.classList.add('loading');

    setTimeout(function() {
        evt.target.classList.remove('loading');
    }, 3000);
});