import { React, useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Form, FormGroup, Label, Button } from "reactstrap";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  SubjectID: Yup.number().required("Zorunlu alan"),
  TeacherID: Yup.number().required("Zorunlu alan"),
  ClassroomID: Yup.number().required("Zorunlu alan"),
});

const LectureCreate = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState();
  const [subjects, setSubjects] = useState();
  const [classrooms, setClassrooms] = useState();

  useEffect(() => {
    const fetchClassroom = async () => {
      try {
        const response = await api.get("/classroom");
        setClassrooms(response.data);
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
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await api.get("/subject");
        setSubjects(response.data);
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
    fetchSubjects();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await api.get("/teacher");
        setTeachers(response.data);
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
    fetchTeachers();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <h1>Yeni Ders Atama</h1>
        </Col>
      </Row>
      <Row>
        <Formik
          initialValues={{
            SubjectID: Number(),
            TeacherID: Number(),
            ClassroomID: Number(),
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            api
              .post("/lectureinsert", values)
              .then((response) => console.log(response))
              .then(() => navigate("/lecture"));
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="SubjectID">Ders</Label>
                <Field
                  type="number"
                  as="select"
                  className="form-select"
                  name="SubjectID"
                  values={values.SubjectID}
                  onChange={handleChange}
                >
                  <option selected value="default">
                    Ders Seçiniz
                  </option>
                  {subjects &&
                    subjects.map((subject) => (
                      <option value={subject.SubjectID}>
                        {subject.Name}
                      </option>
                    ))}
                </Field>
                {errors.SubjectID && errors.SubjectID ? (
                  <div className="text-danger">* {errors.SubjectID}</div>
                ) : null}
                <Label for="TeacherID">Öğretmen</Label>
                <Field
                  type="number"
                  as="select"
                  className="form-select"
                  name="TeacherID"
                  values={values.TeacherID}
                  onChange={handleChange}
                >
                  <option selected value="default">
                    Öğretmen Seçiniz
                  </option>
                  {teachers &&
                    teachers.map((teacher) => (
                      <option value={teacher.TeacherID}>
                        {teacher.Name} {teacher.Surname}
                      </option>
                    ))}
                </Field>
                {errors.TeacherID && errors.TeacherID ? (
                  <div className="text-danger">* {errors.TeacherID}</div>
                ) : null}
                <Label for="ClassroomID">Sınıf</Label>
                <Field
                  type="number"
                  as="select"
                  className="form-select"
                  name="ClassroomID"
                  values={values.ClassroomID}
                  onChange={handleChange}
                >
                  <option selected value="default">
                    Sınıf Seçiniz
                  </option>
                  {subjects &&
                    classrooms.map((classroom) => (
                      <option value={classroom.ClassroomID}>
                        {classroom.ClassNO}
                      </option>
                    ))}
                </Field>
                {errors.ClassroomID && errors.ClassroomID ? (
                  <div className="text-danger">* {errors.ClassroomID}</div>
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

export default LectureCreate;
