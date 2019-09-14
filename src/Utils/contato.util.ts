import { Contato } from 'src/models/contato.model';

export class contatoUtil {
    static save(contatos: Contato[]) {
        const data = JSON.stringify(contatos);
        localStorage.setItem('contatos', data)
    }
    static load(): Contato[] {
        const data = localStorage.getItem('contato');
        if (data)
            return JSON.parse(data);
        else
            return [];
    }
}