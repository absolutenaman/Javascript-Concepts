import './App.css';

function throttle(func,delay){
  let lasttimeExecuted=0;
  return function(...args){
   let currtime=new Date().getTime();
    if(currtime-lasttimeExecuted<delay) return;
    lasttimeExecuted=currtime;
    console.log(lasttimeExecuted);
    func.apply(this,args);
  }
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
    console.log(timeoutId);
  };
}
function loggingData(){
  console.log("Hello");
}
const debouncedButtonClick=debounce(loggingData,300);
const throttledButtonClick=throttle(loggingData,3000);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button type='submit' onClick={throttledButtonClick}>MyButton</button>
      </header>
    </div>
  );
}

export default App;
