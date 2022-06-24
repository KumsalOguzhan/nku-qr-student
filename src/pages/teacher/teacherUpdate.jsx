import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Form, FormGroup, Label, Button } from "reactstrap";
import api from "../../services/api";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  Name: Yup.string().required("Zorunlu alan"),
  Surname: Yup.string().required("Zorunlu alan")
});

const TeacherUpdate = () => {
  let { teacherId } = useParams();
  const [teacher, setTeacher] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await api.get(`/teacher/${teacherId}`);
        setTeacher(response.data[0]);
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
    fetchTeacher();
  }, [teacherId]);

  return (
    <div>
      <Row>
        <Col>
          <h1>Öğretmen güncelle</h1>
        </Col>
      </Row>
      <Row>
        <Formik
          enableReinitialze={true}
          initialValues={{ Name: teacher?.Name }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            api
              .put(`/teachertupdate/${teacherId}`, values)
              .then((response) => console.log(response))
              .then(() => navigate("/teacher"));
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="Name">Öğretmen adı</Label>
                <Field
                  className="form-control"
                  type="text"
                  name="Name"
                  placeholder="Öğretmen adı giriniz"
                  onChange={handleChange}
                  values={values.Name}
                />
                {errors.Name && errors.Name ? (
                  <div className="text-danger">* {errors.Name}</div>
                ) : null}
                <Label for="Surname">Öğretmen Soyadı</Label>
                <Field
                  className="form-control"
                  type="text"
                  name="Surname"
                  placeholder="Öğretmen soyadı giriniz"
                  onChange={handleChange}
                  values={values.Surname}
                />
                {errors.Surname && errors.Surname ? (
                  <div className="text-danger">* {errors.Surname}</div>
                ) : null}
                <Button type="submit" className="mt-2" color="primary">
                  Güncelle
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Row>
    </div>
  );
};

export default TeacherUpdate;
