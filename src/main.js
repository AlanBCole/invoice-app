import { initModel } from './Model';
import createElement from 'virtual-dom/create-element';
import invoice from './views/invoice.view';

const app = document.getElementById('app');
let invoiceView = invoice('a function to go here', initModel)
const view = createElement(invoiceView);
app.appendChild(view);

console.log(view);