// the function that generates random number between start & and
function randomInt(start, end) {
    return start + Math.floor(Math.random() * (end - start));
}
// main function that generates the password randomly using numbers , alphabet and special characters 
function generatePassword() {
    var password = '';
    var numbers = '0123456789';
    var alphabet = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ';
    var specials = '#.!?;,&[]';
    var selection = numbers + alphabet + specials;
    for (var i = 0; i < 16; i++) {
        var random_selection_int = randomInt(0, selection.length);
        var random_selection = selection[random_selection_int];
        password += random_selection;
    }
    return password;
}
// this is the function that will change the id(pass) in html with the password generated
function changeInnerhtml() {
    var password = generatePassword();
    document.getElementById('password').innerHTML = password;
}
