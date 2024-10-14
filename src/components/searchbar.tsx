"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
 
export function Searchbar() {
  return (
    <div className="flex w-full max-w-sm items-center pr-3 ">
      <Input type="keyword" placeholder="Rechercher..." className="rounded-r-none h-[4.4vh] w-[10.7vw] sm:h-11"/>
      <Button type="submit" className="rounded-l-none bg-transparent text-black border-r border-t border-b border-gray-200 hover:bg-gray-200 sm:h-11 sm:w-11 w-[10vh] h-[10vh]">
          <Search className="text-gray-500"/>
      </Button>
    </div>
  )
}