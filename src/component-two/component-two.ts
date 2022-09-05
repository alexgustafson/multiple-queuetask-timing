import {bindable, PLATFORM} from "aurelia";

export class ComponentTwo {
    @bindable() text: string;
    displayText: string;

    attached() {
        this.displayText = "";
        console.log(this.text);
        const task = PLATFORM.taskQueue.queueTask(() => {
            if (this.text.length > this.displayText.length) {
                this.displayText += this.text[this.displayText.length];
            }
        }, { delay: 500, persistent: true /* runs until canceled */ });
        
    }
}