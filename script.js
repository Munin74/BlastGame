class Board {

    constructor(h,w){
        this.cells=[];
        this.height=h;
        this.width=w;
    }

    OnClickBoard(event){
        
    };

    Init(){
        for (let y=0; y<this.height; y++){
            this.cells[y]=[]
            for(let x=0; x<this.width; x++) {
                let gameBoard=document.querySelector('.game-board');
                let ball=new Ball(x,y);
                ball.Init();
                this.cells[y][x]=ball;
                ball.OnClick=this.OnClickBoard;
                gameBoard.appendChild(ball.cell);
            }
        }
    }
    GetRemoveCells() {
       
    }
    IsFinished(){

    }

};

class Ball {
    constructor(x, y) {
        this.X=x;
        this.Y=y;
        this.cell;
        this.color;
    }

    Init(){
        let sender = this;
        this.cell=document.createElement('div');
        this.cell.classList.add('tile');
        this.SetColor();
        this.cell.addEventListener('click',function(event) {
            sender.OnClick(sender);
        });
    }

    OnClick(event){

    };

    SetColor() {
        this.color=GetColor();
        this.cell.classList.add(this.color);
    }
};

function GetColor(){
    let Color = ['red','yellow','purple','green','blue'];
    return Color[Math.floor(Math.random() * Color.length)];
}

let gameBoard=document.querySelector('.game-board');

let board=new Board(9,9);

board.Init();

