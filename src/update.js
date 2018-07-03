import { addInvoiceTaskForm } from "./views/forms.view";

export const MSGS = {
    SHOW_FORM: 'show-form',
    TASK_TITLE_INPUT: 'task-title',
    TASK_PRICE_INPUT: 'task-price',
    SAVE_TASK: 'save-task',
}

export function toggleForm(showForm) {
    return {
        showForm,
        type: MSGS.SHOW_FORM
    }
}

export function textInputMsg(msg, type) {
    return { 
        type,
        textInput: msg,
    }
}

export const saveTaskMsg = { type: MSGS.SAVE_TASK };

function update(msg, model) {
    switch (msg.type) {
        case MSGS.SHOW_FORM :
            const { showForm } = msg;
            return { ...model, showForm }

        case MSGS.TASK_TITLE_INPUT:
            const taskTitle = msg.textInput;
            return { ...model, taskTitle }

        case MSGS.TASK_PRICE_INPUT:
            const taskPrice = msg.textInput;
            return { ...model, taskPrice }

        case MSGS.SAVE_TASK:
            return addTask(msg, model);

        default:
            return model;
    }
}

function addTask(msg, model) {
    const { taskTitle, taskPrice, nextTaskId } = model;
    const task = { id: nextTaskId, taskTitle, taskPrice };
    const tasks = [ ... model.tasks, task ];

    return {
        ...model,
        tasks,
        nextTaskId: nextTaskId + 1,
        taskTitle: '',
        taskPrice: '',
        showForm: false
    }
}
export default update;