const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },
    eventHandlers: {
        oninput: null,
        onclose: null
    },
    properties: {
        value: "",
        capsLock: false
    },
    init() {
        // Create elements.main & elements.keysContainer (.keyboard & .keyboard__keys):
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Add classes to elements.main & elements.container:
        this.elements.main.classList.add("keyboard", "1keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");

        // Add keyContainer to main & main to DOM:
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },
    _createKeys() {

    },
    _triggerEvent(handlerName) {

    },
    _toggleCapsLock() {

    },
    openKeyboard(initialValue, oninput, onclose) {

    },
    closeKeyboard() {

    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
    Keyboard.openKeyboard();
});