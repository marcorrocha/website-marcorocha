function menuToggle () {
    var x = document.getElementById('navtoggle');
    if (x.className === 'navigation navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navigation navtoggle';
    }     
}
