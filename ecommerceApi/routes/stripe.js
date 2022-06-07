const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51L5uI3SG3hKeLXetmFkeZSwtPrGnPmGSmYe0UpO1qyQc1RLsNtWt4r698tpJnvdC7ft4KrQ0j7IAfOxamFDe06yq00G56VDXZY"
);

router.post("/payment", (req, res) => {
  stripe.paymentIntents.create(
    {
      // source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
      payment_method_types: ["card"],
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
