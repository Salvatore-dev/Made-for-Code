
import connectDb from '@/app/connectDb';
import { RowDataPacket } from 'mysql2';
import { NextRequest } from 'next/server';


// SELECT students.firstname, students.lastname, skills.skill_name
// FROM students
// JOIN skill_students ON students.id = skill_students.student_id
// JOIN skills ON skill_students.skill_id = skills.id;

export async function GET(request: NextRequest, response : any): Promise<Response> {   
    try {
      const [rows] = await connectDb.query(`
      SELECT 
          students.id,
          students.firstname,
          students.lastname,
          students.avg,
          GROUP_CONCAT(skills.skill) AS skills
      FROM students
      LEFT JOIN students_skills ON students.id = students_skills.id_student
      LEFT JOIN skills ON students_skills.id_skill = skills.id
      GROUP BY students.id
  `);
      return new Response(JSON.stringify(rows));
    } catch (error) {
        return new Response(JSON.stringify({error: true}));
    }
}

export async function POST(request: NextRequest, response : any) : Promise<Response> {
    const data = await request.json()
    console.log("vedi skill in seever", data.skills); // questo e' un arrai di oggetti che puo essere vuoto se non ha skills, oppure sono presenti oggetti che hanno una skill {name}, un id_skill{ number}
    const skills = data.skills || []
    try {
        const [studentRuesult] = await connectDb.query(
            'INSERT INTO students (firstname, lastname, avg) VALUES (?, ?, ?)', 
            [data.firstname, data.lastname, data.avg]);

            const studentId = studentRuesult.insertId 

            for (const skill of skills) {
                const [skillResult] = await connectDb.query(
                    'INSERT INTO students_skills (id_student, id_skill) VALUES (?, ?)',
                    [studentId, skill.id_skill]
                );
                console.log(skillResult);
                
            }

        return new Response(JSON.stringify({ success: true, message: 'Record inserted' }));
    } catch (error) {
        return new Response(JSON.stringify({ error: true }));
    }
}