import react from "react";

const Button = (props) => {
  const { children } = props;

  const handleClick = (props) => {
    console.log('the button was Clicked!!')
  }
  console.log(props);
  return (<>


    <button onClick={handleClick}>
     
    </button>
  </>
  )
}

export default Button;
//
