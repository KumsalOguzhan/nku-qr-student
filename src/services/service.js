
import axios from "axios";

async function studentget(){

    let student= {
    StudentID:'',
    Name:'',
    Surname:'',
    StudentNO:'',
    DepartmantID:'' };

    const apiURL ='http://localhost:62540/api/student';
    await axios.get(apiURL)
    .then(response => (student=response.data[ 0 // Buraya hangi öğrenci ise 
]
    ));
    //console.log(student.Name +" "+ student.Surname);
}
export default studentget;








// GET



// DEPARTMANT GET
/*
import axios from "axios";

async function FirstRequest(){

    let departmant= {
    DepartmantID:'',
    Name:'',
    Student:''};


    const apiURL ='http://localhost:62540/api/departmant';
    await axios.get(apiURL)
    .then(response => (departmant=response.data[ 0 // Buraya hangi departman ise 
]
    ));
    console.log(departmant.Name);
}
export default FirstRequest;
*/





// INSPECTİON GET
/*
import axios from "axios";

async function FirstRequest(){

    let inspection= {
    InspectionID: '',
    LectureID: '',
    StudentID: '',
    Statu: '',
    Lecture: '',
    Student: ''
};

    const apiURL ='http://localhost:62540/api/inspection';
    await axios.get(apiURL)
    .then(response => (inspection=response.data[ 0 // Buraya hangi inspection ise 
]
    ));
    console.log(inspection.StudentID);
}
export default FirstRequest;
*/





// LECTURE GET
/*
import axios from "axios";

async function FirstRequest(){

    let lecture= {
        LectureID: '',
        SubjectID: '',
        Date: '',
        TeacherID: '',
        ClassroomID: '',
        Classroom: '',
        Inspection: '',
        Subject: '',
        Teacher: ''
        };

    const apiURL ='http://localhost:62540/api/lecture';
    await axios.get(apiURL)
    .then(response => (lecture=response.data[ 0 // Buraya hangi lecture ise 
]
    ));
    console.log(lecture.SubjectID);
}
export default FirstRequest;
*/







// STUDENT GET
/*
import axios from "axios";

async function FirstRequest(){

    let student= {
    StudentID:'',
    Name:'',
    Surname:'',
    StudentNO:'',
    DepartmantID:'' };

    const apiURL ='http://localhost:62540/api/student';
    await axios.get(apiURL)
    .then(response => (student=response.data[ 0 // Buraya hangi öğrenci ise 
]
    ));
    console.log(student.Name +" "+ student.Surname);
}
export default FirstRequest;
*/




// STUDENTPASSWORD GET
/*
import axios from "axios";

async function FirstRequest(){

    let studentpassword= {
        StudentPasswordID: '',
        StudentID: '',
        Password: '',
        Student: ''
    };

    const apiURL ='http://localhost:62540/api/studentpassword';
    await axios.get(apiURL)
    .then(response => (studentpassword=response.data[ 0 // Buraya hangi öğrenci ise 
]
    ));
    console.log(studentpassword.Password);
}
export default FirstRequest;
*/





// SUBJECT GET
/*
import axios from "axios";

async function FirstRequest(){

    let subject= {
        SubjectID: '',
        Name: '',
        Lecture: ''
    };


    const apiURL ='http://localhost:62540/api/subject';
    await axios.get(apiURL)
    .then(response => (subject=response.data[ 0 // Buraya hangi departman ise 
]    ));
    console.log(subject.Name);
}
export default FirstRequest;
*/




// CLASSROOM GET
/*
import axios from "axios";

async function FirstRequest(){

    let classroom= {
        ClassroomID: '',
        ClassNO: '',
        Lecture: ''
    };


    const apiURL ='http://localhost:62540/api/classroom';
    await axios.get(apiURL)
    .then(response => (classroom=response.data[ 0 // Buraya hangi departman ise 
]    ));
    console.log(classroom.ClassNO);
}
export default FirstRequest;
*/





// TEACHER GET
/*
import axios from "axios";

async function FirstRequest(){

    let teacher= {
    TeacherID: '',
    Name: '',
    Surname: '',
    Lecture: '',
    TeacherPassword: ''
};


    const apiURL ='http://localhost:62540/api/teacher';
    await axios.get(apiURL)
    .then(response => (teacher=response.data[ 0 // Buraya hangi departman ise 
]    ));
    console.log(teacher.Name);
}
export default FirstRequest;
*/









// GETID





