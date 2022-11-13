const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins");
const pathRoute = require("./routes/pathing");
const userRoute = require("./routes/users");
const { application } = require("express");
dotenv.config();

app.use(express.json())

mongoose
.connect(process.env.MONGO_URL, {useNewUrlParser: true,
    useUnifiedTopology: true,})
.then(()=>(
    console.log("MongoDB connected successfully")
));

app.use("/api/pins", pinRoute);
app.use("/api/path", pathRoute);
app.use("/api/users", userRoute);

//mongodb+srv://czarthak:<password>@cinder.nhzu7st.mongodb.net/?retryWrites=true&w=majority
app.listen(5001, ()=>{
    console.log("Backend balls server started")
});