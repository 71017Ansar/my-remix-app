import React from "react";

function Alertbutton({message, childern}:any){
    return(
            <button className="bg-orange-600 p-4" onClick={()=>{
                alert(message);
            }}>
                {childern}
            </button>
    )
}
export default Alertbutton