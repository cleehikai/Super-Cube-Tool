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

class KeyCombo {
    constructor(code, modifiers={}) {
        this.shift = modifiers.shift || false;
        this.ctrl = modifiers.ctrl || false;
        this.alt = modifiers.alt || false;

        this.code = code;
    }

    matches(evt) {
        return this.code == evt.code && evt.shiftKey == this.shift && evt.altKey == this.alt && evt.ctrlKey == this.ctrl;
    }

    toString() {
        let out = this.code.replace("Key", "");
        if (this.shift) {
            out = "shift-" + out;
        }
        if (this.alt) {
            out = "alt-" + out;
        }
        if (this.ctrl) {
            out = "ctrl-" + out;
        }
        return out;
    }
}

function keyEventToKeyCombo(evt, force) {
    let code = evt.code;
    if (evt.key === "Shift" || evt.key === "Control" || evt.key === "Meta" || evt.key == "Alt") {
        if (force) {
            code = "";
        } else {
            return false;
        }
    }
    return new KeyCombo(code, {"shift": evt.shiftKey, "alt": evt.altKey, "ctrl": evt.ctrlKey});
}

class Listener {
    constructor() {
        let self = this;
        this.combos = []; // [[combo, fn]]
        document.body.addEventListener("keydown", e => self.keydown(e));
    }

    keydown(e) {
        if (e.target !== document.body) { return; }
        for (let [combo, fn] of this.combos) {
            if (combo.matches(e)) {
                fn(e);
                e.preventDefault();
                return true;
            }
        }
        return false;
    }

    register(combo, action) {
        this.combos.push([combo, action]);
    }

    reset() {
        this.combos = [];
    }
}
