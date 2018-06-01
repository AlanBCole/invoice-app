import { initModel } from './Models';
import createElement from 'virtual-dom/create-element';
import invoiceTable from './views/invoice-table.view';

const app = document.getElementById('app');
let invoice = invoiceTable('a function to go here', initModel.tasks)
const view = createElement(invoice);
app.appendChild(view);

console.log(view);