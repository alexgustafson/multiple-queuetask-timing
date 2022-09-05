import {bindable, PLATFORM} from "aurelia";

export class ComponentThree {
    @bindable() text: string;
    displayText: string;

    attached() {
        this.displayText = "";
        console.log(this.text);
        const task = PLATFORM.taskQueue.queueTask(() => {
            if (this.text.length > this.displayText.length) {
                this.displayText += this.text[this.displayText.length];
            }
        }, { delay: 1200, persistent: true /* runs until canceled */ });
        
    }
}