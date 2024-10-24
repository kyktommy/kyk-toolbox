import { PropsWithChildren } from 'react'

import MenuBar from '@/components/menu/MenuBar'

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="w-full max-w-96 mb-8">
        <MenuBar />
      </div>
      <div className="w-full max-w-96">{children}</div>
    </div>
  )
}
