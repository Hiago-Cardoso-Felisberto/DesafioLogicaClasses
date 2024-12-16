class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        switch(this.tipo.toLowerCase()){
            case "mago" :
                console.log(`O heroi ${this.nome} do tipo ${this.tipo} atacou usando magia`);
                break;

            case "guerreiro" :
                console.log(`O heroi ${this.nome} do tipo ${this.tipo} atacou usando a espada`);
                break;

            case "monge" :
                console.log(`O heroi ${this.nome} do tipo ${this.tipo} atacou usando artes marciais`);
                break;

            case "ninja" :
                console.log(`O heroi ${this.nome} do tipo ${this.tipo} atacou usando shurikens`);
                break;
        }
        }
}

let FuturoHeroi = new Heroi("Batman", "20", "MAGO");

FuturoHeroi.atacar()