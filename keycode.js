var el = document.getElementById("result");
function minhaFuncao(codigo,tecla) {
    el.innerHTML += "[Key: "+ tecla + " | Code: "+ codigo+"]<br>";    
}

document.addEventListener('keydown', function(e) {
    e = window.event;
    var code = e.keyCode;
    var key = e.key;
    minhaFuncao(code,key);
});