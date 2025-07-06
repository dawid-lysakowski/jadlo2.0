import Image from "next/image";

export default function MainPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-blue-500 p-1.5"> 
        <h1 className = "text-center">
          Dynamic section about news etc.
        </h1>
      </div>

      <div className="bg-green-500 p-6">
        <h2 className="text-center">
          Following menu
        </h2>
      </div>

      <div className="flex bg-yellow-100 min-h-[750px]">
        <div className="w-1/2 bg-red-500 p-12">
          Left column
        </div>
        <div className="w-3/4 bg-gray-500 p-12">
          Right column
        </div>
      </div>

      <div className="bg-purple-500 p-6 min-h-[500px]">
      </div>
      
      <div className="bg-yellow-500 p-20">
        Footer
      </div>
    </main>
  );
}
