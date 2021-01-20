class Customer {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
}

let customers = [
    new Customer("itamar lachman","itamar.lachman@gmail.com"),
    new Customer("avi lieber","avi.lieber@gmail.com"),
];


for(customer of customers)  {
    console.log(`Customer: ${customer.name} with email: ${customer.email}`);
}
