"use client"
import { useEffect,useState } from "react"

interface Issues{
    subject:string,
    efforts:any,
    desription:string,
    priority:string,
    status:string,
    name:string

}
export default function Issues(){
const [items,setItems] = useState<Issues[]>([]);

useEffect(()=>
{async function fetchIssues() {
    try{
const res = await fetch("api/get_from_lens")
const ld_data =await res.json();
setItems(ld_data.message?.issues || [])
    }catch(error){
console.error(error)
    }
}
fetchIssues()}
)

return(
<><div className="main">
    {items.map((item)=>(
        <div className="data-div" key={item.name}>
<p>{item.subject}</p>
<p>{item.status}</p>
<p>{item.desription}</p>
<p>{item.priority}</p>
<p>{item.efforts}</p>
        </div>
    ))
    }
    </div></>
)

}