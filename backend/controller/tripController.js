const { generateItinerary } = require("../service/geminiService");

const Trip = require("../models/Trip")

const createTrip = async (req, res) => {
  

    try {
        const {destination, duration, budget} = req.body 

        const prompt = `
          Create a detailed ${duration}-day travel itinerary for ${destination}.

          Budget: ${budget}

Include:
- Day-wise itinerary
- Places to visit
- Food recommendations
- Transportation tips
- Estimated expenses
- Packing suggestions

Format the response clearly.
`;

const aiResponse = await generateItinerary(prompt);
        const itinerary = [
            {
                day: 1,
                activities: ["Beach visit", "Local food" ],
            },
            {
                day: 2,
                activities: ["Shopping", "Sightseeing"]
            }
        ]
        const packingList = [
            "clothes",
            "shoes",
            "powerbank"

        ];
        const trip = await Trip.create({
            userId: req.user.id,
            destination,
            duration,
            budget,
            itinerary: [aiResponse],
            packingList
        });
        res.status(201).json(trip);
    } catch( error) {
        res.status(500).json({
            message: error.message
        })
    }

    
}

const getTrip = async (req, res) => {
  try {
    const trip = await Trip.find({
      userId: req.user.id,
    });

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteTrip = async (req, res) => {
  try {
      const trip = await Trip.findByIdAndDelete(
      req.params.id
    );
    if (!trip) {
        return res.status(404).json({message: "Trip not found"})
    }

    res.json({
      message: "Trip Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTrip = async (req, res) => {
  try {
    const { destination, duration, budget } = req.body;

    const prompt = `
Create a detailed ${duration}-day travel itinerary for ${destination}.

Budget: ${budget}

Include:
- Day-wise itinerary
- Places to visit
- Food recommendations
- Transportation tips
- Estimated expenses
`;

    const aiResponse = await generateItinerary(prompt);

    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      {
        destination,
        duration,
        budget,
        itinerary: [aiResponse], 
      },
      { new: true }
    );

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
    createTrip, 
    getTrip,
    deleteTrip,
    updateTrip,
};