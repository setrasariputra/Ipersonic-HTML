var numberOne = 10; // integer
var numberTwo = 6; // integer
var myName = "Wisnu Kuncoro"; // string
var score = 5;

// conditional if else
// if(score > 7) {
//     alert('Lulus')
// }else{
//     alert('Tidak lulus')
// }


document.querySelector('.mobile-menu-trigger').addEventListener('click', function() {
    // show responsive menu
    var menu = document.querySelector('.topmenu ul');
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
});