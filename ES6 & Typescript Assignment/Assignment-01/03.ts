var Order={
        id: 0o1,
        title: 'ORD001',
    price: 100,

        printOrder: function() {
            console.log(`id ${this.id} Title: ${this.title}`)
        },
        
        getPrice: function() {
            console.log(`price: ${this.price}`)
        }
    };
    
    Order.printOrder();
    console.log(Order.id);
    
    const Order1=Object.assign(Order);
    Order.printOrder();
    console.log(Order1.id);