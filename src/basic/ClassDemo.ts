import Invoice from './classes/Invoice';

//interface IsPerson

 const invoice = new Invoice("Dhruv","For burger", 300);

 const invoice2 = new Invoice("Hello", "No reqd", 700);

 let invoices: Invoice[] = [];
 invoices.push(invoice);
 invoices.push(invoice2);

 invoices.forEach(inv => {
     console.log(inv.client, inv.details, inv.amount, inv.format());
 });

 console.log(invoices);