function update(msg, model) {
    console.log(msg);
    return {
        ...model,
        showForm: msg,
    }
}

export default update;