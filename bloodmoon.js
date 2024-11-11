/* - - - - - - - JS BY ZAHRA AS - - - - - - - */

// simple script to activate the hidden "bloodmoon" theme 

let isToggled = false; // initialize boolean to track toggle state
let isFiltered = false;

// event handler to toggle colors (white <-> red)
document.getElementById('change-color').addEventListener('click', function() {

    if (!isToggled) {
        // change color values of multiple CSS variables (isToggle = true)
        document.documentElement.style.setProperty('--foreground', 'rgb(197, 22, 22)'); // change main foreground color to red
        document.documentElement.style.setProperty('--accent-color', 'white'); // change accent color to white
    } else {
        // change them back (isToggle = false)
        document.documentElement.style.setProperty('--foreground', 'white'); // change main foreground color back to white
        document.documentElement.style.setProperty('--accent-color', 'rgb(197, 22, 22)'); // change accent color back to red
    }

    isToggled = !isToggled; // toggle the color state

});

// event handler to toggle image filers (off <-> on)
document.getElementById('change-color').addEventListener('click', function() {
    const image = document.getElementById('filter-bm-image');
    const backgroundBox = document.getElementById('filter-bm-bg');

    if (!isFiltered) {
        // apply filter (isToggle = true)
        image.style.filter = 'brightness(70%) contrast(125%) saturate(170%)'; // 
        backgroundBox.style.filter = 'brightness(70%) saturate(170%)';
    } else {
        // remove filter (isToggle = false) 
        image.style.filter = 'none'; // remove filter back to original state (which is none)
        backgroundBox.style.filter = 'none';
    }

    isFiltered = !isFiltered
});