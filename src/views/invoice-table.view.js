import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import { taskRow } from './task-item.view';
import { cell } from './cell.view';

const { table, thead, tbody, th, tr, td, div, h1, h3 } = hh(h);

function titleClient(model) {
    return div([
        h1(model.client),
        h3(model.invoiceDate)
    ])
}
const invoiceHeader = thead([
    tr([
        cell(th, 'pa2 tl w-80 bb', 'task'),
        cell(th, 'pa2 tr w-15 bb', 'amount'),
        cell(th, 'w-5 bb', ''),
    ])
])

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

    return tbody({ className }, rowsWithTotal);
}

function invoiceTable(functionCall, tasks) {
    console.log(functionCall);

    return table({className: 'w-100'}, [
        invoiceHeader,
        invoiceBody(functionCall, '', tasks)
    ])
}

export default invoiceTable;