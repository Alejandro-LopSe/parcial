import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";


type dic = {
    word: string
    meanings: [{
        definitions: [{
            definition: string
            example: string
        }]
    }]
}
export const Form: FunctionComponent = ( )=>{
    const [ word, setword ] =useState<string>()
    const [ error, seterror ] =useState<string>()
    const [response, setresponse] =useState<dic[]>()

    const check =  ()=>{
        if(!word || word===""){
            seterror("Please enter a word")
        }
        api()
    }

    const api = async ()=>{
            const apiresponse =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
            const data: dic []=await apiresponse.json()
            setresponse(data)
            seterror("")

    }
    return(
        <div class="nul">
            <div class="in">
            <div class="divin">

                <input type="text" placeholder="Type a word" value={""} onBlur={(e)=>{setword(e.currentTarget.value)}} onInput={()=>{seterror("")}} />
                <button type="button" onClick={(e)=>{check()}}> search</button>
                
            </div>
            {error && <p class="error">{error}</p>}
        </div>
        {response && <ul class="in">
            <h1>{word}</h1>
                {response.map((elem:dic)=>{ 
                    
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
                </ul>}
        </div>
    )
}