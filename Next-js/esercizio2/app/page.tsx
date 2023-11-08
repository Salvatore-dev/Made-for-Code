import Link from "next/link";

export default function Home() {
  return (
    <section className=" flex justify-center items-center h-16  bg-slate-500">

      <div>
        <Link className=" bg-white text-center text-xl font-semibold border rounded-lg p-3" href={`/products`}>Tutti i prodotti</Link>
      </div>
      
    </section>
  )
}
