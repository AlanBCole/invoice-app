import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { toggleView, MSGS } from '../update';
import titleView from './title.view';


const { 
    pre,
    table,
    thead,
    tbody,
    tr,
    th,
    td,
    i,
    div,
    p,
    h3,
    h4,
    button,
} = hh(h);


function cell(tagName, className, valueToDisplay) {
    return tagName({ className }, valueToDisplay);
}

const tableHeader = thead([
    tr([
        cell(th, 'pa2 tl w-80 bb', 'task'),
        cell(th, 'pa2 tr w-10 bb', 'amount'),
        cell(th, '', ''),
        cell(th, '', ''),
    ])
])

function taskRow(dispatch, className, task) {
    return tr({ className }, [
        cell(td, 'pa2 tl w-80 f5', task.taskTitle),
        cell(td, 'pa2 tr w-10 f5', '$' + task.taskPrice),
        cell(td, 'pa2', i({ 
            className: 'fas fa-info-circle f6',
            onclick: () => dispatch('edit clicked')
            })
        ),
        cell(td, 'pa2', i({ 
            className: 'fas fa-trash f6',
            onclick: () => dispatch('trash clicked')
            })
        )
    ])
}

function invoiceBody(dispatch, className, tasks) {
    console.log('# of tasks', tasks.length)
    if (tasks.length === 0) {
        return div({ className: 'mv-2 black-50' }, 'no tasks in this invoice')
    } else {
        const taskRows = tasks.map((task) => taskRow(dispatch, '', task));
        // const rowsWithTotal = [ ...taskRows, totalRow(tasks)];

        return table({ className }, [
            tableHeader,
            tbody({}, taskRows),
        ]);
    }
}

function fabButton(dispatch, icon) {
    return button({ 
        className: 'mdc-fab material-icons',
        onclick: () => dispatch(toggleView(MSGS.TASK_FORM)),
    }, i({ className: 'mdc-fab__icon material-icons' }, icon));
}

function totalRow(dispatch, tasks, addIcon) {
    let total = 0;
    
    if (tasks.length === 0) {
        total = 0;
    } else {
        total = tasks.map((task) => task.taskPrice).reduce((acc, price) => acc + price);
    }

    return tr({ className: 'b total-row' }, [
        cell(td, 'pt2 pl2 pb2 tr w-15', 'Total: $'),
        cell(td, 'pr2 pt2 pb2 tl w-45', total),
        cell(td, 'w-40 tr', '(send)'),
        fabButton(dispatch, addIcon),
      ]);
}

function invoiceView(dispatch, model) {
    const { showForm, whichView, invoice } = model;
    const { tasks } = invoice;
        return div({ className: 'invoice' }, [
            titleView(invoice),
            invoiceBody(dispatch, 'w-100', tasks),
            // pre(JSON.stringify(model, null, 2)),
            totalRow(dispatch, tasks, 'add'),
        ]);     
        
}
export default invoiceView;