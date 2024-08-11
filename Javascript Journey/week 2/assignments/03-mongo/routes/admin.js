const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require('../db');
const { Course } = require('../db');


// Admin Routes
router.post('/signup', async(req, res) => {

    let username = req.headers.username;
    let password = req.headers.password;

    await Admin.createOne(
        {
            Username : username,
            Password : password
        }
    )

    res.json({
        msg : "Admin Created Successfully.."
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let image = req.body.image;

    await Course.createOne(
        {

            Title : title,
            Description : description,
            Price : price,
            Image : image
        }
    )

    res.json({
        msg : "Course Created Successfully.."
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find();
    res.json({
        response
    })

});

module.exports = router;