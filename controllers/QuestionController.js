
 const Questions = require('../models/QuestionModel')
 const Options = require('../models/OptionModel')


module.exports.index = async (req, res )=>{
   
   console.log(" inside q  controll ")
    return res.json(200,{

        message: "Hello que controllers "

    })
}


module.exports.createQuestion = async (req, res )=>{
    
   try{
    let question = await Questions.create(req.body);

    if(question){
        return res.json({
            question,
            date:{ message : "question created Successfully"}
        })

    }else{
        return res.status(500).json({
            date:{message: " Internal server error"},

        });
    }
   }catch(err){
    console.log(" Error while creating Question ", err)
    return ;

   }
}

   module.exports.viewQuestion = async (req, res )=> {

    try{
        let question = await Questions.findById(req.params.id).populate("option");
        return res.json({ question});
    

   } catch(err){
return res.status(500).json({
    date: {
        message : " internal server error "
    },
})
   }
}


module.exports.deleteQuestion = async ( req , res )=>{

    try{
    let id = req.params.id;
    let question = await Questions.findById(id).populate({
        path : "option",
        select : "vote",
    });

    if(question){
        let options  = question.options;
        for(let i=0; i<options.lenght; i++){
            if(options(id).vote> 0){
                return res.status(404).json({
                    date: {
                        message : " Question option has some votes , not possible to delete",
                    }
                })
            }
        }
        await Option.deleteMany({ question : id});
        await Questions.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Question deleted succesfully"
        });


    }else{
        return res.status(404).json({
            message : " Q not found"
        })
    }
    }catch(err){
        return res.status(500).json({
            message: " Internal servel error deleting Q "
        })

    }
}