import Components2 from "./Components2";

function Components1(props){
    console.log(props, 'props')
    
    return <div>
        <h1>Componets1</h1>
        <Components2 color={props.color} name="my name is Ann" />
    </div>
}

export default Components1;