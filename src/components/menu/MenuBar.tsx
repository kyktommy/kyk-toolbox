import Link from 'next/link'

import { toolsMenu } from '@/app/constants/menu'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'

const MenuBar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          {toolsMenu.map((item, idx) => (
            <Link key={item.title} href={item.url}>
              <MenubarItem>{item.title}</MenubarItem>
              {idx !== toolsMenu.length - 1 && <MenubarSeparator />}
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default MenuBar
