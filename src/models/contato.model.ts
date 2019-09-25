export class Contato {

    constructor(
        public id: number = 0,
        public nome: string = "",
        public email: string = "",
        public CPF: string = "",
        public telefone: string = "",
        public image: string = "",
        public cep: string="",
        public logradouro: string="",
        public complemento: string="",
        public bairro: string="",
        public localidade: string="",
        public uf: string="",
        public unidade: string="",
        public ibge: string="",
        public gia: string=""
    ) {

    }
}
