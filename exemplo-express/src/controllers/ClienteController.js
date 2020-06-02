export default class ClienteController {

    constructor() {
        this.clientes = [{
                nome: 'José da Silva',
                email: 'jose@email.com'
            },
            {
                nome: 'Maria dos Santos',
                email: 'maria@email.com'
            },
            {
                nome: 'Silvana Andrade',
                email: 'silvana@email.com'
            }
        ];

    }
    recuperarTodos() {
        return this.clientes;
    }

    salvar(cliente) {
        this.clientes.push(cliente);
    }
}