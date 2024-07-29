const mongoose = require('mongoose');

const {Schema} = mongoose;

main()
.then(() => {
    console.log("Connected to Mongoose");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}


const orderSchema = new Schema({
    item: String,
    price: Number,
    
})

const Order = mongoose.model('Order', orderSchema);



const customerSchema = new Schema({
    name: String,
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
  });
  
  const Customer = mongoose.model('Customer', customerSchema);
// const addCustomer = async () => {
//     let cust1 = new Customer({
//       name: "Mukesh",
//       orders: []  // Ensure orders is initialized
//     });
//     let order1 = await Order.findOne({ item: "samosa" });
//     let order2 = await Order.findOne({ item: "tea" });
//       cust1.orders.push(order1);  // Push only the ObjectId
//       cust1.orders.push(order2);  // Push only the ObjectId
//     let result = await cust1.save();
//     console.log(result);
//   };
  
//   addCustomer();
  

const findCustomer = async () => {
    let result = await Customer.findOne({}).populate("orders");
    console.log(result);
  };
  
  findCustomer();





// const addOrder = async (user) => {
//    let result = await Order.insertMany([
//         {item: "samosa", price: 12},
//         {item: "kachori", price: 12},
//         {item: "tea", price: 10},
//     ]);
// console.log(result);

  
// };
// addOrder();