import MediumForm from '@/components/form/MediumForm'
import BaseLayout from '@/layouts/BaseLayout'
import { createMetadata } from '@/lib/metadata'

export const generateMetadata = createMetadata({
  title: 'Medium tool',
  description: 'A tool to read Medium premium articles',
})

export default function Page() {
  return (
    <BaseLayout>
      <MediumForm />
    </BaseLayout>
  )
}
