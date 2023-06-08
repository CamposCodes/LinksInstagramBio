const buttonSobre = document.getElementById('buttonSobre');
const conteudoSobre = document.getElementById('conteudoSobre');

// conteudoSobre.style.display = 'none';

buttonSobre.addEventListener('click', function () {
    if (conteudoSobre.style.display === 'none') {
        conteudoSobre.style.display = 'block';
    } else {
        conteudoSobre.style.display = 'none';
    }
});
