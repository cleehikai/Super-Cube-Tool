/*

MIT License

Copyright (c) 2017-2021 Tao Yu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

/*
Slight modifications to the file are from Caleb Lee 2025. 
*/

var defaultKeymaps = [
    [new KeyCombo("KeyI"), "R"],
    [new KeyCombo("KeyK") , "R'"],
    [new KeyCombo("KeyJ") , "U"],
    [new KeyCombo("KeyF") , "U'"],
    [new KeyCombo("KeyH") , "F"],
    [new KeyCombo("KeyG") , "F'"],
    [new KeyCombo("KeyW") , "B"],
    [new KeyCombo("KeyO") , "B'"],
    [new KeyCombo("KeyD") , "L"],
    [new KeyCombo("KeyE") , "L'"],
    [new KeyCombo("KeyS") , "D"],
    [new KeyCombo("KeyL") , "D'"],
    [new KeyCombo("KeyU") , "r"],
    [new KeyCombo("KeyM") , "r'"],
    [new KeyCombo("KeyV") , "l"],
    [new KeyCombo("KeyR") , "l'"],
    [new KeyCombo("Digit5") , "M"],    // Caleb
    [new KeyCombo("Digit6") , "M"],    // Caleb
    [new KeyCombo("Period") , "M'"],    // Caleb
    [new KeyCombo("KeyX") , "M'"],    // Caleb
    [new KeyCombo("KeyT") , "x"],
    [new KeyCombo("KeyY") , "x"],    // Caleb
    [new KeyCombo("KeyN") , "x'"],
    [new KeyCombo("KeyB") , "x'"],    // Caleb
    [new KeyCombo("Semicolon") , "y"],
    [new KeyCombo("KeyA") , "y'"],
    [new KeyCombo("KeyP") , "z"],
    [new KeyCombo("KeyQ") , "z'"],
    [new KeyCombo("Digit0"), "S"],    // Caleb
    [new KeyCombo("Digit1"), "S'"],    // Caleb
    [new KeyCombo("Digit2"), "E"],    // Caleb
    [new KeyCombo("Digit9"), "E'"],    // Caleb
    [new KeyCombo("KeyZ") , "d"],    // Caleb
    [new KeyCombo("Slash") , "d'"],    //Caleb
    [new KeyCombo("Comma") , "u"],    // Caleb
    [new KeyCombo("KeyC") , "u'"]];    // Caleb

function getKeyMaps() {
    if (localStorage.getItem("keymaps") === null) {
        localStorage.setItem("keymaps", JSON.stringify(defaultKeymaps));
    }
    let km = JSON.parse(localStorage.getItem("keymaps"));
    // turn all objects into KeyCombo objects
    for (var i = 0; i < km.length; i++) {
        let kc = new KeyCombo(""); // ghost object
        Object.assign(kc, km[i][0]);
        km[i][0] = kc;
    }
    return km;
}
