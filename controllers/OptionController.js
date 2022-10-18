
  const Options = require('../models/OptionModel');
const Questions = require('../models/QuestionModel');


module.exports.index = async (req, res )=>{
    return res.json(200,{
        message : " Hello Option "

    })
}

module.exports.createOptions = async (req, res )=>{
try{
    let question =await Question.findById(req.params.id);
    if(question){
        let option =await Option.create({
            content: req.body.content,
            votes: req.body.votes,
            question : req.params.id,
        });
        option.link_vote =
        // 
        "http://localhost:3040/api/options/"+ Option.id + "/add_vote";
         option.sava();
         question.Options.push(option);
         question.save();

         return res.json({
            option, date:{
                message: "option created ", 
            }
            
         })
    }
    return res.json({question})

}catch(err){
    console.log("Error :", err )
} 
};


module.exports.optionDelete = async (req ,res )=> {
    try{
        let id = req.params.id;
         let option = await Option.findById(id);

         if(option.votes>0){
            return res.status(404),json({
                data :{ message : " cant delete it its has vote "}
            })
         }
         await Questions.findByIdAndUpdate(option.question,{
            $pull : { options : id },
         });
         await Option.findByIdAndDelete(id);
         return res.status(200).json({
            data: { massage : " Option deleted Successfully "}
         });
        }
    catch(err){
        return res.status(500).json({
            data: { message: "Internal server errror "},

        })

    }
}

module.exports.addVote = async (req, res )=>{
    try{
        let id = req.params.id;
        await Option.findByIdAndUpdate(id ,{ $inc : {vote :1 }});
        await res.status(200).json({
            data :{ massage : " voted Successfully"},
        });
    }catch(err){
        return res.status(500).json({
            data : { massage : " Internel server error "},
        })
    }
}

