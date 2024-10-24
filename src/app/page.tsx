import Link from 'next/link'

import FormHeader from '@/components/form/FormHeader'
import { Button } from '@/components/ui/button'
import { favTools } from '@/constants/tools'
import BaseLayout from '@/layouts/BaseLayout'

export default function Home() {
  return (
    <BaseLayout>
      <FormHeader title="kyk's toolbox" />
      <div className="flex flex-col space-y-2 mt-8">
        <div className="text-md">Popular Tools</div>
        {favTools.map((tool) => (
          <Link key={tool.title} href={tool.url}>
            <Button>{tool.title}</Button>
          </Link>
        ))}
      </div>
    </BaseLayout>
  )
}
