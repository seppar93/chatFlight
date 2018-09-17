module.exports = function (sequelize,DataTypes){
    var previousFlight = sequelize.define('previousFlight', {
        flightNum :{ 
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric : true
                }
        },
        departure : {
            type : DataTypes.STRING
        },
        arrival : {
            type : DataTypes.STRING
        },
        status : {
            type : DataTypes.STRING
        },
       

    })
    return previousFlight;
}