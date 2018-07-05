export const MSGS = {
    TOGGLE_VIEW: 'toggle-view',
    TASK_TITLE_INPUT: 'task-title',
    TASK_PRICE_INPUT: 'task-price',
    SAVE_TASK: 'save-task',
    HOME: 'home',
    INVOICE: 'invoice',
    TASK_FORM: 'task-form',
    NEW_INVOICE_FORM: 'new-invoice-form'
}

export function toggleView(whichView) {
    return {
        whichView,
        type: MSGS.TOGGLE_VIEW,
    }
}

export function textInputMsg(msg, type) {
    return { 
        type,
        textInput: msg,
    }
}

export const saveTaskMsg = { 
    type: MSGS.SAVE_TASK,
    whichView: MSGS.INVOICE 
};

function update(msg, model) {
    const { invoice } = model;
    const { whichView } = msg;
    switch (msg.type) {
        case MSGS.TOGGLE_VIEW :
            return { ...model, whichView }

        case MSGS.TASK_TITLE_INPUT:
            const taskTitle = msg.textInput;
            return { 
                ...model, 
                invoice: { ...invoice, taskTitle } 
            }

        case MSGS.TASK_PRICE_INPUT:
            let taskPrice = parseFloat(msg.textInput);

            return { 
                ...model, 
                invoice: { ...invoice, taskPrice } 
            }

        case MSGS.SAVE_TASK:
            return addTask(msg, model);

        default:
            return { ...model, whichView };
    }
}

function addTask(msg, model) {
    const { invoice } = model;
    const { whichView } = msg;
    const { taskTitle, taskPrice, nextTaskId } = invoice;
    const task = { id: nextTaskId, taskTitle, taskPrice };
    const tasks = [ ... invoice.tasks, task ];

    return {
        ...model,
        whichView,
        invoice: {
            ...invoice,
            tasks,
            nextTaskId: nextTaskId + 1,
            taskTitle: '',
            taskPrice: 0,
        }
    }
}

export default update;