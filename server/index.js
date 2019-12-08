// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require("express"); // call express
var app = express(); // define our app using express
var bodyParser = require("body-parser");

var Airtable = require("airtable");


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get("/", function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

// more routes for our API will happen here

// Gets All Participants
router.get("/participants", function(req, res) {
  base("Participants (Cohort 8)")
    .select({
      // Selecting the first 100 records in All Cohort 8:
      maxRecords: 100,
      view: "All Cohort 8"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        let participants = [];

        records.forEach(function(record) {
          // console.log("Retrieved", record.get("User ID"));
          let participant = {};
          let user_id,
            user_type,
            current_role,
            first_name,
            last_name,
            projects,
            sic_status,
            workshop_1,
            workshop_2,
            email,
            full_name,
            no_val;

          user_id = record.get("User ID");
          user_type = record.get("UserType");
          current_role = record.get("CurrentRole");
          first_name = record.get("First Name");
          last_name = record.get("Last Name");
          full_name = record.get("Full Name");
          projects = record.get("Projects");
          sic_status = record.get("SIC Status");
          workshop_1 = record.get("Workshop 1");
          workshop_2 = record.get("Workshop 2");
          email = record.get("Email");
          // If there is no data this is default
          no_val = null;

          // Participant Data Format
          participant["User ID"] = user_id ? user_id : no_val;
          participant["UserType"] = user_type ? user_type : no_val;
          participant["CurrentRole"] = current_role ? current_role : no_val;
          participant["First Name"] = first_name ? first_name : no_val;
          participant["Last Name"] = last_name ? last_name : no_val;
          participant["Full Name"] = full_name ? full_name : no_val;
          participant["Projects"] = projects ? projects : no_val;
          participant["SIC Status"] = sic_status ? sic_status : no_val;
          participant["Workshop 1"] = workshop_1 ? workshop_1 : no_val;
          participant["Workshop 2"] = workshop_2 ? workshop_2 : no_val;
          participant["Email"] = email ? email : no_val;
          // Sends JSON
          participants.push(participant);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

        res.json(participants);
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
});

// Gets a specific participant
router.get("/participants/:participant_id", function(req, res) {
  let user_id = req.params.participant_id;
  console.log(user_id);
  base("Participants (Cohort 8)").find(user_id, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Retrieved", record.id);
    res.json({"User": "one"})
  });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);
