const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const MODEL_NAME = process.env.MODEL_NAME || 'llama3.2';
const PORT = process.env.PORT || 3000;

app.post('/query-ollama', async (req, res) => {
    const prompt = req.body.prompt;

    if (typeof prompt !== 'string' || prompt.trim() === '') {
        return res.status(400).json({
            msg: "Invalid prompt. Please provide a valid string."
        });
    }

    // Sanitize the prompt by escaping quotes
    const sanitizedPrompt = prompt.replace(/(["$`\\])/g, '\\$1');

    // Spawn the ollama command
    const ollamaProcess = spawn('ollama', ['run', MODEL_NAME, sanitizedPrompt]);

    let output = '';
    let errorOutput = '';

    // Capture standard output
    ollamaProcess.stdout.on('data', (data) => {
        output += data.toString();
    });

    // Capture error output
    ollamaProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
    });

    // Handle process exit
    ollamaProcess.on('close', (code) => {
        if (code === 0) {
            res.status(200).json({
                response: output.trim()
            });
        } else {
            console.error(`Error: ${errorOutput}`);
            res.status(500).json({
                msg: "Error processing your request, please try again!",
                error: errorOutput
            });
        }
    });

    // Handle any errors in spawning the process
    ollamaProcess.on('error', (error) => {
        console.error(`Spawn error: ${error.message}`);
        res.status(500).json({
            msg: "Failed to execute the command, please check the server!",
            error: error.message
        });
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
