require("./db/db.connection");


const Invoice = require("./models/invoice.model")

const trigger = async () => {
    const res = await Invoice.aggregate([
        {
            '$match': {
                'timestamp': {
                    '$gte': new Date(2022,08,01)
                }
            }
        }, {
            '$addFields': {
                'date': {
                    '$dateToString': {
                        'date': '$timestamp', 
                        'timezone': '+05:30'
                    }
                }
            }
        }
    ]);
    console.log(res);
}

trigger();