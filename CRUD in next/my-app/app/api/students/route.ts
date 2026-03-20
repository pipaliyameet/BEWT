import { NextResponse } from "next/server";

const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 21 },
];

export async function GET() {
    const studentList = students.map(student => ({
        id: student.id,
        name: student.name,
        age: student.age,
    }));

    return NextResponse.json(studentList);
}

export async function POST(request: Request) {
    const { name, age } = await request.json();
    const newStudent = {
        id: students.length + 1,
        name,
        age,
    };
    students.push(newStudent);
    return NextResponse.json(newStudent, { status: 201 });
}