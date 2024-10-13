// document.getElementById('showFormBtn').addEventListener('click', function() {
//     var formContainer = document.getElementById('formContainer');
//     if (formContainer.classList.contains('hidden')) {
//         formContainer.classList.remove('hidden');
//     } else {
//         formContainer.classList.add('hidden');
//     }
// });


document.getElementById('showFormBtn').addEventListener('click', function() {
    var overlay = document.getElementById('overlay');

    if (overlay.classList.contains('show')) {
        overlay.classList.remove('show'); 
    } else {
        overlay.classList.add('show'); 
    }
});
