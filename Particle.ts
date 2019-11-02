import { ColorTheme } from './Themes';

class Particle {
    public x: number;
    public y: number;
    private velX: number;
    private velY: number;
    public s: number;
    private r: number;
    private g: number;
    private b: number;
    private color: string;

    constructor(colorTheme: ColorTheme) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.velX = Math.random() * 2 - 1;
        this.velY = Math.random() * 2 - 1;
        this.s = Math.floor(Math.random() * 9) + 1;
        const seedIndex = Math.floor(Math.random() * 5);

        this.r = Math.floor(Math.random() * 10) + (colorTheme[seedIndex][0] - 5);
        this.g = Math.floor(Math.random() * 10) + (colorTheme[seedIndex][1] - 5);
        this.b = Math.floor(Math.random() * 10) + (colorTheme[seedIndex][2] - 5);

        this.color = rgbToHex(this.r, this.g, this.b);
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;

        if (this.x <= 2) {
            this.x = this.s;
            this.velX *= -1;
        } else if (this.x >= window.innerWidth - this.s) {
            this.x = window.innerWidth - this.s;
            this.velX *= -1;
        } else if (this.y <= 2) {
            this.y = this.s;
            this.velY *= -1;
        } else if (this.y >= window.innerHeight - this.s) {
            this.y = window.innerHeight - this.s;
            this.velY *= -1;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.s, this.s);
    }

    line(context: CanvasRenderingContext2D, mouseX: number, mouseY: number){
        let grad= context.createLinearGradient(mouseX, mouseY, this.x, this.y);
        grad.addColorStop(0.3, 'black');
        grad.addColorStop(1, `rgb(${this.r}, ${this.g}, ${this.g})` );

        context.strokeStyle = grad;
        context.beginPath();
        context.moveTo(this.x, this.y); 
        context.lineTo(mouseX, mouseY);
        context.lineWidth = 0.2;
        //context.strokeStyle = this.color;
        context.stroke();
    }
}


function componentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export {
    Particle
}