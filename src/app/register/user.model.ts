//CREATING THE SCHEMA
export class UserModel{
    constructor(
       public username : String,
        public user_email : String,
        public password : String,
        public phone_number : Number,
        //role : {type: Number,default: 0,required: true} 
       
        // public file :File
        
       
    ){}
}