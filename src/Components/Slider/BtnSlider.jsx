import  React from 'react'
import './slider.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
const BtnSlider = ({direction , moveSlide}) => { 
    console.log()
return(
   <button onClick={moveSlide} className={direction === "next" ? 'button-58 next': 'button-58 prev'} >
{direction=== "next" ?<><EastIcon style={{fontSize:" 40px "}} /> <span><EastIcon  style={{fontSize:" 40px "}}/></span> </>:<><WestIcon style={{fontSize:" 40px "}} /><span><WestIcon style={{fontSize:" 40px "}}/></span></>}
   </button>
)
}
export default BtnSlider