var variable = false;
function ok() {
    if(variable) {
        document.getElementById('champ').innerHTML = 'Do not type here';
        variable = false;
    }
    else {
        document.getElementById('champ').innerHTML = 'Type here';
        variable = true;
    }
}
