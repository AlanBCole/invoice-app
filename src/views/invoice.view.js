import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

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

function taskRow(functionCall, className, task) {
    return tr({ className }, [
        cell(td, 'pa2 tl w-79 f5', task.service),
        cell(td, 'pa2 tr w-15 f5', '$' + task.price),
        cell(td, 'pa2 w-3', i({ 
            className: 'fas fa-info-circle f6' 
            })
        ),
        cell(td, 'pa2 w-3', i({ 
            className: 'fas fa-trash f6' 
            })
        )
    ])
}

function invoiceBody(functionCall, className, tasks) {
    const taskRows = tasks.map((task) => taskRow(functionCall, '', task));
    // const rowsWithTotal = [ ...taskRows, totalRow(tasks)];

    return table({ className }, [
        tableHeader,
        tbody({}, taskRows),
    ]);
}

function fabButton(functionCall, icon) {
    return button({ 
        className: 'mdc-fab material-icons',
        onclick: functionCall
    }, i({ className: 'mdc-fab__icon material-icons' }, icon));
}

function totalRow(addTask, tasks, addIcon) {
    const total = '$' + tasks.map((task) => task.price).reduce((acc, price) => acc + price);

    return tr({ className: 'b total-row' }, [
        cell(td, 'pa2 tl w-15', 'Total:'),
        cell(td, 'pa2 tl w-75', total),
        cell(td, 'w-20', fabButton(addTask, addIcon)),
      ]);
}

function invoice(functionCall, model) {
    const { tasks } = model;
    // console.log(functionCall);
    // console.log(model);
    return div({ className: 'invoice' }, [
            invoiceTitle(model),
            invoiceBody(functionCall, 'w-100', tasks),
            totalRow(() => console.log('fab clicked'), tasks, 'add')
        ]);
        
}
export default invoice;