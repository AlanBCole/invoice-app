import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { toggleForm, textInputMsg, saveTaskMsg, MSGS } from '../update';


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
            // onclick: () => dispatch(saveTaskMsg(false)),
            },
            'Save',
        ),
        button(
            {
            className: 'f3 pv2 ph3 bg-light-gray bn dim',
            type: 'button',
            onclick: () => dispatch(toggleForm(false)),
            },
            'Cancel',
        ),
    ]);
}

export function addInvoiceTaskForm(dispatch, model) {
    const { taskTitle, taskPrice } = model;
    return form(
        {
            onsubmit: e => {
                e.preventDefault();
                dispatch(saveTaskMsg);
            }
        },
        [
            formFieldSet(
                'new task', 
                taskTitle, 
                e => dispatch(textInputMsg(e.target.value, MSGS.TASK_TITLE_INPUT))
            ),
            formFieldSet(
                'price', 
                taskPrice, 
                e => dispatch(textInputMsg(e.target.value, MSGS.TASK_PRICE_INPUT))
            ),
            buttonSet(dispatch),
        ]
    )
}