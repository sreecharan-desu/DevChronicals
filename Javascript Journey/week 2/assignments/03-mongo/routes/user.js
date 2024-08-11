const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User , Course } = require("../db")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    username = req.headers.username
    password = req.headers.password
    
    await User.createOne({
        Username : username,
        Password : password
    })

    res.json({
        msg : "User Created Successfully.."
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    let response = await Course.find();

    res.json({
        response
    })


});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router 