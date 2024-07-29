// var numberOne = 10; // integer
// var numberTwo = 6; // integer
// var myName = "Wisnu Kuncoro"; // string
// var score = 5;

// conditional if else
// if(score > 7) {
//     alert('Lulus')
// }else{
//     alert('Tidak lulus')
// }

// var testArray = [10, 6, "WIsnu Kuncoro", 5];
// alert(testArray[3])

var q_options = [
    {
        1: "Saya agak ramah, membuka hati dan saya suka berada bersama-sama dengan orang lain.",
        2: "Saya membutuhkan banyak waktu untuk sendirian dan agak hati-hati untuk memulai hubungan baru."
    },
    {
        1: "Saya lebih suka bekerja praktis, menghasilkan hasil yang nyata.",
        2: "Saya lebih suka bekerja secara teori, mengembangkan ide-ide dan konsep baru."
    },
    {
        1: "Saya pintar dalam hal analisis dan logika dan ketika saya ragu, saya membiarkan diri saya dipandu oleh otak saya.",
        2: "Saya sangat sensitif dan emosional dan bila ragu, aku membiarkan diriku dibimbing oleh hati saya."
    },
    {
        1: "Saya orang yang fleksibel dan spontan, kadang-kadang agak kacau.",
        2: "Saya orang yang handal dan terorganisir dengan baik. Saya lebih memilih untuk merencanakan masa depan."
    },        
];

var result = {
    '2222': '1.html',
    '1222': '2.html',
    '1212': '3.html',
    '1211': '4.html',
}

document.querySelector('.mobile-menu-trigger').addEventListener('click', function() {
    // show responsive menu
    var menu = document.querySelector('.topmenu ul');
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
});