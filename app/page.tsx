import Impressum from '@/components/Impressum'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* GIF Section */}
      <div className="flex-1 flex items-center justify-center bg-black w-full h-screen overflow-hidden">
        <img 
          src="/images/ps-gif-website.gif" 
          alt="Pocket Service" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Impressum Section */}
      <Impressum />
    </main>
  )
}
