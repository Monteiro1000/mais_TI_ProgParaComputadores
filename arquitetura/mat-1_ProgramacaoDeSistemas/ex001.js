class Imovel{
    constructor(tipo, quartos, banheiros, area, bairro){
        this.tipo = tipo;
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.area = area;
        this.bairro = bairro;
    }

    anuncio(){
        return `${this.tipo} com ${this.quartos} quartos, ${this.banheiros} banheiros e ${this.area}m² no bairro ${this.bairro},`
    }

    atendeCriterios(quartosMinimos, bairroDesejado){
        
        if(this.quartos == quartosMinimos && bairroDesejado == 'Atalaia'){
            return true
        } else {
            return false
        }
    }
}

//Casos de teste
let imovel1 = new Imovel("apartamento", 2, 1, 65, "Atalaia")
let imovel2 = new Imovel("casa", 3, 2, 120, "Jardins")

console.log(imovel1.anuncio())
console.log(imovel2.anuncio())

console.log(imovel1.atendeCriterios(2, "Atalaia"))
console.log(imovel1.atendeCriterios(3, "Atalaia"))
console.log(imovel2.atendeCriterios(2, "Jardins"))
console.log(imovel2.atendeCriterios(3, "Farolândia"))