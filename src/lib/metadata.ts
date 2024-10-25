import { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const baseMetadata: Metadata = {
  title: 'kyk toolbox',
  description: 'Tools that kyk uses',
}

type MetadataInput = {
  title: string
  description: string
}

export const createMetadata =
  (input: MetadataInput) =>
  (props: Props): Metadata => {
    const title = 'kyk toolbox - ' + input.title
    return { ...baseMetadata, title, description: input.description }
  }
