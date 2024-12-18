const NewsLetter = require("../models/newsLetter");

const subscribe = async (req, res) => {
  const email = req?.body?.email;
  try {
    const data = await NewsLetter.create({ email });
 setTimeout(()=>{
    res.status(201).json({
        message: "Subscribed to newsletter successfully",
        data,
      });
},2000)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = {
  subscribe
};
