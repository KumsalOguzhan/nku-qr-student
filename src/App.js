import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signIn";

import Classroom from "./pages/classroom"
import ClassroomUpdate from "./pages/classroom/classroomUpdate"
import ClassroomCreate from "./pages/classroom/classroomCreate"

import Department from "./pages/department"
import DepartmentUpdate from "./pages/department/departmentUpdate"
import DepartmentCreate from "./pages/department/departmentCreate";

import Inspection from "./pages/inspection"
import InspectionUpdate from "./pages/inspection/inspectionUpdate"
import InspectionCreate from "./pages/inspection/inspectionCreate";

import Lecture from "./pages/lecture"
import LectureUpdate from "./pages/lecture/lectureUpdate";
import LectureCreate from "./pages/lecture/lectureCreate"

import Student from "./pages/student"
import StudentUpdate from "./pages/student/studentUpdate";
import StudentCreate from "./pages/student/studentCreate";

import Subject from "./pages/subject"
import SubjectUpdate from "./pages/subject/subjectUpdate";
import SubjectCreate from "./pages/subject/subjectCreate";

import Teacher from "./pages/teacher/index"
import TeacherUpdate from "./pages/teacher/teacherUpdate"
import TeacherCreate from "./pages/teacher/teacherCreate";
import Qr from "./pages/qr/qr";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" index element={<SignIn />} />
          
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/qr" element={<Qr />} />

            <Route path="/classroom" element={<Outlet />}>
              <Route index element={<Classroom />} />
              <Route path="create" element={<ClassroomCreate />} />
              <Route path="update/:classroomId" element={<ClassroomUpdate />} />
            </Route>

            <Route path="/department" element={<Outlet />}>
              <Route index element={<Department />} />
              <Route path="create" element={<DepartmentCreate />} />
              <Route path="update/:departmentId" element={<DepartmentUpdate />} />
            </Route>

            <Route path="/inspection" element={<Outlet />}>
              <Route index element={<Inspection />} />
              <Route path="create" element={<InspectionCreate />} />
              <Route path="update/:inspectionId" element={<InspectionUpdate />} />
            </Route>

            <Route path="/lecture" element={<Outlet />}>
              <Route index element={<Lecture />} />
              <Route path="create" element={<LectureCreate />} />
              <Route path="update/:lectureId" element={<LectureUpdate />} />
            </Route>

            <Route path="/student" element={<Outlet />}>
              <Route index element={<Student />} />
              <Route path="create" element={<StudentCreate />} />
              <Route path="update/:studentId" element={<StudentUpdate />} />
            </Route>

            <Route path="/subject" element={<Outlet />}>
              <Route index element={<Subject />} />
              <Route path="create" element={<SubjectCreate />} />
              <Route path="update/:subjectId" element={<SubjectUpdate />} />
            </Route>

            <Route path="/teacher" element={<Outlet />}>
              <Route index element={<Teacher />} />
              <Route path="create" element={<TeacherCreate />} />
              <Route path="update/:teacherId" element={<TeacherUpdate />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
