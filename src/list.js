import React from "react";
import File from "./file.js"

function List(props) {
return (
    <div >
    {props.files.map(f => <File key={f.id} name={f.name} />)}
     </div> 
  ); 
} 

export default List;
