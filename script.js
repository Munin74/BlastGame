class Board {

    constructor(h,w){
        this.cells=[];
        this.height=h;
        this.width=w;
        this.ClickBoard=this.OnClickBoard.bind(this);
        this.gameBoard=document.querySelector('.game-board');
    }

    OnClickBoard(ball){
        this.RemoveLeftBalls(ball);
        this.RemoveRightBalls(ball);
        this.cells[ball.y][ball.x].cell.classList.remove(ball.color);
    };

    Init(){
        for (let y=0; y<this.height; y++){
            this.cells[y]=[]
            for(let x=0; x<this.width; x++) {
                let ball=new Ball(x,y);
                ball.Init();
                this.cells[y][x]=ball;
                ball.OnClick=this.ClickBoard;
                this.gameBoard.appendChild(ball.cell);
            }
        }
    }
    RemoveLeftBalls(ball)
    {
        while(ball.x>=0 & this.cells[ball.y][ball.x-1].color==ball.color)
        {
            this.cells[ball.y][ball.x-1].cell.classList.remove(ball.color);
            ball.x--;
            
        }
    }

    RemoveRightBalls(ball)
    {
        let checkX=ball.x;
        let width=this.width;
        while(checkX<width-1 & this.cells[ball.y][checkX].color==ball.color) 
        {
            this.cells[ball.y][checkX+1].cell.classList.remove(ball.color);
            checkX++;
        }
    }
};

class Ball {
    constructor(x, y) {
        this.x=x;
        this.y=y;
    }

    Init(){
        let sender = this;
        this.cell=document.createElement('div');
        this.cell.classList.add('tile');
        this.SetColor(GetColor());
        this.cell.addEventListener('click',function(event) {
            sender.OnClick(sender);
        });
    }

    OnClick(event){
        
    };

    SetColor(color) {
        this.color=color;
        this.cell.classList.add(this.color);
    }
};

function GetColor(){
    let Color = ['red','yellow','purple','green','blue'];
    return Color[Math.floor(Math.random() * Color.length)];
}

let board=new Board(9,9);

board.Init();