'use client'

import { useForm } from 'react-hook-form'

import FormHeader from '@/components/form/FormHeader'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type MediumFormProps = {
  url: string
}

const MediumForm = () => {
  const form = useForm<MediumFormProps>({
    defaultValues: {
      url: '',
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    const { url } = data
    window.open('https://archive.ph/' + url, '_blank')
  })

  return (
    <Form {...form}>
      <FormHeader title="Medium tool" subtitle="read premium articles" />
      <form className="w-full space-y-4 mt-4" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medium article URL</FormLabel>
              <FormControl>
                <Input placeholder="https://medium.com/..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">read</Button>
      </form>
    </Form>
  )
}

export default MediumForm
