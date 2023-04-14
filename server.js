const express = require("express")
const app = express()
const connectiondb = require("./config/dbConnection")
const dotenv = require("dotenv").config();
console.log("dot",dotenv);



const port=process.env.PORT || 5000

connectiondb()


app.use(express.json())
app.use("/api/contacts",require("./routes/authRouter"))

app.listen(port,()=>{
    console.log(`this is port number ${port}`);
})