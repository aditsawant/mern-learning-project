const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

// gets list of all records
recordRoutes.route("/record").get(function (req,response) {
    let db_connect = dbo.getDb("employees");
    db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
        if(err) throw err;
        response.json(result);
    });
});

// gets a single record with the given id
recordRoutes.route("/record/:id").get(function (req,response) {
    let db_connect = dbo.getDb();
    let my_query = {_id: ObjectId( req.params.id )};
    db_connect
    .collection("records")
    .findOne(my_query, function (err, result) {
        if(err) throw err;
        response.json(result);
    });
});

// creates a new record
recordRoutes.route("/record/add").post(function (req,response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };
    db_connect
    .collection("records")
    .insertOne(myobj, function (err, result) {
        if(err) throw err;
        response.json(result);
    });
});


// updates a record by id
recordRoutes.route("/record/update/:id").post(function (req,response) {
    let db_connect = dbo.getDb();
    let my_query = {_id: ObjectId( req.params.id )};
    let newvals = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    }
});


// deletes a record
recordRoutes.route("/:id").delete(function (req,response) {
    let db_connect = dbo.getDb();
    let my_query = { _id: ObjectId( req.params.id )};

    db_connect
    .collection("records")
    .deleteOne(my_query, function (err,result) {
        if(err) throw err;
        console.log("1 document deleted");
        response.json(result);
    });
});

module.exports = recordRoutes;