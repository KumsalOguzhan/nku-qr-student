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
});

const SubjectUpdate = () => {
  let { subjectId } = useParams();
  const [subject, setSubject] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await api.get(`/subject/${subjectId}`);
        setSubject(response.data[0]);
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
    fetchSubject();
  }, [subjectId]);

  return (
    <div>
      <Row>
        <Col>
          <h1>Ders güncelle</h1>
        </Col>
      </Row>
      <Row>
        <Formik
          enableReinitialze={true}
          initialValues={{ Name: subject?.Name }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            api
              .put(`/subjectupdate/${subjectId}`, values)
              .then((response) => console.log(response))
              .then(() => navigate("/subject"));
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="Name">Ders ismi</Label>
                <Field
                  className="form-control"
                  type="text"
                  name="Name"
                  placeholder="Ders ismi giriniz"
                  onChange={handleChange}
                  values={values.Name}
                />
                {errors.Name && errors.Name ? (
                  <div className="text-danger">* {errors.Name}</div>
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

export default SubjectUpdate;
