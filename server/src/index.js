require("dotenv").config()
const express = require("express")
const cors = require("cors")

const transactionRoutes = require('./routes/transactionRoutes')
const categoryRoutes = require("./routes/categoryRoutes")
const exprenceRoutes = require("./routes/exprenceRoures")
const incomeRoutes = require("./routes/incomeRoutes")
const totalBalance = require("./routes/totalBalanceRoutes")


const app = express()
const PORT = process.env.PORT || 5000

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);
app.use(express.json());


app.use('/api/transactions', transactionRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/exprence', exprenceRoutes)
app.use('/api/income', incomeRoutes)
app.use('/api/balance', totalBalance)


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
