const {Schema, model} = require('mongoose');


const schema = new Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    organization:{
        type:Schema.Types.ObjectId,
        ref:'Organization',
        required:true,
    },
    questions:{
        type:[{
            type:Schema.Types.ObjectId,
            ref:'Question',
        }],
        required:true,
    },
    AssignedTo:{
        type:[{
            email:{

                type:String,
                validate:function(v){
                    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
                }

            },
            assignedOn:{
                type:Date,
                default:Date.now,
            },
            deadline:{
                type:Date,
                required:true,
            },
            attempted:{
                type:Boolean,
                default:false,
            },
            score:{
                type:Number,
                required:false,
            }
        }],
        required:false,

    }
    
})

module.exports = model('Assignment', schema);