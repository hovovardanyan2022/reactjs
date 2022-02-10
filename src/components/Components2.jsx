import react from "react";
import {useContext} from 'react';
import Colorcontext from "../context";
function Components2(props){
    const data=useContext(Colorcontext);
    console.log(data, "data");
    console.log(props, 'props component2')
    return <div>
        <h1>Componets2</h1>
        <h3>{data}</h3>
        
    </div>;
}
export default Components2;