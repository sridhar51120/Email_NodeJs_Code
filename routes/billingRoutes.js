const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("/api/stripe",async (req, res) => {
    // console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "inr",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    console.log(charge);
  });
};

 
// module.exports = (app) => {
//   app.post("/api/stripe", async (req, res) => {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 500,
//       currency: "inr",
//       description: "$5 for 5 credits",
//       payment_method_data: {
//         type: "card",
//         card: {
//           token: req.body.id,
//         },
//       },
//       confirmation_method: "manual",
//       confirm: "true",
//     });
 
//     console.log(paymentIntent);
//   });
// };