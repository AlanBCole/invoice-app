export const endpoints = {
    sendInvoice: '/send-invoice'
};

export function sendInvoice(endpoint, invoice) {
    
    const { clientEmail, clientName, date, tasks } = invoice;
    const invoiceData = {
        clientName,
        clientEmail,
        date,
        tasks
    };
    
    return fetch(endpoint, 
        { 
            method: 'POST', 
            body: JSON.stringify(invoiceData), 
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => res.json())
        .then((data) => console.log('response', data));
}