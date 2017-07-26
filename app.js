function randomInt(start, end) {
    return start + Math.floor(Math.random() * (end - start));
}
function generate_alphabet() {
    var tmp = [];
    for (var i = 65; i < 123; i++) {
        if (i >= 91 && i <= 96) { }
        else {
            tmp.push(String.fromCharCode(i));
        }
    }
    return tmp;
}
function generate_password() {
    var pass;
    pass = "";
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var special_chars = ['#', '.', '!', '?', ';', ',', '&', '[', ']'];
    var alphabet = generate_alphabet();
    var selection = ['numbers', 'special_chars', 'alphabet'];
    for (var i = 0; i < 16; i++) {
        var random_selection_int = randomInt(0, 3);
        var random_selection = selection[random_selection_int];
        var random_numbers = randomInt(0, numbers.length);
        var random_alphabet = randomInt(0, alphabet.length);
        var random_special_chars = randomInt(0, special_chars.length);
        if (random_selection == "numbers") {
            pass = pass + String(numbers[random_numbers]);
        }
        else if (random_selection == "alphabet") {
            pass = pass + alphabet[random_alphabet];
        }
        else {
            pass = pass + special_chars[random_special_chars];
        }
    }
    return pass;
}
