const dotenv = require("dotenv").config()
const log = console.log
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use("/api/", (_,res)=>{
    res.json({data:"api is working!"})
})

app.listen(port, ()=>{
    log(`server running on port ${port}`)
})

log("test")
//log(_dirname)
//log(_filename)
log(process.env.USERNAME)
log(process.env.PORT) 