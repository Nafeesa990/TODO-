const express=require("express")
var router=express.Router();

const{addTask,alldata,deletedata,task1Model}=require('../controller/task.jsx')

router.route("/addTask").post(addTask);
router.route("/alldata").get(alldata);
router.route("/deletedata/:id").delete(deletedata);

 //api profile findData
 router.route("/findItemByid/:id").get(async(req,res)=>{
    console.log("find data")
    const idn=req.params.id;
    const result=await task1Model.find({'_id':idn})
    if(result.length>0){
    res.json({'result':result})
    }
    else{
      res.json({'result':[]})
    }
  })

//api taskupdate
router.route("/taskupdate").post(async(req,res)=>{
    const tname=req.body.t;
    const dname=req.body.d;
    const idn=req.body.idn;
    console.log(idn+tname+dname)
    const doc=await task1Model.findById(idn);
    doc.title=tname;
    doc.des=dname;
    doc.save()
    res.json("updated")
  })

 

module.exports=router;