// UseLayout in React.js 
 import { useLayoutEffect , useState,useEffect , useRef} from "react";



 function Tooltip(){
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height); // Re-render now that you know the real height
  }, []);
 }

 // Mesure the layout before the browser repaints the screen 

 // --> most component document't need to know their position and size on the screen to decide what to render tey only return some JSX then the browser calculates their layout andrepaints the screen 


 // render the tooltip componenet anywhere 
 // Measure its height and width to decide where to place  the tooltip component 
