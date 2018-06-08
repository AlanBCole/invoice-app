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
        p({ className: 'mt0' }, model.invoiceDate),
    ])
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

function totalRow(tasks) {
    const total = '$' + tasks.map((task) => task.price).reduce((acc, price) => acc + price);

    return tr({ className: 'b bt' }, [
        cell(td, 'pa2 tr w-80', 'Total:'),
        cell(td, 'pa2 tr w-15', total),
        cell(td, 'w-15', ''),
      ]);
}

function invoiceBody(functionCall, className, tasks) {
    const taskRows = tasks.map((task) => taskRow(functionCall, '', task));
    const rowsWithTotal = [ ...taskRows, totalRow(tasks)]

    return table({ className }, [
        tableHeader,
        tbody({}, rowsWithTotal),
    ])
}

function fabButton(functionCall, icon) {
    return button({ 
        className: 'mdc-fab material-icons app-fab--absolute',
        onclick: functionCall
    }, i({ className: 'mdc-fab__icon material-icons' }, icon));
}

function invoice(functionCall, model) {
    // console.log(functionCall);
    // console.log(model);
    return div([
            invoiceTitle(model),
            invoiceBody(functionCall, 'w-100', model.tasks),
            fabButton(() => console.log('fab clicked'), 'add')
        ])
        
}
export default invoice;