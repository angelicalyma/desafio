function ClienteV2 (props){
return (<div key={props.item.id} className="pacientes">
    <div className="quadrado"> <button className="botao">Detalhes</button>{props.item.city}</div>
    {props.item.email} 
    
   
    </div>)
}
export default ClienteV2