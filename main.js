class Enemy{


}

class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        window.addEventListener('resize', e => {
            console.log(e);
            this.resize(e.target.innerWidth, e.target.innerHeight);
        });
    }
    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
    }
}

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const cxt = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = new Game(canvas);
});