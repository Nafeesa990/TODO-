const mongoose = require('mongoose');


//schema
const task1Schema=mongoose.Schema({
    title:String,
    des:String
})
//Model
const task1Model=mongoose.model("taskadd_tbl",task1Schema)

const addTask=(req,res)=>{
    var t=req.body.title;
    var d=req.body.des;
    const obj=new task1Model();
    obj.title=t;
    obj.des=d;
    obj.save().then(()=>{
        res.send("Task added Successfully")
    })
    console.log(t)
    console.log(d)
    
}

const alldata = async (req, res) => {
    try {
      const result = await task1Model.find();
      res.status(200).json({ "data": result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching tasks." });
    }
  }

  const deletedata=async(req,res)=>{
    const idn=req.params.id;
    await task1Model.deleteOne({'_id':idn});
    res.json("data deleted successfullly")
  }

module.exports={addTask,alldata,deletedata,task1Model}