import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Form, FormGroup, Label, Button } from "reactstrap";
import api from "../../services/api";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  classNo: Yup.string().required("Zorunlu alan"),
  //lecture: Yup.string(),
});

const ClassroomUpdate = () => {
  let { classroomId } = useParams();
  const [classroom, setClassroom] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClassroom = async () => {
      try {
        const response = await api.get(`/classroom/${classroomId}`);
        setClassroom(response.data[0]);
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
    fetchClassroom();
  }, [classroomId]);

  return (
    <div>
      <Row>
        <Col>
          <h1>Derslik güncelle</h1>
        </Col>
      </Row>
      <Row>
        <Formik
          enableReinitialze={true}
          initialValues={{ classNo: classroom?.ClassNO }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            api
              .put(`/classroomupdate/${classroomId}`, values)
              .then((response) => console.log(response))
              .then(() => navigate("/classroom"));
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="classNo">Derslik ismi</Label>
                <Field
                  className="form-control"
                  type="text"
                  name="classNo"
                  placeholder="Derslik ismi giriniz"
                  onChange={handleChange}
                  values={values.classNo}
                />
                {errors.classNo && errors.classNo ? (
                  <div className="text-danger">* {errors.classNo}</div>
                ) : null}

                {/* <Label className="mt-2" for="examplePassword">
                  Dersler
                </Label>
                <Input
                  id="lecture"
                  name="text"
                  placeholder="Ders giriniz"
                  type="text"
                  onChange={handleChange}
                  values={values.lecture}
                />
                {errors.lecture && errors.lecture ? (
                  <div className="text-danger">* {errors.lecture}</div>
                ) : null} */}
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

export default ClassroomUpdate;
