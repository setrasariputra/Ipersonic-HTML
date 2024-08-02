// for(var i = 1; i <= 10; i++) {
//     alert(i)
// }

// var myName = 'Wisnu Kuncoro Ardianto'; // tipedata string
// var myArray = ['Wisnu', 'Budi', 'Agus']; // tipedata array
// var myScore = 87; // tipedata angka, number, integer

// function showAlert()
// {
//     alert('tes Alert');
// }
// showAlert()

function mobileMenuTrigger()
{
    document.querySelector('.mobile-menu-trigger').addEventListener('click', function() {
        // show responsive menu
        var menu = document.querySelector('.topmenu ul');
        if(menu.style.display === 'block') {
            menu.style.display = 'none';
        }else{
            menu.style.display = 'block';
        }
    });
}
mobileMenuTrigger();

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
    }        
];

var result = {
    '2222': '1.html',
    '1222': '2.html',
    '1212': '3.html',
    '1211': '4.html',
    '1221': '5.html',
    '1121': '6.html',
    '1122': '7.html',
    '1112': '8.html',
    '1111': '9.html',
    '2111': '10.html',
    '2121': '11.html',
    '2122': '12.html',
    '2112': '13.html',
    '2212': '14.html',
    '2211': '15.html',
    '2221': '16.html',
}

function showQuestion(totalAnswer, q_options)
{
    // target div class yang akan ditampilkan konten quiz
    var displayQOptions = document.querySelector('.display_q_options');
    
    // login display quiz
    var quizHTML = '<div class="quiz-content">';
    quizHTML += '<ul class="quiz-title">';
    // looping langkah sesuai jumlah total pertanyaan
    for(var x = 1; x <= q_options.length; x++) {
        // logika untuk mengecek berapa yg sudah dijawab
        if(x == totalAnswer + 1) {
            quizHTML += '<li class="active">Langkah '+x+'</li>';    
        }else{
            quizHTML += '<li>Langkah '+x+'</li>';
        }  
    }
    quizHTML += '</ul>';
    quizHTML += '</div>';

    // target div class isi dengan data quizHTML
    displayQOptions.innerHTML = quizHTML;
}
var totalAnswer = 0;
showQuestion(totalAnswer, q_options)


/*
const q_options = [
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
    '1221': '5.html',
    '1121': '6.html',
    '1122': '7.html',
    '1112': '8.html',
    '1111': '9.html',
    '2111': '10.html',
    '2121': '11.html',
    '2122': '12.html',
    '2112': '13.html',
    '2212': '14.html',
    '2211': '15.html',
    '2221': '16.html',
}

// var sampleInner = document.querySelector('.sample-inner');
// sampleInner.innerHTML = 'Text from JS';

var answer = "";

function showQuestion(totalAnswer, q_options)
{
    var displayQOptions = document.querySelector('.display_q_options');

    var quizHTML = '<div class="quiz-content">';
    quizHTML += '<ul class="quiz-title">';
    // looping langkah 1 sampai langkah 4
    for(var x = 1; x <= q_options.length; x++) {
        if(x == totalAnswer + 1) {
            quizHTML += '<li class="active">Langkah '+x+'</li>';
        }else{
            quizHTML += '<li>Langkah '+x+'</li>';
        }
    }
    quizHTML += '</ul>';
    quizHTML += '<div class="quiz-options">';
    // lopping pilihan kiri atau pilihan kanan
    for(var x = 1; x <= 2; x++) {
        quizHTML += '<div class="quiz-selected">';
        quizHTML += '<p>'+q_options[totalAnswer][x]+'</p>';
        quizHTML += '<a href="#" class="btn btn-orange choose-answer" data="'+x+'"><i class="fa fa-play" aria-hidden="true" style="font-size: 12px;"></i>&nbsp;&nbsp;Hal ini berlaku untuk saya.</a>';
        quizHTML += '</div>';
    }
    quizHTML += '</div>';
    quizHTML += '</div>';

    displayQOptions.innerHTML = quizHTML;

    var answerButtons = document.querySelectorAll(".choose-answer");
    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            var valueButton = button.getAttribute("data");
            answer = answer + valueButton;

            totalAnswer = answer.length;
            if(totalAnswer < q_options.length) {
                showQuestion(totalAnswer, q_options)
            }else{
                displayQOptions.innerHTML = '<h3 class="title-medium-light">Terima kasih telah mengisi kuesioner ini!</h3>';
                
                var resultPage = result[answer];
                displayQOptions.innerHTML += "<br /><br />";
                displayQOptions.innerHTML += "<a href='"+resultPage+"' class='btn btn-orange'>Lihat Hasilnya &#9658;</a>";                
            }
        });
    });    
}

showQuestion(answer.length, q_options)*/