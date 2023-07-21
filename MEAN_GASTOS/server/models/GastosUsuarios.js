const mongoose=require('mongoose');
const {Schema}=mongoose;
const GastosSchema=new Schema({
    ruc:{type:String, required: true},
    empresa:{type:String, required:true},
    monto:{type:Number, required:true},
    tipo:{type:String, required:true}
   })
   module.exports=mongoose.model('Gastos_Usuarios',GastosSchema);