export const client = {
    
}

export const initModel = {
    showCreateInvoiceForm: false,
    showCreateTaskForm: false,
    showNavDrawer: false,
    clients: [],
    pastInvoices: [],
    client: {
        name: 'A Client',
        email: "alantuneit@gmail.com",
        phone: "303.443.9688",
        streetAddress: " 2085 Glenwood Dr.",
        city: "Boulder",
        zipCode: "80304",
        notes: 'additional information',
    },
    invoiceDate: Date.now().toString(),
    services: [],
    tasks: [
        {
            service: "Replace String",
            price: 5,
            description: "replace broken or damaged string",
        },
        {
            service: "Concert Tuning 1x8",
            price: 100,
            description: "tune to requested temperament",
        }
    ],
}
