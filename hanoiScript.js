let temp = null;

function show() {
    console.log('Torre 1: ' + tower1.data);
    console.log('Torre 2: ' + tower2.data);
    console.log('Torre 3: ' + tower3.data);
    console.log('Afuera: ' + temp);
}


class Tower {
    constructor(n){
        this.data = n;
    }

    pop(){
        if(temp === null){
            temp = this.data.pop();
        }else{
            console.log('Ya hay una pieza afuera');
        }
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    push(){
        if((this.peek() == undefined || this.peek() > temp) && temp != null){
            this.data.push(temp);
            temp = null;
        }else{
            console.log('No se puede colocar ahí');
        }
    }

    shift(tempTower){
        this.pop();
        tempTower.push();
        show();
    }
}

let tower1 = new Tower([ 3, 2, 1 ]);
let tower2 = new Tower([]);
let tower3 = new Tower([]);