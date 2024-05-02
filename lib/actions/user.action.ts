"use server";

import User from "@/lib/models/user.models"
import {connectToDatabase} from "@/lib/db";

export async function createUser(user:any) {
    try{
        await connectToDatabase();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
        
    } catch (error)
    {
        console.log(error);
    }
    
    
}