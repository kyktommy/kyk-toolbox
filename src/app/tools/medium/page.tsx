import MediumForm from '@/components/form/MediumForm'
import MenuBar from '@/components/menu/MenuBar'

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20">
      <div className="w-full max-w-96 mb-8">
        <MenuBar />
      </div>
      <div className="w-96">
        <MediumForm />
      </div>
    </div>
  )
}
