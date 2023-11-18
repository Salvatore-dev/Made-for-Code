import connectDb from '@/app/connectDb';
import { NextRequest } from 'next/server';

export async function DELETE(request: NextRequest, response : any) : Promise<Response> {
    const id = response.params.id
    console.log(id);

    try {
        // Inizia una transazione per garantire atomicità delle operazioni
      // await connectDb.query('START TRANSACTION');

        // Elimina le associazioni dello studente dalla tabella students_skills
      // await connectDb.query('DELETE FROM students_skills WHERE id_student=?', [id]);

        const resp = await connectDb.query(
            'DELETE FROM students WHERE id=?', [id]) 
            const affectedRows = resp[0].affectedRows
            console.log("vedi qui", );
            
        
            if (affectedRows > 0) {
                // Conferma la transazione se la rimozione ha avuto successo
             //   await connectDb.query('COMMIT');
                return new Response(JSON.stringify({ success: true, message: 'Record deleted' }));
            } else {
                // Annulla la transazione se la rimozione non ha avuto successo
             //    await connectDb.query('ROLLBACK');
                return new Response(JSON.stringify({ success: true, message: 'No record deleted' }));
            }
    } catch (error) {
       // await connectDb.query('ROLLBACK');
        return new Response(JSON.stringify({ error: true }));
    }
}