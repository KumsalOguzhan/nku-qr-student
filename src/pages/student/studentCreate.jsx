import { React, useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  Name: Yup.string().required("Zorunlu alan"),
  Surname: Yup.string().required("Zorunlu alan"),
  StudentNO: Yup.number().required("Zorunlu alan"),
  DepartmantID: Yup.number().required("Zorunlu alan"),
});

const StudentCreate = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState();

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await api.get("/departmant");
        setDepartments(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchDepartment();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <h1>Öğrenci oluştur</h1>
        </Col>
      </Row>
      <Row>
        <Formik
          initialValues={{
            Name: "",
            Surname: "",
            StudentNO: Number(),
            DepartmantID: Number(),
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            api
              .post("/studentinsert", values)
              .then((response) => console.log(response))
              .then(() => navigate("/student"));
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="Name">Öğrenci Adı</Label>
                <Input
                  id="Name"
                  name="Name"
                  placeholder="Öğrenci adı giriniz"
                  type="text"
                  onChange={handleChange}
                  values={values.Name}
                />
                {errors.Name && errors.Name ? (
                  <div className="text-danger">* {errors.Name}</div>
                ) : null}
                <Label for="Surname">Öğrenci Soyadı</Label>
                <Input
                  id="Surname"
                  name="Surname"
                  placeholder="Öğrenci soyadı giriniz"
                  type="text"
                  onChange={handleChange}
                  values={values.Surname}
                />
                {errors.Surname && errors.Surname ? (
                  <div className="text-danger">* {errors.Surname}</div>
                ) : null}
                <Label for="StudentNO">Öğrenci Numarası</Label>
                <Input
                  id="StudentNO"
                  name="StudentNO"
                  placeholder="Öğrenci numarası giriniz"
                  type="number"
                  onChange={handleChange}
                  values={values.StudentNO}
                />
                {errors.StudentNO && errors.StudentNO ? (
                  <div className="text-danger">* {errors.StudentNO}</div>
                ) : null}
                <Label for="DepartmantID">Öğrenci Bölümü</Label>
                <Field
                  type="number"
                  as="select"
                  className="form-select"
                  name="DepartmantID"
                  values={values.DepartmantID}
                  onChange={handleChange}
                >
                  <option selected value="default">
                    Bölüm Seçiniz
                  </option>
                  {departments &&
                    departments.map((department) => (
                      <option value={department.DepartmantID}>
                        {department.Name}
                      </option>
                    ))}
                </Field>
                {errors.DepartmantID && errors.DepartmantID ? (
                  <div className="text-danger">* {errors.DepartmantID}</div>
                ) : null}
                <Button type="submit" className="mt-2" color="primary">
                  Kaydet
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Row>
    </div>
  );
};

export default StudentCreate;
