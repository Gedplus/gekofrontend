import React from "react";
import CountUp from 'react-countup';
import InsightsIcon from '@mui/icons-material/Insights';
import StoreIcon from '@mui/icons-material/Store';
import GroupIcon from '@mui/icons-material/Group';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
const CardCounter =()=>{
    return(
        <div class="content">
  <div className="wrapper1"  >
        
                    
                    <div className="container2">
                    <FormatColorFillIcon className="i"  style={{ fontSize: 60 }} /> 
                      <span className="num" data-val="40"><CountUp enableScrollSpy duration={2} end={40}/></span>
                    <span className="text">Produits</span></div>
                    <div className="container2">
                    <GroupIcon className="i" style={{ fontSize: 60 }} /> 
                      <span className="num" data-val="1000"><CountUp  end={1000} enableScrollSpy duration={2}/></span>
                    <span className="text">Clients satisfaits</span></div>
                    <div className="container2">
                    <StoreIcon className="i"  style={{ fontSize: 60 }} /> 
                      <span className="num" data-val="300"><CountUp   enableScrollSpy duration={2} end={300}/> </span>
                    <span className="text">Revendeurs</span></div>
                    
                    
                    
                    
                    
                    </div> 
</div>


    )
}
    export default CardCounter;