import { useState } from "react";

const REMOVE_BG_API_KEY = 'YAXjMbJsvbqdMbnKTK5wWXK7';  
const REMOVE_BG_API = 'https://api.remove.bg/v1.0/removebg'

function App() {

  const [file, setFile] = useState<File | null>(null);
  const [bgremovedfileUrl, setBgRemovedFileUrl] = useState<string | undefined>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onchangehandler = (e: any) => {
    setFile(e.target.files[0]);
  };

  const formData = new FormData();
  //@ts-expect-error ->bla
  formData.append('image_file', file);

  const removeBackground = async () => {
    const response = await fetch(REMOVE_BG_API, {
      method: 'POST',
      headers: {
        'X-Api-Key': REMOVE_BG_API_KEY,
      },
      body: formData,
    });
    setBgRemovedFileUrl(URL.createObjectURL(await response.blob()));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto flex justify-center space-x-10">
          {/* Before Removal Section */}
          <div className="before-removal bg-white p-6 rounded-lg shadow-lg w-80">
            <h1 className="text-2xl font-semibold text-center text-red-500 mb-4">Before Removal</h1>
            <div className="flex flex-col items-center">
              <label className="mb-2 text-lg text-gray-700">Upload Image:</label>
              <input 
                type="file" 
                onChange={onchangehandler} 
                className="mb-4 p-2 border rounded-md cursor-pointer"
              />
              {file && (
                <div className="flex justify-center mt-4">
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt="Selected file" 
                    className="rounded-md border-2 border-gray-200"
                    width={1000} 
                    height={1000}
                  />
                </div>
              )}
            </div>
          </div>

          {/* After Removal Section */}
          <div className="after-removal bg-white p-6 rounded-lg shadow-lg w-80">
            <h1 className="text-2xl font-semibold text-center text-red-500 mb-4">After Removal</h1>
            <div className="flex flex-col items-center">
              <button 
                onClick={removeBackground} 
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none"
              >
                Remove Background
              </button>
              {bgremovedfileUrl && (
                <div className="flex flex-col items-center mt-4">
                  <p className="italic text-gray-700 bg-gray-200 rounded-full px-4 py-2 mb-4 text-sm">
                    Removed background using remove.bg
                  </p>
                  <img 
                    src={bgremovedfileUrl} 
                    alt="Image with background removed" 
                    className="rounded-md border-2 border-gray-200"
                    width={1000} 
                    height={1000} 
                  />
                </div>
              )}
            </div>
            {bgremovedfileUrl && (
          <a href={bgremovedfileUrl} download="removed-background.png">
            <button className="p-2 bg-green-500 text-white rounded-md">
              Download Removed Image
            </button>
          </a>
        )}          </div>
        </div>
      </div>
    </>
  );
}

export default App;
