const client = {
    name: 'A Client',
    email: "alantuneit@gmail.com",
    phone: "303.443.9688",
    streetAddress: " 2085 Glenwood Dr.",
    city: "Boulder",
    zipCode: "80304",
}

export const initModel = {
    client: client,
    // clients: [],
    // pastInvoices: [],
    services: [''],
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
    invoiceTotal: 0,
    invoiceDate: Date.now().toString(),
}


// export interface client {
//     name: string,
//     email: string,
//     phone: string,
//     address: string,
//     info: string,
// }

// export interface task {
//     service: string,
//     description: string,
//     price: number,
//     details: string,
// }

// export interface service {
//     description: string,
//     price: number,
// }

