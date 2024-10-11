/**
 * This file has all routes for '/api/user/'
 */

import {  getAllAdmins, loginUserAdmin, registerUserAdmin, uploadTask } from "@/services/dbServices";
import { NextResponse } from "next/server";


/**
 * POST method
 * params.slug -> has trailing url path, which is used to provide specific response to the request.
 */
export async function POST(requests,{params}) {
    //Request body for POST request.
    const req = await requests.json();

    //For User, to upload the task/assignment.
    if(params.slug==='upload'){
        const result = await uploadTask(req);
        return NextResponse.json(result);
    }
    //If No Path matched, responds as "Invalid Path" 
    else{
        return NextResponse.json({message:"Invalid Path"});
    }
}


/**
 * GET method
 * params.slug -> has trailing url path, which is used to provide specific response to the request.
 */
export async function GET(requests,{params}) {

    //Returns all the 'admins' present in database.
    if (params.slug==='get-admins') {
        const result = await getAllAdmins();
        return NextResponse.json(result);
    }
    //If No Path matched, responds as "Invalid Path" 
    else{
        return NextResponse.json({message:"Invalid Path"});
    }
}