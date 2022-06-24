import { React, useState, useEffect } from "react";
import { Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../services/api";
import DynamicTable from "../../components/dynamicTable";

const Index = () => {
  const [lectures, setLectures] = useState();
  const [subjects, setSubjects] = useState();
  const [teachers, setTeachers] = useState();
  const [classrooms, setClassrooms] = useState();

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await api.get("/lecture");
        setLectures(response.data);
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
    fetchLectures();
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

  const handleDelete = async (id) => {
    await api
      .delete(`lecturedelete/${id}`)
      .then((response) => console.log(response));
    setLectures(lectures.filter((item) => item.LectureID !== id));
  };

  const handleSubjectName = (id) => {
    return subjects?.find((item) => item.SubjectID === id);
  };

  const handleTeacherName = (id) => {
    return teachers?.find((item) => item.TeacherID === id);
  };

  const handleClassroomName = (id) => {
    return classrooms?.find((item) => item.ClassroomID === id);
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Atanmış Dersler</h1>
        </Col>
        <Col>
          <Button className="float-end" color="dark" size="lg">
            <Link to="create">Yeni Ders Ata</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <DynamicTable
          data={{
            head: [
              { element: "Ders", props: { scope: "col" } },
              { element: "Öğretmen", props: { scope: "col" } },
              { element: "Sınıf", props: { scope: "col" } },
            ],
            body: lectures?.map((lecture) => ({
              id: lecture.StudentID,
              elements: [
                {
                  element: handleSubjectName(lecture.SubjectID)?.Name,
                  props: { className: "" },
                },
                {
                  element:
                    handleTeacherName(lecture.TeacherID)?.Name +
                    " " +
                    handleTeacherName(lecture.TeacherID)?.Surname,
                  props: { className: "" },
                },
                {
                  element: handleClassroomName(lecture.ClassroomID)?.ClassNO,
                  props: { className: "" },
                },
                {
                  element: (
                    <Link to={`update/${lecture.LectureID}`}>Düzenle</Link>
                  ),
                  props: { className: "text-primary" },
                },
                {
                  element: (
                    <Button
                      onClick={() => handleDelete(lecture.LectureID)}
                      color="danger"
                    >
                      Sil
                    </Button>
                  ),
                  props: { className: "" },
                },
              ],
            })),
          }}
        />
      </Row>
    </div>
  );
};

export default Index;
