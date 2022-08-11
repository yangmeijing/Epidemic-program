import express,{Express, Router, Request, Response} from 'express'
import axios from 'axios'
const app:Express = express()
//解决跨域操作，后端接受所有请求都能访问
app.use('*', (req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

const router:Router = express.Router()

app.use('/api',router)

router.get('/list',async (req:Request,res:Response)=>{
    const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf')
    res.json({
        data:result.data
    })
})

app.listen(3333,()=>{
    console.log("success server 3333")
})