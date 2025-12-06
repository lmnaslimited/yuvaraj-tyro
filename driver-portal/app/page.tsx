"use client"

import { useEffect,useState } from "react"
import Link from "next/link"

interface Order {
  order_no: string,
  distance:string,
  status:string
}

export default function Home(){
  const [items, setItems] = useState<Order[]>([]);

  useEffect(()=>{

    async function fetchItems() {
      try{
        const res = await fetch("api/get_order/route.ts")
        const data = await res.json();
        setItems(data.message?.orders)

      } catch(error) {
        console.error("Error fetching orders:", error)
      }
    }

    fetchItems()
  }, [])

  return <main>
        <div className="card">
          {items.map(item)=>(
            <Link className="order_name" href={`update_page/`{order_id}} key={items.order_id} >
            <p>{items.order_id}</p>
            <select name="status" id="">
              <option value="waiting">waiting</option>
              <option value="picked">picked</option>
              <option value="out for delivery">out for delivery</option>
              <option value="deliverd">delivered</option>
            </select>
            </Link>
            )}

        </div>
    </main>
}
