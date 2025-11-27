// import { Search } from "lucide-react"
// import { Input } from "@/components/ui/input"

export function BlogHeader() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-black text-center font-bold mb-2 text-5xl lg:text-5xl">
            InnovateHealth Africa Blog</h1>
          <p className="text-gray-600 mb-12">Latest updates and happenings inside InnovateHealth Africa.</p>
          {/*
          <div className="max-w-md mx-auto relative mt-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input placeholder="Search..." className="pl-10 bg-gray-100 border-0 rounded-full" />
          </div> */}
        </div>
      </div>
    </header>
  )
}