// DEPARTMANT GETID
/*
import axios from "axios";

async function FirstRequest(){

    let departmantid=1; // burası dışarıdan değer alacak

    let departmant= {
    DepartmantID:'',
    Name:'',
    Student:''};


    const apiURL ='http://localhost:62540/api/departmant/'+departmantid;
    await axios.get(apiURL)
    .then(response => (departmant=response.data[0]));
    console.log(departmant);
}
export default FirstRequest;
*/





// INSPECTİON GETID
/*
import axios from "axios";

async function FirstRequest(){

    let inspectionid=4;        // burası dışarıdan değer alacak

    let inspection= {
    InspectionID: '',
    LectureID: '',
    StudentID: '',
    Statu: '',
    Lecture: '',
    Student: ''
};

    const apiURL ='http://localhost:62540/api/inspection/'+inspectionid;
    await axios.get(apiURL)
    .then(response => (inspection=response.data[0]
    ));
    console.log(inspection.StudentID);
}
export default FirstRequest;
*/




// LECTURE GETID
/*
import axios from "axios";

async function FirstRequest(){

    let lectureid=1;            // burası dışarıdan değer alacak

    let lecture= {
        LectureID: '',
        SubjectID: '',
        Date: '',
        TeacherID: '',
        ClassroomID: '',
        Classroom: '',
        Inspection: '',
        Subject: '',
        Teacher: ''
        };

    const apiURL ='http://localhost:62540/api/lecture/'+lectureid;
    await axios.get(apiURL)
    .then(response => (lecture=response.data[0]    ));
    console.log(lecture.SubjectID);
}
export default FirstRequest;
*/





// STUDENT GETID
/*
import axios from "axios";

async function FirstRequest(){

    let studentid=5;        // burası dışarıdan değer alacak
    
    let student= {
    StudentID:'',
    Name:'',
    Surname:'',
    StudentNO:'',
    DepartmantID:'' };
    const apiURL ='http://localhost:62540/api/student/'+studentid;
    await axios.get(apiURL)
    .then(response => (student=response.data[0]));
    
    console.log(student.Name +" "+ student.Surname);
}
export default FirstRequest;
*/





// STUDENTPASSWORD GETID
/*
import axios from "axios";

async function FirstRequest(){

    let studentpasswordid=2;        // burası dışarıdan değer alacak

    let studentpassword= {
        StudentPasswordID: '',
        StudentID: '',
        Password: '',
        Student: ''
    };

    const apiURL ='http://localhost:62540/api/studentpassword/'+studentpasswordid;
    await axios.get(apiURL)
    .then(response => (studentpassword=response.data[0]     ));
    console.log(studentpassword.Password);
}
export default FirstRequest;
*/




// SUBJECT GETID
/*
import axios from "axios";

async function FirstRequest(){

    let subjectid=1;        // burası dışarıdan değer alacak

    let subject= {
        SubjectID: '',
        Name: '',
        Lecture: ''
    };


    const apiURL ='http://localhost:62540/api/subject/'+subjectid;
    await axios.get(apiURL)
    .then(response => (subject=response.data[0]    ));
    console.log(subject.Name);
}
export default FirstRequest;
*/




// CLASSROOM GETID
/*
import axios from "axios";

async function FirstRequest(){

    let classroomid=1;        // burası dışarıdan değer alacak

    let classroom= {
        ClassroomID: '',
        ClassNO: '',
        Lecture: ''
    };


    const apiURL ='http://localhost:62540/api/classroom/'+classroomid;
    await axios.get(apiURL)
    .then(response => (classroom=response.data[0]    ));
    console.log(classroom.ClassNO);
}
export default FirstRequest;
*/




// TEACHER GETID
/*
import axios from "axios";

async function FirstRequest(){

    let teacherid=1;

    let teacher= {
    TeacherID: '',
    Name: '',
    Surname: '',
    Lecture: '',
    TeacherPassword: ''
};


    const apiURL ='http://localhost:62540/api/teacher/'+teacherid;
    await axios.get(apiURL)
    .then(response => (teacher=response.data[0]    ));
    console.log(teacher.Name);
}
export default FirstRequest;
*/









// PUT








// DEPARTMANT PUT
/*
import axios from "axios";

async function FirstRequest(){

    let departmantid=1; // burası dışarıdan değer alacak

    let departmant= {
    DepartmantID:departmantid,
    Name:'Biyo Mühendisliği',
    Student:5};


    const apiURL ='http://localhost:62540/api/departmantupdate/'+departmantid;
    await axios.put(apiURL,departmant)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/





// INSPECTİON PUT OLMUYOR

/***/





