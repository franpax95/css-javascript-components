document.querySelectorAll('.buttonHoverEffect3').forEach(function(button) {
    button.innerHTML = '<div><span>' 
        + button.textContent.trim().split('').join('</span><span>') 
        + '</span></div>';
});