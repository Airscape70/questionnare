import { Button, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/IAuth";
import { useStoreUser } from "../store/store";
import { TEXT_FIELDS } from "../constants/fieldsConstants";
import { StyledContainer } from "./pagesStyles/authStyles";
import { TextFieldInput } from "../components/form/inputFields/TextFieldInput";
import { formStyle } from "../components/form/GeneralForm";

export default function RemindPage() {
  const navigate = useNavigate();
  const methods = useForm<IUser>({ mode: "onBlur" });
  const users = useStoreUser((state) => state.users);
  const phoneField = TEXT_FIELDS.filter((f) => f.name === "phoneNumber");

  const onSubmit: SubmitHandler<IUser> = (data) => {
    const user = users?.find((u) => u.phoneNumber === data.phoneNumber);

    if (!user) {
      alert("Пользователь с данным номером не зарегистрирован");
    } else {
      alert(`Ваш пароль: ${user.password}`);
      navigate("/login");
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h5" component="div" gutterBottom={true}>
        Введите ваш номер телефона
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} style={formStyle}>
          {phoneField.map((f) => (
            <TextFieldInput
              key={f.name}
              name={f.name}
              label={f.label}
              type={f.type}
              pattern={f.pattern}
              errorMessage={f.errorMessage}
            />
          ))}

          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{ mt: 2 }}
          >
            Показать пароль
          </Button>
        </form>
      </FormProvider>
    </StyledContainer>
  );
}