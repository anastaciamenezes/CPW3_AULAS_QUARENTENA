import faker from 'faker';

export default class ClienteController {

    constructor() {
        this.clientes = [];
        const QTDE_CLIENTES = 95;
        for (let i = 0; i < QTDE_CLIENTES; i++) {
            const cliente = {
                nome: faker.name.findName(),
                email: faker.internet.email()
            };

            this.clientes.push(cliente);
        }
    }
    recuperarTodosComPaginacao(inicio, quantidadePorPagina) {
        return this.clientes.slice(inicio, inicio + quantidadePorPagina);
    }

    salvar(cliente) {
        this.clientes.push(cliente);
    }

    quantidade() {
        return this.clientes.length;
    }
}