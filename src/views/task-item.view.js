import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import { cell } from './cell.view';

const { 
    table,
    thead,
    tbody,
    tr,
    th,
    td,
    i,
} = hh(h);

export function taskRow(functionCall, className, task) {
    return tr({ className }, [
        cell(td, 'pa2 tl w-80', task.service),
        cell(td, 'pa2 tr w-15', '$' + task.price),
        cell(td, 'pa2 w-5', i({ 
            className: 'fas fa-info pa2' 
            })
        )
    ])
}