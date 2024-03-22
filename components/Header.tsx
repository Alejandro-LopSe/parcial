import { FunctionComponent } from "preact";


export const Header: FunctionComponent = ( )=>{
    return(
        <div class="centro">
            <div>
            <a href="/wordcsr"> Client Side</a>
            <a href="/wordssr"> Server Side</a>
            </div>
            <h1>My Dictionary</h1>
        </div>
    )
}