import { initModel } from './Models';
import createElement from 'virtual-dom/create-element';
import invoiceTable from './views/invoice-table.view';

const app = document.getElementById('app');
let invoice = invoiceTable('a function to go here', initModel.tasks)
const view = createElement(invoice);
app.appendChild(view);

console.log(view);

// const titleDiv = document.createElement('div');

// const title = document.createElement('h1');
// title.innerText = "Invoice";
// const client = document.createElement('h3');
// title.innerText = initModel.client.name;
// titleDiv.appendChild(title);
// titleDiv.appendChild(client);

// //task list
// const taskList = document.createElement('ul');

// for (let i = 0; i < initModel.tasks.length; i++) {
//     const taskLi = document.createElement('li');
//     const taskDesc = document.createElement('p');
//     const price = document.createElement('p');

//     taskDesc.innerText = initModel.tasks[i].service;
//     taskLi.appendChild(taskDesc);

//     price.innerText = `$${initModel.tasks[i].price}.00`;
//     taskLi.appendChild(price);
//     taskList.appendChild(taskLi);
// }

// const invoiceTotalLabel = document.createElement('h1');

// const invoiceTotal = initModel.tasks.map((service)=> service.price).reduce((acc, price) => acc + price);
// invoiceTotalLabel.innerText = "Invoice Total: $" + invoiceTotal + ".00";

// app.appendChild(titleDiv);
// app.appendChild(taskList);
// app.appendChild(invoiceTotalLabel);