import { NextResponse } from "next/server";

const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 21 },
];

// params: Promise<{ team: string }> 
export async function GET(request: Request, {params}: {params: Promise<{ id : string}>}) {
    const { id } = await params;

    const student = students.find(s => s.id === parseInt(id));
    if (student) {
        return NextResponse.json(student);
    } else {
        return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }
}

export async function PUT(request: Request, {params}: {params: Promise<{ id : string}>}) {
    const { id } = await params;
    const { name, age } = await request.json();

    const studentIndex = students.findIndex(s => s.id === parseInt(id));
    if (studentIndex !== -1) {
        students[studentIndex] = { id: parseInt(id), name, age };
        return NextResponse.json(students[studentIndex]);
    } else {
        return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }
}

export async function DELETE(request: Request, {params}: {params: Promise<{ id : string}>}) {
    const { id } = await params;

    const studentIndex = students.findIndex(s => s.id === parseInt(id));
    if (studentIndex !== -1) {
        const deletedStudent = students.splice(studentIndex, 1);
        return NextResponse.json(deletedStudent[0]);
    } else {
        return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }
}   