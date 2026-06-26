const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    destination: String,
    duration: Number,
    budget:String,
    itinerary: Array,
    packingList: Array,

},
{
timestamps: true,

});

module.exports = mongoose.model("Trip", tripSchema)