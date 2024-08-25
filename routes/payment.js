const express = require("express");
const router = express.Router(); // Use lowercase 'router' by convention

// Import or define the 'Add' function here
const { Add, Verify } = require('../controllers/payment'); // Example import, adjust the path as needed

router.post("/payment", Add); // Use lowercase 'router'
router.get("/payment/:id", Verify); // Changed to GET method for verification

module.exports = router;
