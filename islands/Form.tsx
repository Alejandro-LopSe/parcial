import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import {Defs} from "../components/Defs.tsx"


export type dic = {
    word: string
    meanings?: [{
        definitions?: [{
            definition?: string
            example?: string
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
        }else{
            api()
        }
        
    }

    const api = async ()=>{
            const apiresponse =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
            if(apiresponse.status!==200){
                setresponse([{word: word || ""}])
            }else{
                const data: dic []=await apiresponse.json()            
                setresponse(data)
                seterror("")
            }
            

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
            <Defs definitions={response}/>
        </div>
    )
}