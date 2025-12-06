import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const res = await fetch ("<site>/api/method/get_order",
            method:"GET",
            headers:"application/json"
        )
        const data = await res.json()
        return NextResponse.json(data)
    }
    catch(){
        console.log("fetch failed")
    }
}