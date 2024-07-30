import Card from "@/components/Card/card";

// this is the Page for the Users server component


async function getData (){
  const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
  );
  return res.json();
}

async function UserStatus(){
  const data = await getData();
  return (
    <div className="p-6 bg-[#a9e3fe] rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-center mb-4 text-orange-500">Speakers at TechConMe 2024</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          company={user.company.name}
          catchPhrase={user.company.catchPhrase}
        />
      ))}
    </div>
  </div>
  )
}

export default function Page(){
  return (
      <main>
          <UserStatus />
      </main>
  );
}