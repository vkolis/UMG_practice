import { TextField } from "@mui/material"
import { useForm, type SubmitHandler } from "react-hook-form"

type AsideFormValues = {
  email: string
}

export const AsideForm = () => {
  const { register, handleSubmit } = useForm<AsideFormValues>({
    mode: "onChange"
  })

  const onSubmit: SubmitHandler<AsideFormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <TextField 
        id="outlined-basic" 
        label="email" 
        variant="outlined"
        sx={{ margin: "60px 8px"}}
        {...register('email', {
          required: 'This field is required'
        })}
      />
    </form>
  )
}