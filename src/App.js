import ImageGrid from './components/ImageGrid';
import UploadImage from './components/UploadImage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="w-[960px] mx-auto h-90">
      <Navbar />
      <hr />
      <div className="mt-4">
        <UploadImage />
        <ImageGrid />
      </div>
    </div>
  );
}

export default App;
