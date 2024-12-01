import { useState } from "react";
import { WishMessage } from "../../components/welcomemessage";
import { useTokenCheck } from "../../hooks/customHoooks";
type StudentDashboardProps = {
  API: string;
};
export default function AdminDashboard({API} : StudentDashboardProps) {
  useTokenCheck();
  const [file, setFile] = useState<File | null>(null);
  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files.length > 0) {
    if (event.target.files[0].name.split(".")[1] != "ods") {
      alert("PNG files only");
      return;
    } else {
      if (event.target.files[0].size > 1000000) {
        alert("File size must be less than or equal to 1MB");
        return;
      } else {
        setFile(event.target.files[0]);
      }
    }
    return;
  } else {
    alert("Invalid File");
  }
};
  

const SendDataToBackend = async () => {
  if (!file) {
    alert("Please select a file first!");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(API, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload the file");
    }

    const data = await response.json();
    alert(data.msg);
  } catch (error) {
    alert(`Error: ${error}`);
  }
};

  return (
    <>
      <WishMessage ROLE="Admin" />
      <div className="flex justify-center place-content-center">
        {/* <label htmlFor="">Update details : </label>
        <select onChange={onchangeHandler2}>
          <option>Student</option>
          <option>Caretaker</option>
          <option>Warden</option>
          <option>Dean</option>
        </select> */}
        <input type="file" className="m-2" onChange={onchangeHandler} />
        <input type="button" className="bg-slate-200 rounded-lg p-3 hover:bg-slate-300 cursor-pointer" onClick={SendDataToBackend} value={"Click me"}/>
      </div>
    </>
  );
}
