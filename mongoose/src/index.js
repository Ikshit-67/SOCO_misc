require("./db/db.connection");

const Invoice = require("./models/invoice.model")

const trigger = async () => {
    const res = await Invoice.aggregate([
        {
            '$match': {
                'timestamp': {
                    '$gte': Date("2022-08-01T00:00:00Z")
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

trigger()