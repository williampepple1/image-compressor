import imageCompression from 'browser-image-compression';

const Body = () => {
  return (
    <div className="flex justify-center flex-col space-y-24 items-center h-screen text-4xl font-extrabold text-slate-700">
    <h1>Compress Jpeg/PNG pictures</h1>      
    <input type="file" accept="image/*" onchange="handleImageUpload(event)" />
    </div>
  )
}

export default Body