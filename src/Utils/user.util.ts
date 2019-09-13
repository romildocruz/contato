export class UserUtil {
    static get(): any {
        const data = localStorage.getItem('contato.user');
        if (!data) return null;
        return JSON.parse(data);
    }

    static set(data) {
        localStorage.setItem('contato.user', JSON.stringify(data));
    }

    static clear() {
        localStorage.removeItem('contato.user');
    }
}