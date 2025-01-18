const express = require('express');
const { Client } = require('pg'); // PostgreSQL client library
const cors = require('cors')

const app = express();
const port = 3001;
app.use(cors())

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// PostgreSQL connection using a connection string
const connectionString = 'postgresql://neondb_owner:f0Q4YWlvKsgx@ep-empty-fog-a1d9eiy5.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

// Create a new PostgreSQL client
const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Required for Neon or other cloud-hosted databases
  },
});

// Test the database connection
client.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the PostgreSQL database.');
  }
});


// Route to handle login (vulnerable to SQL Injection)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log("Username : ",username,"Password : ", password)
  // Vulnerable SQL query (no parameterized queries)
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log("Query ",query)
  client.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send(err);
    }

    if(results.rowCount == 1){
      res.json({msg : "Logged in successfully",success : true})
    }else{
      res.send({results})

    }

  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
