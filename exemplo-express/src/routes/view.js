import { Router } from 'express';

const router = Router();

let clientes = [{
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

//let clientes = [];


/**
 * Criando a rota da página inicial
 */
router.get('/', (req, res) => res.render('index'));

/**
 * Criando a rota da página de clientes
 */
router.get('/clientes', (req, res) => {
    res.render('clientes', { clientes });
});

/**
 * Criando a rota para salvar um novo cliente
 */
router.post('/clientes', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const cliente = { nome, email };
    clientes.push(cliente);
    res.redirect('/clientes');
});

export default router;