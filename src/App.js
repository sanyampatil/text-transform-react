import logo from './logo.svg';
import './App.css';
import Textform from './Textform';

function App() {
  return (
   <>
      <main>
        <div className="bg-info-subtle w-100 p-3 h-100 d-inline-block d-inline-block border bg-primary text-light ">
          <h1 className='fs-1 text-center '>Text Transformation</h1>

        </div>
      </main>


      <div className="container my3">

        <Textform heading="Enter the text to analyze below" />
      </div>

   </>
  );
}

export default App;
