//external modules
const express = require("express");
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Internal modules
const routes = require('./routes')

const app = express();

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
	.then(() => {
		console.log('Connection successfull')
	} )
	.catch(e => console.log(e))

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/contacts', routes)



app.get('*', (req,res) => {
	res.send(`<center style='margin-top:200px'><h1>404</h1>
		<h3>Please use the correct routes</h3></center>`)
})

const PORT= process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})


