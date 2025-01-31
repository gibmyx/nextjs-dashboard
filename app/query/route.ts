// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listInvoices() {
// 	const data = await client.sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

// 	return data.rows;
// }

// export async function GET() {
//   return Response.json({
//     message:
//       'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   });
  // try {
  // 	return Response.json(await listInvoices());
  // } catch (error) {
  // 	return Response.json({ error }, { status: 500 });
  // }
// }
//
// import { createClient } from '@supabase/supabase-js';
//
// const supabaseUrl = process.env.SUPABASE_URL || '';
// const supabaseKey = process.env.SUPABASE_KEY || '';
// const supabase = createClient(supabaseUrl, supabaseKey);
//
// async function listInvoices() {
//   const { data, error } = await supabase
//       .from('invoices')
//       .select('amount, customers(name)')
//       .eq('amount', 666);
//
//   if (error) {
//     throw error;
//   }
//
//   return data;
// }
//
// export async function GET() {
//   try {
//     const data = await listInvoices();
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error: any) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }
