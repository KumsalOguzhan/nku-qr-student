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
  studentNo: Yup.number().required("Zorunlu alan"),
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
              <CardTitle tag="h5">QR Öğrenci</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Giriş Sayfası
              </CardSubtitle>
              <Formik
                initialValues={{ studentNo: Number(), password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values.studentNo);
                  console.log(values.password)
                  if (values.studentNo === "2180656010" && values.password === "123456") {
                    navigate("/lecture")
                  }
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="studentNo">Öğrenci Numarası</Label>
                      <Input
                        id="studentNo"
                        name="studentNo"
                        placeholder="numara giriniz"
                        type="text"
                        onChange={handleChange}
                        values={values.studentNo}
                      />
                      {errors.studentNo && errors.studentNo ? (
                        <div className="text-danger">* {errors.studentNo}</div>
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
                      <Button type="submit" className="mt-2" color="primary">Giriş Yap</Button>
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
