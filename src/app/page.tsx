import Link from 'next/link'

import FormHeader from '@/components/form/FormHeader'
import MenuBar from '@/components/menu/MenuBar'
import { Button } from '@/components/ui/button'

import { favTools } from './constants/tools'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20">
      <div className="w-full max-w-96 mb-8">
        <MenuBar />
      </div>
      <div className="w-96">
        <FormHeader title="kyk's toolbox" />
        <div className="flex flex-col space-y-2 mt-8">
          <div className="text-md">Popular Tools</div>
          {favTools.map((tool) => (
            <Link key={tool.title} href={tool.url}>
              <Button>{tool.title}</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
