import { Button, Stack, TextField } from "@mui/material"
import { useForm, type SubmitHandler } from "react-hook-form"

type AsideFormValues = {
  email: string
  name: string
}

export const AsideForm = () => {
  const { register, handleSubmit } = useForm<AsideFormValues>({
    mode: "onChange",
    // defaultValues: {email: "test"}
  })

  const onSubmit: SubmitHandler<AsideFormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
    <Stack spacing={2} sx={{ margin: "60px 8px 0"}}>
      <TextField 
        id="outlined-basic" 
        label="email" 
        variant="outlined"
        type="email"
        {...register('email', {
          required: 'This field is required'
        })}
      />
      <TextField 
        id="outlined-basic" 
        label="name" 
        variant="outlined"
        type="name"
        {...register('name', {
          required: 'This field is required'
        })}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Stack>
    </form>
  )
}