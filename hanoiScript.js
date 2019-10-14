let temp = null;
let movs = 0;

/*function show() {
    console.log('Torre 1: ' + tower1.data);
    console.log('Torre 2: ' + tower2.data);
    console.log('Torre 3: ' + tower3.data);
    console.log('Afuera: ' + temp);
}*/


class Tower {
    constructor(id, data){
        this.id = id
        this.data = data;
    }

    pop(){
        if(temp === null){
            temp = this.data.pop();
        }/*else{
            document.getElementById('textarea').innerHTML = 'Ya hay una pieza afuera \n Pieza: ' + temp;
        }*/
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    push(){
        if((this.peek() == undefined || this.peek() > temp) && temp != null){
            this.data.push(temp);
            temp = null;
            document.getElementById('textarea').innerHTML = null;
        }else{
            document.getElementById('textarea').innerHTML = 'No se puede colocar ahí \nPieza: ' + temp;
        }
    }

    shift(tempTower){
        this.pop();
        tempTower.push();
        //show();
    }

    update(){
        document.getElementById(this.id).innerHTML = this.data;
    }

    action(){
        if(temp == null){
            this.pop();
            document.getElementById(this.id).innerHTML = this.data;
            document.getElementById('textarea').innerHTML = 'Pieza: ' + temp;
        }else{
            this.push();
            document.getElementById(this.id).innerHTML = this.data;
        }
    }
}

let tower1 = new Tower('tower1', [ 3, 2, 1 ]);
let tower2 = new Tower('tower2', []);
let tower3 = new Tower('tower3', []);