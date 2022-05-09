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
        // Create a fragment (container for all the keys):
        const fragment = document.createDocumentFragment();

        // Create an array with keys names:
        const keyLayout = [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", 
            "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "delete",
            "capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
            "left shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "arrow up", "right shift",
            "ctrl", "hide", "windows", "alt", "space", "alt", "ctrl", "arrow back", "arrow down", "arrow forward"
        ];

        // Create HTML for an icon:
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        // Create keys:
        keyLayout.forEach(key => {
            // Create button for each ey element:
            const keyElement = document.createElement("button");

            // Add line break boolean constant to make key rows: if it is true we'll add line break:
            const insertLineBreak = ["backspace", "delete", "enter", "right shift"].indexOf(key) !== -1;

            // Add attributes & classes for keys:
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            // Create specific keys (with non-standard classes, icons instead of text or specific functions):
            switch (key) {
                case "backspace":
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "capslock":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activated");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;
                
                case "enter":
                    keyElement.innerHTML = createIconHTML("keyboard_return");
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });
                        
                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--wide-plus");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "hide":
                    keyElement.classList.add("keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("keyboard_hide");
        
                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });
                            
                    break;
            
                case "left shift":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("vertical_align_top");
            
                    break;
                
                case "right shift":
                    keyElement.innerHTML = createIconHTML("vertical_align_top");
                
                    break;

                case "windows":
                    keyElement.innerHTML = createIconHTML("grid_view");
        
                    break;

                case "tab":
                    keyElement.innerHTML = createIconHTML("keyboard_tab");
    
                    break;

                case "arrow back":
                    keyElement.innerHTML = createIconHTML("arrow_left");

                    break;
                
                case "arrow down":
                    keyElement.innerHTML = createIconHTML("arrow_drop_down");
    
                    break;
                
                case "arrow forward":
                    keyElement.innerHTML = createIconHTML("arrow_right");
        
                    break;
                
                case "arrow up":
                    keyElement.innerHTML = createIconHTML("arrow_drop_up");

                    break;
                
                default: 
                    keyElement.textContent = key.toLowerCase();
    
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });
                        
                    break;
            }

            // Add each key to fragment:
            fragment.appendChild(keyElement);

            // Add line break to fragment if insertLineBreak = true:
            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
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