var table = document.querySelector("#result");
function minhaFuncao(codigo,tecla) {
    let tr = document.createElement('tr');
    tr.innerHTML += "<tr><td>"+ tecla + "</td><td>"+ codigo+"</td></tr><br>";    
    table.appendChild(tr);
}

document.addEventListener('keydown', function(e) {
    e = window.event;
    var code = e.keyCode;
    var key = e.key;
    minhaFuncao(code,key);
});