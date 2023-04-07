import { useEffect, useRef, useState } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const onUploadClick= ()=>{
    fileInputRef.current.click();
  }

  useEffect(()=>{
    const getImage = async ()=>{
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

      let response = await uploadFile(data);
      setResult(response.path);
      }
    }
    getImage();
  },[file])

  const logo = 'https://i.pinimg.com/236x/80/3e/5f/803e5fba4438c055b14a7ac15ecb5bad.jpg'
  return (
    <div className="App">
      <img src={logo} alt='banner' className='img'/>
      <div className='wrapper'>
       <h1>File Sharing Application</h1>
       <p>Upload and share the download link</p>

       <button onClick={()=>{onUploadClick()}}>Upload</button>
       <input type="file"
       ref={fileInputRef}
       style={{display:'none'}}
       onChange={(e)=> setFile(e.target.files[0])}
       />

       <a href={result} target='_blank'>{result}</a>
      </div>
    </div>
  );
}

export default App;
