/**
 * This file has all routes for '/api/admin/'
 */
import { acceptRejectAssignment, getAssignments, registerAdmin } from "@/services/dbServices";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import { NextResponse } from "next/server";


/**
 * POST method
 * params.slug -> has trailing url path, which is used to provide specific response to the request.
 */
export async function POST(request,{params}) {
    //Request body for POST method.
    const req = await request.json();

    if(params.slug){
        // To register the admin to database
        if(params.slug[0]==='register'){
            const result = await registerAdmin(req);
            return NextResponse.json(result);
        }
        //For Admin, to 'ACCEPT' the task/assignment.
        else if(params.slug.length!==1 && params.slug[1]==='accept'){
            const result = await acceptRejectAssignment(true,params.slug[0]);
            return NextResponse.json(result);
        }
        //For Admin, to 'REJECT' the task/assignment.
        else if(params.slug.length!==1 && params.slug[1]==='reject'){
            const result = await acceptRejectAssignment(false,params.slug[0]);
            return NextResponse.json(result);
        }
        //If No Path matched, responds as "Invalid Path" 
        else{
            return NextResponse.json("Invalid Path");
        }
    }else{
        return NextResponse.json("Invalid Path");
    }
}

/**
 * GET method
 * params.slug -> has trailing url path, which is used to provide specific response to the request.
 */
export async function GET(request,{params}) {
    //Query from GET request.
    const req = parseUrl(await request.url).query;

    //Returns assignments for particular admin.
    if(params.slug && params.slug[0]==='assignments'){
        const result = await getAssignments(req.admin);
        return NextResponse.json(result);
    }
    //If No Path matched, responds as "Invalid Path" 
    else{
        return NextResponse.json("Invalid Path");
    }
}