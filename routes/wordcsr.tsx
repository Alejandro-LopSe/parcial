import { useState } from "preact/hooks";
import { Header} from "../components/Header.tsx"
import { Form } from "../islands/Form.tsx";



export default function Page(){

    

    return (
        <body>
            <Header></Header>
            <Form></Form>
        </body>
    )
}