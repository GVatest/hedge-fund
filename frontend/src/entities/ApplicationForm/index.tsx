import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { ErrorResponse } from "shared/types";
import { alerts } from "shared/utils";
import * as Yup from "yup";
import { useSendApplicationMutation } from "./api";
import "./styles.scss";
import { ApplicationData } from "./types";

const fieldsData = [
  {
    name: "tg",
    label: "Telegram ID",
    type: "text",
    placeholder: "@telegramID",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "example@mail.com",
  },
  {
    name: "payment",
    label: "Сумма взноса $",
    type: "text",
    placeholder: "550",
  },
];

function ApplicationForm() {
  const [sendApplication, { data, error }] = useSendApplicationMutation();

  useEffect(() => {
    if (data) {
      alerts.success(data.success);
    } else if (error) {
      alerts.error((error as ErrorResponse)?.data?.error);
    }
  }, [data, error]);

  const SignupSchema = Yup.object<
    Record<keyof ApplicationData, Yup.AnySchema>
  >().shape({
    tg: Yup.string().required("Поле Telegram ID не заполнено"),
    email: Yup.string()
      .email("Неверный формат email")
      .required("Поле Email не заполнено"),
    payment: Yup.string()
      .required("Поле Сумма взноса не заполнено")
      .matches(/^\d+$/, "Некорректный ввод"),
  });

  return (
    <Formik
      initialValues={
        {
          tg: "",
          email: "",
          payment: "",
        } as ApplicationData
      }
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        sendApplication(values);
      }}
    >
      <Form className='application_form'>
        {fieldsData.map((item, key) => (
          <Field name={item.name} className='application_form__item' key={key}>
            {({ field, form }: FieldProps) => (
              <div className='application_form__item'>
                <label>{item.label}</label>
                <input
                  className='block_bg application_form__input'
                  type={item.type}
                  placeholder={item.placeholder}
                  onFocus={(e) => (e.target.placeholder = "")}
                  {...field}
                  onBlur={(e) => {
                    form.errors[item.name] && form.touched
                      ? e.target.classList.add("error")
                      : e.target.classList.remove("error");
                    field.onBlur(e);
                  }}
                />
              </div>
            )}
          </Field>
        ))}
        <button type='submit' className='application_form__button block_bg'>
          Отправить
        </button>
      </Form>
    </Formik>
  );
}

export default ApplicationForm;
