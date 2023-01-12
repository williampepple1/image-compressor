import imageCompression from 'browser-image-compression';
import { useState } from "react";

const Body = () => {
    const [fileToBeCompressed, setFileToBeCompressed] = useState({
      compressedLink: "https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-download-icon-image_1344466.jpg",
      originalImage: "",
      originalLink: "",
      clicked: false,
      uploadImage: false
  })

  const onChange = (e) => {
    setFileToBeCompressed((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  } 

  const handle = (e) => {
    const imageFile = e.target.files[0];
    console.log(imageFile)
    setFileToBeCompressed({
      originalLink: URL.createObjectURL(imageFile),
      originalImage: imageFile,
      outputFileName: imageFile.name,
      uploadImage: true
    })
  }

  const onClick = (e) => {
    e.preventDefault()

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 800,
      useWebWorker: true
    };

    if (options.maxSizeMB >= fileToBeCompressed.originalImage.size / 1024) {
      alert("Bring a bigger image");
      return 0;
    }

    let output;
    imageCompression(fileToBeCompressed.originalImage, options).then(x => {
      output = x;

      const downloadLink = URL.createObjectURL(output);
      setFileToBeCompressed({
        compressedLink: downloadLink
      });
    });

    setFileToBeCompressed({ clicked: true });
    return 1;


  }


  return (
    <div className="flex w-screen justify-center flex-col space-y-24 items-center h-screen text-2xl font-extrabold text-slate-700">
      <h1 className="mt-4">Compress Jpeg/PNG pictures</h1>    
        <div className="flex flex-row justify-between ">
          <div >

          {
            fileToBeCompressed.uploadImage ? (
            <img className="w-48" src={fileToBeCompressed.originalLink}/>
            
            ) : (<img className="w-24" src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-download-icon-image_1344466.jpg"/>)
          }
          <div className="flex justify-content">
          <input
            type="file"
            accept="image/*"
            className="mt-2 btn btn-dark w-75"
            onChange={e => handle(e)}
          />
        </div>
          </div>
          <div  className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-gray-600 hover:bg-gray-50"
          >
          {fileToBeCompressed.outputFileName ? (
            <button type="button" className="bg-red" onClick={e => onClick(e)}>Compress </button>
          ) : (<div></div>)}
          
          </div>
          <div>
          <img className="w-24" src={fileToBeCompressed.compressedLink}/>
          {fileToBeCompressed.clicked ? (
            <div className="flex justify-center items-center">
            <a
              href={fileToBeCompressed.compressedLink}
              className="mt-2"
              download={fileToBeCompressed.outputFileName}
            >
            Download
            </a>
            
            </div>) : (<div></div>)}
          </div>
      
      </div>
    </div>
  )
}

export default Body