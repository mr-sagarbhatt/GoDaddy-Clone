const { Schema, model, connection } = require("mongoose");
const AutoIncrementFactory = require("mongoose-sequence");

const AutoIncrement = AutoIncrementFactory(connection);

const paymentSchema = new Schema(
  {
    _id: Number,
    transactionID: {
      type: Number,
      max: [15, `Transaction id  must be less than or equal to 15 digits.`],
      required: [true, `Transaction id is required.`],
    },
    amount: {
      type: Number,
      required: [true, `Amount is required.`],
      min: [0, `Amount must be greater than or equal to 0.`],
    },
    type: {
      type: String,
      alias: "paymentType",
      max: [20, `Payment type must be less than or equal to 20.`],
      required: [true, `Payment type is required.`],
    },
    status: {
      type: Boolean,
      required: [true, `Payment status is required.`],
      default: 0,
    },
    orderNo: {
      type: String,
      required: [true, `Order no is required.`],
      maxlength: [10, `Order no must be less than or equal to 10 characters.`],
      unique: [true, `Order no is already exists.`],
    },
    isActive: {
      type: Boolean,
      require: true,
      default: 1,
    },
  },
  { timestamps: true }
);

paymentSchema.plugin(AutoIncrement, {
  id: "payment_seq",
});

const PaymentModel = model("payment", paymentSchema);

module.exports = PaymentModel;
