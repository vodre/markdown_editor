import React from "react";

function File(props) {
 return (
 <div className="file">
 	<tr>
		<td><img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49314/preview.svg" height="25"/></td>
    	<td><span>{props.name}</span></td>
    </tr>

    <hr></hr>
  
 </div>
 );
}

export default File;