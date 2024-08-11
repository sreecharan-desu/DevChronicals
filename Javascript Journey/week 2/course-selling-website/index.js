const express = require("express");
const app = express();
const zod = require("zod");
const mongoose = require("mongoose");
app.use(express.json());
const jwt = require("jsonwebtoken");
const mySecretKey = "#$&*((^";
const path = require("path");

//--------------------------------------------------------- DATABASE ------------------------------------------------------------

//data-base stuff

mongoose.connect(
  "mongodb+srv://srecharandesu:charan%402006@cluster0.a9berin.mongodb.net/CourseSellingApp",
); //connecting DB

//schemas

const AdminSchema = new mongoose.Schema({
  Username: String,
  Password: String,
});

const UserSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  PurchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Price: Number,
  Image: String,
});

//models

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

//--------------------------------------------------------- HELPER FNS ----------------------------------------------------------------------------------

//helper-functions

function ValidateCredentials(username, password) {
  //zod-validation

  const usernameSchema = zod.string();
  const passwordSchema = zod.string().min(8);

  username_response = usernameSchema.safeParse(username);
  password_response = passwordSchema.safeParse(password);

  if (username_response.success && password_response.success) {
    return true;
  } else {
    return false;
  }
}

//--------------------------------------------------------- MIDDLEWARE-----------------------------------------------------------

//Admin-middleware

async function ValidateAdmin(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  //zod-validation
  validation = ValidateCredentials(username, password);

  let response = await Admin.findOne({
    Username: username,
    Password: password,
  });

  if (response == null) {
    isPresent = false;
  } else {
    isPresent = true;
  }

  if (validation) {
    if (isPresent) {
      res.json({
        msg: "Seems like you Already have an account Try Signing in!",
      });
    } else {
      next();
    }
  } else {
    res.json({
      msg: "Input Validation Failed Try again!",
    });
    next();
  }
}

async function Authenticate(req, res, next) {
  const authkey = req.headers.auth;
  if (authkey == "") {
    res.json({
      msg: "First signin to add a course",
    });
    return;
  }
  try {
    response = jwt.verify(authkey, mySecretKey);
    next();
  } catch (e) {
    res.json({
      msg: "Auth Failed",
    });
  }
}

//User-Middleware

async function ValidateUser(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  //input-validation
  let usernameSchema = zod.string();
  let passwordSchema = zod.string().min(8);
  let username_response = usernameSchema.safeParse(username);
  let password_response = passwordSchema.safeParse(password);
  let validation = username_response.success && password_response.success;

  //database-checking
  const user = await User.findOne({
    Username: username,
    Password: password,
  });

  if (user == null) {
    isPresent = false;
  } else {
    isPresent = true;
  }

  if (validation) {
    if (isPresent == false) {
      next();
    } else {
      res.json({
        msg: "Seems like you are already a user signin !",
      });
    }
  } else {
    res.json({
      msg: "Validation Failed try again",
    });
  }
}

//--------------------------------------------------------- ADMIN ROUTES -------------------------------------------------------------

//routes

//Admin-routes
app.post("/admin/signup", ValidateAdmin, async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  await Admin.create({
    Username: username,
    Password: password,
  });

  res.json({
    msg: "Admin Created Successfully",
  });
});

app.post("/admin/signin", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  validation = ValidateCredentials(username, password);

  if (validation) {
    const FetchAdmin = await Admin.findOne({
      Username: username,
      Password: password,
    });

    if (FetchAdmin != null) {
      token = jwt.sign({ username }, mySecretKey);
      res.json({
        token: token,
      });
    } else {
      res.status(404).json({
        msg: "user not found",
      });
    }
  } else {
    res.json({
      msg: "Invalid Credentials",
    });
  }
});

app.post("/admin/courses", Authenticate, async (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let image = req.body.image;

  const newCourse = await Course.create({
    Title: title,
    Description: description,
    Price: price,
    Image: image,
  });

  res.json({
    msg: "Course Created Successfully",
    CourseId: newCourse.id,
  });
});

app.get("/admin/courses", Authenticate, async (req, res) => {
  const ALL_COURSES = await Course.find();
  res.status(200).json({
    ALL_COURSES: ALL_COURSES,
  });
});

//--------------------------------------------------------------------- USER ROUTES -----------------------------------------------------------------------------------

app.post("/users/signup", ValidateUser, async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  await User.create({
    Username: username,
    Password: password,
  });

  res.json({
    msg: "User Signed up Successfully..",
  });
});

app.post("/users/signin", async (req, res) => {
  username = req.body.username;
  password = req.body.password;

  token = jwt.sign(username, mySecretKey);

  res.json({
    token: token,
  });
});

app.get("/users/courses", Authenticate, async (req, res) => {
  const ALL_COURSES = await Course.find();
  res.status(200).json({
    ALL_COURSES: ALL_COURSES,
  });
});

app.post("/users/courses/:courseid", Authenticate, async (req, res) => {
  username = req.body.username;
  password = req.body.password;
  let course_id = req.params.courseid;
  let UpdatedPurchasedcourses = [];

  let course = await Course.findOne({
    _id: course_id,
  });

  let user = await User.findOne({
    Username: username,
    Password: password,
  });

  let CourseFound = false;
  for (let i = 0; i < user["PurchasedCourses"].length; i++)
    if (course_id == user["PurchasedCourses"][i]) CourseFound = true;

  if (CourseFound)
    res.json({
      msg: "You have already bought the course",
    });
  else {
    UpdatedPurchasedcourses.push(course._id);
    for (let i = 0; i < user["PurchasedCourses"].length; i++)
      UpdatedPurchasedcourses.push(user["PurchasedCourses"][i]);

    await User.updateOne({
      PurchasedCourses: UpdatedPurchasedcourses,
    });
    res.json({
      msg: `Course ${course.Title} Purchased Successfully`,
      Course_Details: course,
    });
  }
});

app.get("/users/PurchasedCourses", Authenticate, async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let ListOfCourses = [];

  let user = await User.findOne({
    Username: username,
    Password: password,
  });

  let courseList = user["PurchasedCourses"];

  for (let i = 0; i < courseList.length; i++) {
    const course = await Course.findOne({
      _id: courseList[i],
    });

    ListOfCourses.push(course);
  }
  res.json({
    PURCHASED_COURSES: ListOfCourses.reverse(),
  });
});

//------------------------------------------------------------GLOBAL CATCHES ------------------------------------------------------------

//global-catches

app.use((_err, _req, res, next) => {
  res.json({
    msg: "something got messed up !",
  });
  next();
});

app.listen(3000, () => {

  console.log("Listening...");

});