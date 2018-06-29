import createElement from 'virtual-dom/create-element';
import { h, diff, patch } from 'virtual-dom';
import { initModel } from './Model';
import invoice from './views/invoice.view';
import update from './update';

const appNode = document.getElementById('app');
// let invoiceView = invoice('a function to go here', initModel)
// const view = createElement(invoiceView);
// appNode.appendChild(view);
app(initModel, update, invoice, appNode);

function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = invoice(dispatch, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);
    
    function dispatch(msg) {
      model = update(msg, model);
      const updatedView = invoice(dispatch, model);
      const patches = diff(currentView, updatedView);
      rootNode = patch(rootNode, patches);
      currentView = updatedView;
    }
  }