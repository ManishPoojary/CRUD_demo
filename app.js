var express = require('express');
var app = express();

var Employee = require('./employee.js');

// <!------------------Create operation --------------------------!>
// var employee1= new Employee({
//     name:'ravi',
//     username:'ravi',
//     city:'bangalore',
//     mobile:8745632154,
//     other:{
//         designation:'developer',
//         email:'manish@gmail.com'
//     }
// })
//
//
// employee1.save(function (err,employ,num) {
//     if(err){
//         console.log('error occuerd');
//     }else {
//         console.log('saved'+ num);
//         console.log('details'+employ);
//     }
//
// });
// <!------------------Create operation ends--------------------------!>

// <!-------------------Retrieving all document -----------------------!>
// Employee.find({name:'ravi'},function (err,data) {
//  if(err) {
//      console.log("error occured while finding");
//  }
//  console.log(data);
//  })

// <!-------------------Retrieving  one Document -----------------------!>
// Employee.findOne({name:'ravi'},function (err,data) {
//     if(err) {
//         console.log("error occured while finding");
//     }
//     console.log(data);
// })

//<!-------------------Updating  all Documents -----------------------!>

// Employee.updateMany({city:'brahmavar'},{city:'avar'},function (err) {
//     if(err){
//         console.log("error occured while updating");
//     }
//     console.log('updated');
//
// });

//<!------------------- finding one and Updating one document -----------------------!>
// Employee.findOneAndUpdate({name:'ravi'},{mobile:'000000000088'},function (err,data) {
//     if(err){
//         console.log("error occured while updating");
//     }
//     console.log('updated'+data);
//
// });
//<!------------------- Deleting an document -----------------------!>
Employee.remove({name:'ravi'},function (err,data) {
    if(err){
        console.log('error occured while deleting');
    }
    console.log(data);

})