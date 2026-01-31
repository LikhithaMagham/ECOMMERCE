const mongoose = require('mongoose')

const behaviorSchema = new mongoose.Schema(
  {
    userId: String,
    productId: mongoose.Schema.Types.ObjectId,
    action: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Behavior', behaviorSchema)
