import createElement from 'virtual-dom/create-element';
import { h, diff, patch } from 'virtual-dom';
import { initModel } from './Model';
import invoiceView from './views/invoice.view';
import taskFormView from './views/task-form.view';
import update from './update';
import { MSGS } from './update';

const appNode = document.getElementById('app');
// let invoiceView = invoice('a function to go here', initModel)
// const view = createElement(invoiceView);
// appNode.appendChild(view);
app(initModel, update, chooseView, appNode);

function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(dispatch, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);
    
    function dispatch(msg) {
      model = update(msg, model);
      const updatedView = view(dispatch, model);
      const patches = diff(currentView, updatedView);
      rootNode = patch(rootNode, patches);
      currentView = updatedView;
    }
  }

  function chooseView(dispatch, model) {
    const { whichView } = model;
    switch (whichView) {
      case MSGS.HOME:
        console.log('no home view yet');
        break;

      case MSGS.INVOICE:
        return invoiceView(dispatch, model);

      case MSGS.TASK_FORM:
        return taskFormView(dispatch, model);

      case MSGS.NEW_INVOICE_FORM:
        console.log('no new invoice view yet');
        break;
    }
  }