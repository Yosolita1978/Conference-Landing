import Image from "next/image"

export default function Card({ name, company, catchPhrase }) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="w-full h-56 flex justify-center items-center bg-gray-100">
        <Image 
        src="/avatar.png"
        width={150}
        height={150}
         alt={name} 
         className="w-24 h-24 object-cover rounded-full" />
      </div>
        <div className="p-4">
          <h3 className="text-black text-lg font-bold">{name}</h3>
          <p className="text-black text-muted-foreground">Company: {company}</p>
          <p className="text-black text-sm mt-2">{catchPhrase}</p>
        </div>
      </div>
    );
  }