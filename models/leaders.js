const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('mongoose-currency').loadType(mongoose)

const currency = mongoose.Types.Currency

const leaderSchema =new Schema({
    name:{
        type:String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required: true
    },
    
    abbr:{
        type:String,
        default:''
    },
    
    featured:{
        type: Boolean,
        default:false
    }
},{
    timestamps:true
})
var leaderes =mongoose.model('leader',leaderSchema);
module.exports = leaderes;