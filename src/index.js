import  express  from "express";


const app = express()
const port = 3500
app.use(express.json())
 
app.get('/cars', getAllCars);
app.post('/cars', createCar);


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT} ...`);
});

