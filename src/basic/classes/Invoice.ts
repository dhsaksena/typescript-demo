export default class Invoice
{
    client: string;
    details: string;
    amount: number;

    constructor(_client: string, _details: string, _amount: number)
    {
        this.client = _client;
        this.details = _details;
        this.amount = _amount;
    }

    format(): string {
        return `${this.client} owes me ${this.amount} with ${this.details}`;
    }
}

