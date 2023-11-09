const express = require('express');
const app = express();
const cors = require('cors');
const razor = require('razorpay');
require('dotenv').config();


app.use(express.json());
app.use(cors())

app.listen(7000, () => console.log(`http://localhost:7000`));

app.get('/', (req, res) => {
  res.send('Hi')
})

const { API_KEY, API_SECRET } = process.env;
const instance = new razor({
  key_id: API_KEY,
  key_secret: API_SECRET,
})

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const products  = req.body;
    let test = 0;
    for (let i=0;i<products.length;i++) {
      test += products[i].price;
    }
    let amount = test * 100;
    let options = {
      amount,
      currency: "INR",
      receipt: "razorpay@gmail.com"
    }

    instance.orders.create(options, (err, order) => {
      if (!err) {
        res.status(200).json({
          success: true,
          msg: "Order Created",
          id: order.id,
          amount,
          key_id: API_KEY,
          product_name: products.map(el => {
            return {
              name: el.title
            }
          }),
          description: products.map(el => {
            return {
              name: el.title
            }
          }),
          contact: "1234567890",
          name: "aditya paluskar",
          email: "adityapaluskar@gmail.com"
        })
      } else {
        console.log(err)
        res.status(500).json({err: "Internal Server Error"})
      }
    })

  } catch (error) {
    console.log(error.message)
  }
})