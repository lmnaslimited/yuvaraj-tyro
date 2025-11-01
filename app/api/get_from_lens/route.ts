import { error } from "console";
import { NextResponse } from "next/server";
export async function GET() {
    try{
        const res= await fetch("https://curly-bassoon-7v467rq7944gfp76q-8080.app.github.dev/api/method/get_issues",{
            method:"GET",
            headers:{
                "content_type":"application.json",
                "Authorization": ""
            },
            cache:"no-store"
        })

        if(!res.ok) throw new Error ("Failed to fetch")
            const ld_data=await res.json
        return NextResponse.json(ld_data
        )
    }catch{
        let err="unknown err"
        if(error instanceof Error)err
        return NextResponse.json({error:err})
    }
    
    
}