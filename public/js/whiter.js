var div = document.getElementById('frase');
var textos = [  'criação de sites responsivos',
                'criação de sistemas web completos',
                'manutenção de sistes'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 100);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            setTimeout(() => {
                limpar(prox);
            }, 5000);
        });
    }
    prox(prox);
}
rodape(textos);