const child1 = React.createElement('p',{},"hello world!")
const div = React.createElement('div',{className:"text"},{child1},"hello world react");
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(div);

