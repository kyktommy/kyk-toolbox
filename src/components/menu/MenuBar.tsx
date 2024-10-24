import Link from 'next/link'

import { fileMenu, toolsMenu } from '@/app/constants/menu'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'

interface IMenuItemXProps {
  title: string
  items: typeof toolsMenu
}

const MenuItemX = (props: IMenuItemXProps) => {
  const { title, items } = props
  return (
    <MenubarMenu>
      <MenubarTrigger>{title}</MenubarTrigger>
      <MenubarContent>
        {items.map((item, idx) => (
          <Link key={item.title} href={item.url}>
            <MenubarItem>{item.title}</MenubarItem>
            {idx !== props.items.length - 1 && <MenubarSeparator />}
          </Link>
        ))}
      </MenubarContent>
    </MenubarMenu>
  )
}

const MenuBar = () => {
  return (
    <Menubar>
      <MenuItemX title="File" items={fileMenu} />
      <MenuItemX title="Tools" items={toolsMenu} />
    </Menubar>
  )
}

export default MenuBar
