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

export function toggleView(whichView, editID) {
    console.log(whichView, editID);
        
    return {
        type: MSGS.TOGGLE_VIEW,
        whichView,
        editID
    };
}

export function textInputMsg(msg, type) {
    return { 
        type,
        textInput: msg,
    };
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
            console.log(msg);
            if (msg.editID !== undefined) {
                const task = findTask(msg.editID, model);
                return {
                    ...model,
                    whichView,
                    invoice: {
                        ...invoice,
                        editID: task.ID,
                        taskTitle: task.taskTitle,
                        taskPrice: task.taskPrice,
                    }
                };
            } else {
                return { ...model, whichView };    
            }
            

        case MSGS.TASK_TITLE_INPUT:
            const taskTitle = msg.textInput;
            return { 
                ...model, 
                invoice: { ...invoice, taskTitle } 
            };

        case MSGS.TASK_PRICE_INPUT:
            let taskPrice = parseFloat(msg.textInput);
            return { 
                ...model, 
                invoice: { ...invoice, taskPrice } 
            };

        case MSGS.SAVE_TASK:
            const updatedTask = invoice.editID !== null ?  editTask(msg, model) : addTask(msg, model);
            return updatedTask;

        default:
            console.log(msg);
            return model;
    }
}

function findTask(editID, model) {
    const { invoice } = model;
    const { tasks } = invoice;
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].ID === editID) {
            return tasks[i];
        }
    }
}

function editTask(msg, model) {
    const { invoice } = model;
    const {whichView } = msg;
    const { tasks } = invoice;
    
    const updatedTasks = tasks.map((task) => {
        if (task.ID === msg.editID) {
            return task;
        }
        return task;
    });
    
    return {
        ...model,
        whichView,
        invoice: {
            ...invoice,
            tasks: updatedTasks,
            taskTitle: '',
            taskPrice: 0,
            editID: null,
        }
    };
}

function addTask(msg, model) {
    const { invoice } = model;
    const { whichView } = msg;
    const { taskTitle, taskPrice, nextTaskID } = invoice;
    const task = { ID: nextTaskID, taskTitle, taskPrice };
    const tasks = [ ... invoice.tasks, task ];

    return {
        ...model,
        whichView,
        invoice: {
            ...invoice,
            tasks,
            nextTaskID: nextTaskID + 1,
            taskTitle: '',
            taskPrice: 0,
        }
    }
}

export default update;