import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { conversation } from "../store";

export function Prompt() {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const setConv = useSetRecoilState(conversation);
    const API_URI = 'https://api.openai.com/v1/chat/completions'; // OpenAI API URI
    const API_KEY = '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'; // Replace with your OpenAI API key

    const handleSend = async () => {
        if (!prompt.trim()) return; // Prevent sending empty prompts

        setLoading(true);
        try {
            const response = await fetch(API_URI, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}` // Include API key for authentication
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo", // Specify the model you want to use
                    messages: [{ role: "user", content: prompt }]
                }),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            const modelResponse = data.choices[0].message.content; // Accessing the model's response
            setConv(prevConv => [...prevConv, { user: prompt, model: modelResponse }]);
            setPrompt(''); // Clear the input after successful send
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
    };

    return (
        <div className="flex justify-center p-4 sticky bottom-0 bg-[#202124] shadow-lg z-10">
            <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <textarea
                            className="bg-white bg-opacity-20 text-lg text-white font-semibold backdrop-blur-2xl px-4 py-3 rounded-lg w-full shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
                            rows={1}
                            placeholder="Type your message here..."
                            value={prompt}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <button 
                            onClick={handleSend}
                            className="bg-black text-white font-bold px-16 py-2 rounded-md hover:bg-slate-400 hover:text-black transition duration-200 flex items-center justify-center shadow-lg"
                            disabled={loading} // Disable button while loading
                        >
                           {loading ? "Processing..." : "Send"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
