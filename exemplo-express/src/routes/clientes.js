import { Router } from 'express';

import ClienteController from '../controllers/ClienteController';

const router = Router();
const clienteController = new ClienteController();

const QTDE_POR_PAGINA = 10;
const calcularQuantidadePaginas = () => Math.ceil(clienteController.quantidade() / QTDE_POR_PAGINA);
let paginaAtual = 1;

/**
 * Criando a rota da página de clientes e para pegar clientes
 */
router.get('/', (req, res) => {
    res.redirect('/clientes/1');
});

/**
 * Criando a rota da página de clientes com páginação
 */
router.get('/:pagina', (req, res) => {
    const pagina = req.params.pagina;
    const qtdePaginas = calcularQuantidadePaginas();
    paginaAtual = pagina >= 1 && pagina <= calcularQuantidadePaginas() ? pagina : paginaAtual;
    const indiceInicial = (paginaAtual - 1) * QTDE_POR_PAGINA;
    const clientes = clienteController.recuperarTodosComPaginacao(indiceInicial, QTDE_POR_PAGINA);
    res.render('clientes', {
        clientes,
        paginaAtual,
        ultimaPagina: qtdePaginas

    });
});

/**
 * Criando a rota para salvar um novo cliente
 */

router.post('/', (req, res) => {
    /**
     * Refatorar código, pois o req.body só vai chegar com o nome e email
     * O req.body é um objeto de cliente
     * const nome = req.body.nome;
    const email = req.body.email;
    const cliente = { nome, email };
    clientes.push(cliente);
    */
    const cliente = req.body;
    clienteController.salvar(cliente);
    res.redirect('/clientes/1');

});

export default router;