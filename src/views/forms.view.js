import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const {
    div,
    form,
    input,
    label,
    button
} = hh(h);

function formFieldSet(labelText, inputText, onInputFunc) {
    return div(
        [
            label({ className: 'db mb1' }, labelText),
            input({
                className: 'pa2 input-reset ba w-100 mb2',
                type: 'text',
                value: inputText,
                oninput: onInputFunc,
            }),
        ]
    );
}

function buttonSet(dispatch) {
    return div([
        button(
            {
            className: 'f3 pv2 ph3 bg-blue white bn mr2 dim',
            type: 'submit',
            onclick: () => dispatch(false),
            },
            'Save',
        ),
        button(
            {
            className: 'f3 pv2 ph3 bg-light-gray bn dim',
            type: 'button',
            onclick: () => dispatch(false),
            },
            'Cancel',
        ),
    ]);
}

export function addInvoiceTaskForm(dispatch, model) {
    return form(
        {
            onsubmit: e => {
                e.preventDefault();
                dispatch(false);
            }
        },
        [
            formFieldSet(
                'new task', 
                '...', 
                e => dispatch(taskInputMsg(e.target.value))
            ),
            formFieldSet(
                'price', 
                '$', 
                e => dispatch(priceInputMsg(e.target.value))
            ),
            buttonSet(dispatch),
        ]
    )
}