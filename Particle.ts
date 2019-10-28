class Particle {
    public x: number;
    public y: number;
    private velX: number;
    private velY: number;
    private r: number;
    private color: string;

    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.velX = Math.random() * 2 - 1;
        this.velY = Math.random() * 2 - 1;
        this.r = 3;

        this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;

        if (this.x <= 2) {
            this.x = this.r;
            this.velX *= -1;
        } else if (this.x >= window.innerWidth - this.r) {
            this.x = window.innerWidth - this.r;
            this.velX *= -1;
        } else if (this.y <= 2) {
            this.y = this.r;
            this.velY *= -1;
        } else if (this.y >= window.innerHeight - this.r) {
            this.y = window.innerHeight - this.r;
            this.velY *= -1;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.r, this.r);
    }
}

export {
    Particle
}