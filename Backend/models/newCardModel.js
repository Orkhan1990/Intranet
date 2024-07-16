import mongoose from "mongoose";

const newCardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      //   required:true
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "client",
      //   required:true
    },
    newCardProblems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newCardProblems",
      },
    ],

    type: {
      type: String,
      default:"tiqac"
    },
    manufactured: {
      type: String,
      default:"man"
    },
    model: {
      type: String,
    },
    sassi: {
      type: String,
    },
    carNumber: {
      type: String,
    },
    produceDate: {
      type: String,
      default:"2024"
    },
    km: {
      type: String,
    },
    qostNumber: {
      type: String,
    },
    paymentType: {
      type: String,
      default:"transfer"
    },
    nds: {
      type: Boolean,
    },
    isOpen: {
      type: Boolean,
    },
    repairAgain: {
      type: Boolean,
    },
    servisInfo: {
      type: Boolean,
    },
    comments: {
      type: String,
    },
    recommendation: {
      type: String,
    },
    closeDate: {
      type: Date,
    },
    workers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newCardWorkers",
      },
    ],
    charges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newCardCharges",
      },
    ],
    parts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newCardParts",
      },
    ],
  },
  { timestamps: true }
);

const NewCard = mongoose.model("newCards", newCardSchema);

export default NewCard;
