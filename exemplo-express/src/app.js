import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import rotasClientes from './routes/clientes';

const app = express();
/**
 * Configuração das páginas
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Configuração dos recursos estáticos
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Configuração do Body Parser
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Rotas de View
 */

//Criando a rota da página inicial
app.get('/', (req, res) => res.render('index'));

//Criando a rota de clientes
app.use('/clientes', rotasClientes);

export default app;