import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
  password: Yup.string().min(6, "Şifreniz çok kısa").required("Şifre gerekli"),
});

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6 align-self-center">
          <Card>
            <CardBody>
              <CardTitle tag="h5">QR Yoklama Yönetim</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Giriş Sayfası
              </CardSubtitle>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values.email);
                  console.log(values.password)
                  if (values.email === "admin@nku.edu.tr" && values.password === "123456") {
                    navigate("/")
                  }
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="email giriniz"
                        type="email"
                        onChange={handleChange}
                        values={values.email}
                      />
                      {errors.email && errors.email ? (
                        <div className="text-danger">* {errors.email}</div>
                      ) : null}
                      <Label className="mt-2" for="password">Şifre</Label>
                      <Input
                        id="password"
                        name="password"
                        placeholder="şifre giriniz"
                        type="password"
                        onChange={handleChange}
                        values={values.password}
                      />
                      {errors.password && errors.password ? (
                        <div className="text-danger">* {errors.password}</div>
                      ) : null}
                      <Button className="mt-2" color="primary">Giriş Yap</Button>
                    </FormGroup>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
