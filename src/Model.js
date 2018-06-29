export const client = {
    
}

export const initModel = {
    whichView: 'INVOICE_SINGLE',
    showForm: false,
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
    invoiceDate: Date.now(),
    tasks: [
        {
            task: "Replace String",
            price: 5,
            description: "replace broken or damaged string",
        },
        {
            task: "Concert Tuning 1x8",
            price: 100,
            description: "tune to requested temperament",
        }
    ],
}
