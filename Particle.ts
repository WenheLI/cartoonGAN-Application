class Particle {
    public x: number;
    public y: number;
    private velX: number;
    private velY: number;
    private s: number;
    private r: number;
    private g: number;
    private b: number;
    private color: string;

    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.velX = Math.random() * 2 - 1;
        this.velY = Math.random() * 2 - 1;
        this.s = Math.floor(Math.random() * 9) + 1;

        this.r = Math.floor(Math.random() * 70) + 100;
        this.g = Math.floor(Math.random() * 110) + 90;
        this.b = Math.floor(Math.random() * 25) + 230;

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