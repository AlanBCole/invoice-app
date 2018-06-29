import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { addInvoiceTaskForm } from './forms.view';

const { 
    table,
    thead,
    tbody,
    tr,
    th,
    td,
    i,
    div,
    p,
    h2,
    h4,
    button,
} = hh(h);

function invoiceTitle(model) {
    return div([
        h4('Invoice'),
        h2({ className: 'mt0 mb0' }, model.client.name),
        p({ className: 'mt0' }, Date(model.invoiceDate)),
    ]);
}

function cell(tagName, className, valueToDisplay) {
    return tagName({ className }, valueToDisplay);
}

const tableHeader = thead([
    tr([
        cell(th, 'pa2 tl w-79 bb', 'task'),
        cell(th, 'pa2 tr w-15 bb', 'amount'),
        cell(th, 'w-3', ''),
        cell(th, 'w-3', ''),
    ])
])

function taskRow(dispatch, className, task) {
    return tr({ className }, [
        cell(td, 'pa2 tl w-79 f5', task.task),
        cell(td, 'pa2 tr w-15 f5', '$' + task.price),
        cell(td, 'pa2 w-3', i({ 
            className: 'fas fa-info-circle f6',
            onclick: () => dispatch('edit clicked')
            })
        ),
        cell(td, 'pa2 w-3', i({ 
            className: 'fas fa-trash f6',
            onclick: () => dispatch('trash clicked')
            })
        )
    ])
}

function invoiceBody(dispatch, className, tasks) {
    const taskRows = tasks.map((task) => taskRow(dispatch, '', task));
    // const rowsWithTotal = [ ...taskRows, totalRow(tasks)];

    return table({ className }, [
        tableHeader,
        tbody({}, taskRows),
    ]);
}

function fabButton(dispatch, icon) {
    return button({ 
        className: 'mdc-fab material-icons',
        onclick: () => dispatch(true),
    }, i({ className: 'mdc-fab__icon material-icons' }, icon));
}

function totalRow(dispatch, tasks, addIcon) {
    const total = '$' + tasks.map((task) => task.price).reduce((acc, price) => acc + price);

    return tr({ className: 'b total-row' }, [
        cell(td, 'pa2 tl w-15', 'Total:'),
        cell(td, 'pa2 tl w-75', total),
        cell(td, 'w-20', fabButton(dispatch, addIcon)),
      ]);
}

function invoice(dispatch, model) {
    const { tasks, showForm, whichView } = model;

    if (!showForm && whichView === 'INVOICE_SINGLE') {
        return div({ className: 'invoice' }, [
            invoiceTitle(model),
            invoiceBody(dispatch, 'w-100', tasks),
            totalRow(dispatch, tasks, 'add')
        ]);     
    } else if (showForm && whichView === 'INVOICE_SINGLE') {
        return div({ className: 'add-task' }, [
            invoiceTitle(model),
            addInvoiceTaskForm(dispatch, model)
        ]
        )
    }
        
}
export default invoice;