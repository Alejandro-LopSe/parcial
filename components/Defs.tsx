import { FunctionComponent } from "preact";
import { dic } from "../islands/Form.tsx";


export const Defs: FunctionComponent<{definitions: dic[] | undefined}> = ( {definitions})=>{
    return(
        <>{definitions && <ul class="in">
        <h1>{definitions[0].word}</h1>
            {definitions.map((elem:dic)=>{ 
                
                return(elem.meanings.map((elem2)=>{
                    return (elem2.definitions.map((elem3)=>{
                        {console.log(elem3.definition,elem3.example)}
                        return(
                            <li class="inp">
                                
                                <p>
                                    <p><h3>Definition:</h3><br/> {elem3.definition}</p>
                                    <p><h3>Example:</h3><br/> {elem3.definition}</p>
                                </p>
                            </li>)
                    }))
                }))
                
                
            })}
            </ul>}</>
    )
}