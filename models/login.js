module.exports = function (sequelize,DataTypes){
    var user = sequelize.define('user', {
        username :{ 
            type: DataTypes.STRING,
            validate: {
                isAlpha : true,
                }
        },

//PASSWORD
     password_hash: DataTypes.STRING,
        password : {
            type : DataTypes.VIRTUAL, set: (val)=>{
    //Remember to set the date value, otherwise it won't be validated
            this.setDataValue('password',val);
            this.setDataValue('password_hash', this.salt+val);
            },
            validate: {
                isLongEnough : function (val) {
                    if (val.length < 8){
                        throw new Error("Password needs to be longer than 8 characters.")
                    }
                }
            }
        },

//EMAIL
    email : {
            type: DataTypes.STRING, 
            validate: {
                isEmail : true
            }
        },
        
    complete : {
        type: DataTypes.BOOLEAN,
        defaultValue : false
    }
    })
    return user;
}