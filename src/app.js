import express from 'express';
import path from 'path';

const app = express();
/**
 * Configuração das páginas
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Configuração dos recursos estáticos (imagens, fontes, estilos)
 */

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Criando a rota da página inicial
 */

app.get('/', (req, res) => res.render('index'));
/**
 * Criando a rota da página de clientes
 */
app.get('/clientes', (req, res) => res.render('clientes'));


export default app;