import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Subscription Name is required"],
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: [true, "Subscription Price is required"],
    min: [0, "Subscription Price must be a positive number"],
  },
  currency: {
    type: String,
    enum: ["USD", "EUR", "GBP", "INR"],
    default: "USD",
  },
  frequency: {
    type: String,
    enum: ["daily", "weekly", "monthly", "yearly"],
  },
  category: {
    type: String,
    enum: ["entertainment", "technology", "news", "sports", "finance", "other"],
    required: [true, "Subscription Category is required"],
  },
  paymentMethod: {
    type: String,
    enum: ["credit_card", "debit_card", "paypal", "bank_transfer", "upi"],
    required: [true, "Payment Method is required"],
    trim: true,
  },
  status: {
    type: String,
    enum: ["active", "cancelled", "expired"],
    default: "active",
  },
  startDate: {
    type: Date,
    required: [true, "Subscription Start Date is required"],
    validate: {
      validator: function (value) {
        return value <= new Date();
      },
      message: "Start date must be in the past or present",
    },
  },
  renewalDate: {
    type: Date,
    required: [true, "Subscription Start Date is required"],
    validate: {
      validator: function (value) {
        return value > this.startDate;
      },
      message: "Renewal date must be after the start date",
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
    index: true,
  }
}, { timestamps: true });

subscriptionSchema.pre("save", function (next) {
  if(!this.renewalDate) {
    const renewalPeriod = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);
  }

  // Auto-update the status is renewal date has passed
  if(this.renewalDate < new Date()) {
    this.status = "expired";
  }

  next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;