// LECTURE PUT
/*
import axios from "axios";      

async function FirstRequest(){

    let lectureid=1;        // burası dışarıdan değer alacak

    let lecture= {
        LectureID: lectureid,
        SubjectID: '1',
        Date: '2008-11-11T00:00:00',
        TeacherID: '1',
        ClassroomID: '2',
        Classroom: '',
        Inspection: '',
        Subject: '',
        Teacher: ''
        };

    const apiURL ='http://localhost:62540/api/lectureupdate/'+lectureid;
    await axios.put(apiURL,lecture)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/



// STUDENT PUT
/*
import axios from "axios";

async function FirstRequest(){

    let studentid=2007;        // burası dışarıdan değer alacak
    
    let student= {
        Name: 'Harun',
        Surname: 'Near',
        StudentNo: 87,
        DepartmantID: 1 };
    const apiURL ='http://localhost:62540/api/studentupdate/'+studentid;
    await axios.put(apiURL, student)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/




// STUDENTPASSWORD PUT
/*
import axios from "axios";

async function FirstRequest(){

    let studentpasswordid=1;

    let studentpassword= {
        StudentPasswordID: studentpasswordid,
        StudentID: '5',
        Password: '987654',
        Student: ''
    };

    const apiURL ='http://localhost:62540/api/studentpasswordupdate/'+studentpasswordid;
    await axios.put(apiURL,studentpassword)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/




// SUBJECT PUT
/*
import axios from "axios";

async function FirstRequest(){

    let subjectid=1;

    let subject= {
        SubjectID: subjectid,
        Name: 'BM GIRIS',
        Lecture: ''
    };


    const apiURL ='http://localhost:62540/api/subjectupdate/'+subjectid;
    await axios.put(apiURL,subject)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/



// CLASSROOM PUT
/*
import axios from "axios";

async function FirstRequest(){

    let classroomid=1;        // burası dışarıdan değer alacak

    let classroom= {
        ClassroomID: '1',
        ClassNO: 'BM399',
        Lecture: ''
    };


    const apiURL ='http://localhost:62540/api/classroomupdate/'+classroomid;
    await axios.put(apiURL,classroom)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/




// TEACHER PUT               !!!!!!!!!!!!!!---- OLSA BÖYLE OLMASI GEREK AMA YOK ----!!!!!!!!!!!!!!!!!
/*
import axios from "axios";

async function FirstRequest(){

    let teacherid=1;

    let teacher= {
    TeacherID: '2',
    Name: 'Harun',
    Surname: 'NAR',
    Lecture: '',
    TeacherPassword: ''
};


    const apiURL ='http://localhost:62540/api/teacherupdate/'+teacherid;
    await axios.put(apiURL,teacher)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/









// POST             // İDLER OTOMATİK ATIYO GENELİNDE







// DEPARTMANT POST
/*
import axios from "axios";

async function FirstRequest(){

    let departmant= {
    DepartmantID:'1005',                    //departmanid yi kendi belirliyo
    Name:'Biyomedikal Mühendisliği',
    Student:''};


    const apiURL ='http://localhost:62540/api/departmantinsert/';
    await axios.post(apiURL,departmant)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/




// INSPECTİON POST // POST api yazılmamış...
/*
import axios from "axios";

async function FirstRequest(){

    let inspection= {
    InspectionID: '1',
    LectureID: '1',
    StudentID: '1',
    Statu: '',
    Lecture: '',
    Student: ''
};

    const apiURL ='http://localhost:62540/api/inspectioninsert/';
    await axios.post(apiURL,inspection)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/




// LECTURE POST
/*
import axios from "axios";      

async function FirstRequest(){



    let lecture= {
        LectureID: '4',
        SubjectID: '1',
        Date: '2008-11-11T00:00:00',
        TeacherID: '1',
        ClassroomID: '2',
        Classroom: '',
        Inspection: '',
        Subject: '',
        Teacher: ''
        };

    const apiURL ='http://localhost:62540/api/lectureinsert';
    await axios.post(apiURL,lecture)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/



//  STUDENT POST
/*
import axios from "axios";

async function FirstRequest(){

    
    let student= {
        Name: 'Harun',
        Surname: 'Near',
        StudentNo: 77,
        DepartmantID: 1 };

    const apiURL ='http://localhost:62540/api/studentinsert';
    await axios.post(apiURL, student)
    //.then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/




// STUDENTPASSWORD POST
/*
import axios from "axios";

async function FirstRequest(){

    let studentpassword= {
        StudentPasswordID: '6',
        StudentID: '5',
        Password: '987654',
        Student: ''
    };

    const apiURL ='http://localhost:62540/api/studentpasswordinsert';
    await axios.post(apiURL,studentpassword)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/




// SUBJECT POST YOK
/**/


