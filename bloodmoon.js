/* - - - - - - - JS BY ZAHRA AS - - - - - - - */

// simple script to activate the hidden "bloodmoon" theme 

let isToggled = false; // initialize boolean to track toggle state

document.getElementById('change-color').addEventListener('click', function() {

    if (!isToggled) {
        // change color values of multiple CSS variables (toggle true)
        document.documentElement.style.setProperty('--foreground', 'rgb(197, 22, 22)'); // change main foreground color to red
        document.documentElement.style.setProperty('--accent-color', 'white'); // change accent color to white
    } else {
        // change them back (toggle false)
        document.documentElement.style.setProperty('--foreground', 'white'); // change main foreground color back to white
        document.documentElement.style.setProperty('--accent-color', 'rgb(197, 22, 22)'); // change accent color back to red
    }

    isToggled = !isToggled; // toggle the state

});