import { NextResponse } from 'next/server';
import { conn } from '@/libs/mysql'

export async function GET() {
    try {
        const results = await conn.query('SELECT * FROM task')
        return NextResponse.json(results)
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        )
    }
}

export async function POST(request) {
    try {
        const { name, description } = await request.json();

        const result = await conn.query("INSERT INTO task SET ?", {
            name,
            description
        }
    );

        return NextResponse.json({
            name,
            description,
            id: result.insertId,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        )
    }
}