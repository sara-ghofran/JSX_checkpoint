
import './Style.css';
import imageInSrc from './imageInSrc.jpeg'

function App() {
  return (
    <>
  <div className=" container">
    <h1 className="title red">Sara Khaldi</h1>
    <br />
    <img src={imageInSrc} width={400} height={400}/>
    <br />
    <img src="/imageInPublic.jpeg" width={400} height={400}/>
  </div>
  <video width={800} height={300} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
  );
}

export default App;
