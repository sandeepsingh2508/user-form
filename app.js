const express=require('express')
const app=express();
const errorMiddleware=require('./middleware/error')
const cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser())
//routes
const user=require('./routes/user')
const detail=require('./routes/detail')

// app.use('/api/v1',product);
app.use('/api/v1',user);
app.use('/api/v1',detail);

app.use(errorMiddleware);

module.exports=app;