// CLASSROOM POST               !!!!!!!!!!!!!!---- OLSA BÖYLE OLMASI GEREK AMA YOK ----!!!!!!!!!!!!!!!!!
/*
import axios from "axios";

async function FirstRequest(){

    let classroom= {
        ClassroomID: '3',
        ClassNO: 'BM400',
        Lecture: ''
    };


    const apiURL ='http://localhost:62540/api/classroominstert';
    await axios.post(apiURL,classroom)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/




// TEACHER POST               !!!!!!!!!!!!!!---- OLSA BÖYLE OLMASI GEREK AMA YOK ----!!!!!!!!!!!!!!!!!
/*
import axios from "axios";

async function FirstRequest(){

    let teacher= {
    TeacherID: '3',
    Name: 'Harun',
    Surname: 'NAR',
    Lecture: '',
    TeacherPassword: '123'
};


    const apiURL ='http://localhost:62540/api/teacherinsert';
    await axios.post(apiURL,teacher)
    .then(response => console.log(response.data.updatedAt));
}
export default FirstRequest;
*/






// DELETE








// DEPARTMANT DELETE
/*
import axios from "axios";

async function FirstRequest(){

    let departmantid=1014; // burası dışarıdan değer alacak


    const apiURL ='http://localhost:62540/api/departmantdelete/'+departmantid;
    await axios.delete(apiURL)
    .then(() => console.log = 'Delete successful');
}
export default FirstRequest;
*/




// INSPECTİON DELETE
/*
import axios from "axios";

async function FirstRequest(){


    let inspectionid=6;        // burası dışarıdan değer alacak

    const apiURL ='http://localhost:62540/api/inspectiondelete/'+inspectionid;
    await axios.delete(apiURL)
    .then(() => console.log = 'Delete successful');
}
export default FirstRequest;
*/




// LECTURE DELETE
/*
import axios from "axios";      

async function FirstRequest(){

    let lectureid=6;

    const apiURL ='http://localhost:62540/api/lecturedelete/'+lectureid;
    await axios.delete(apiURL)
    .then(() => console.log = 'Delete successful');
}
export default FirstRequest;
*/




// STUDENT DELETE
/*

import axios from "axios";

async function FirstRequest(){

    let studentid=2004;        // burası dışarıdan değer alacak
    
    const apiURL ='http://localhost:62540/api/studentdelete/'+ studentid ;
    await axios.delete(apiURL)
    .then(() => console.log = 'Delete successful');
}
export default FirstRequest;
*/




// STUDENTPASSWORD DELETE
/*
import axios from "axios";

async function FirstRequest(){

    let studentpasswordid=1004;

    const apiURL ='http://localhost:62540/api/studentpassworddelete/'+studentpasswordid;
    await axios.delete(apiURL)
    .then(() => console.log = 'Delete successful');
}
export default FirstRequest;
*/




// SUBJECT DELETE
/*
import axios from "axios";

async function FirstRequest(){

    let subjectid=4;


    const apiURL ='http://localhost:62540/api/subjectdelete/'+subjectid;
    await axios.delete(apiURL)
    .then(() => console.log = 'Delete successful');
}
export default FirstRequest;
*/





// CLASSROOM DELETE
/*
import axios from "axios";

async function FirstRequest(){

    let classroomid=3;


    const apiURL ='http://localhost:62540/api/classroomdelete/'+classroomid;
    await axios.delete(apiURL)
    .then(() => console.log = 'Delete successful');
}
export default FirstRequest;
*/




// TEACHER DELETE               !!!!!!!!!!!!!!---- OLSA BÖYLE OLMASI GEREK AMA YOK ----!!!!!!!!!!!!!!!!!
/*
import axios from "axios";

async function FirstRequest(){

    let teacherid=3;

    const apiURL ='http://localhost:62540/api/teacherdelete/'+teacherid;
    await axios.delete(apiURL)
    .then(() => console.log = 'Delete successful');
}
export default FirstRequest;
*/