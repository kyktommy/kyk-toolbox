export interface IHeaderProps {
  title: string
  subtitle?: string
}

const FormHeader = (props: IHeaderProps) => {
  const { title, subtitle } = props

  return (
    <div className="flex flex-col space-y-1.5">
      <div className="font-semibold leading-none tracking-tight">{title}</div>
      {!!subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}

export default FormHeader
