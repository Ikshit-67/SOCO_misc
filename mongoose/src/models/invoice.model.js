const mongoose = require("mongoose")

const invoiceSchema = new mongoose.Schema({}, {collection:"invoice"})

const Invoice = mongoose.model('invoice', invoiceSchema)
module.exports = Invoice