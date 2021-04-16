document.querySelectorAll('.deleteButton').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if(!button.classList.contains('delete')) {
            button.classList.add('delete');

            setTimeout(() => {
                button.classList.remove('delete');
            }, 3200);
        }

        e.preventDefault();
    });
});