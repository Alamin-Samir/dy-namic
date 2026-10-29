import { NextResponse } from 'next/server';

export async function POST(request) {
    const body = await request.json();
    
    // এখানে ডেটাবেজে সেভ করার কোড লেখা হয় (বর্তমানে শুধু কনসোল বা রেসপন্স দেখাচ্ছি)
    console.log("Received User Data:", body);

    return NextResponse.json({ 
        message: `User ${body.name} added successfully!`, 
        data: body 
    });
}