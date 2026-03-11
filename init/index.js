const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
main()
  .then((res) => { console.log("connected to database..") })
  .catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
const initDB = async () => {
  await Listing.deleteMany({});
  initdata.data=initdata.data.map((obj) => ({ ...obj, owner: "68de9f9d464300cb1af7b77b" }));
  await Listing.insertMany(initdata.data);
  console.log("data was initilized..");
};
initDB();