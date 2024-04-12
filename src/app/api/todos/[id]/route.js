import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql'

export async function GET(request, { params }) {
    try {
        const result = await conn.query('SELECT * FROM task WHERE id = ?', [params.id]);

        if (result.length === 0) {
            return NextResponse.json({
                message: "Tarea no encontrada"
            },
                {
                    status: 404,
                })
        }
        return NextResponse.json(result[0]);
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            })
    }
}

export async function DELETE(request, { params }) {
    try {
        const result = await conn.query('DELETE FROM task WHERE id = ?', [
            params.id,
        ]);

        if (result.affectedRows === 0) {
            return NextResponse.json({
                message: "Tarea no encontrada",
            },
                {
                    status: 404,
                }
            )
        }

        return new Response(null, {
            status: 204
        })
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            })
    }
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        const result = await conn.query("UPDATE task SET ? WHERE id = ?", [
            data,
            params.id,
        ]);

        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                    message: "Tarea no encontrada",
                },
                {
                    status: 404,
                }
            )
        }

        const updateTask = await conn.query('SELECT * FROM task WHERE id = ?', [params.id]);

        return NextResponse.json(updateTask[0]);
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            })
    }
}