import { Button, Stack, TextField, Typography } from "@mui/material"
import { useForm, type SubmitHandler } from "react-hook-form"

type AsideFormValues = {
  name: string
  phone: string
}

export const AsideForm = () => {
  const { 
      register, 
      handleSubmit, 
      formState: {
        dirtyFields, 
        errors,
      } } = useForm<AsideFormValues>({
    mode: "onBlur",
  })
  const onSubmit: SubmitHandler<AsideFormValues> = (data) => {
    console.log(data)
    console.log(dirtyFields)
    console.log(errors)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
    <Stack spacing={2} sx={{ margin: "60px 8px 0"}}>
      <Typography sx={{textAlign: "center"}} variant="h3">Contact information</Typography>
      <TextField 
        id="outlined-basic" 
        label="name" 
        variant="outlined"
        type="text"
        required
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
        {...register("name", {
          required: "Name field is required",
        })}
      />
      <TextField 
        id="outlined-basic" 
        label="phone" 
        variant="outlined"
        type="tel"
        required
        error={Boolean(errors.phone)}
        helperText={errors.phone?.message}
        {...register("phone", {
          required: "Phone field is required",
          pattern: {
            value: /^\+?[0-9\s()-]{7,20}$/,
            message: "Enter a valid phone number",
          },
        })}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Stack>
    </form>
  )
}
