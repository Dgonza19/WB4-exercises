"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introdcution to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
   
]

// for (let i = 0 ; i < course.lenght; i++){

//}

// When does the PROG200 course start?

let prog200course;

for(let i = 0 ; i < courses.length; i++){
  if(courses[i].CourseId == "PROG200"){
    prog200course = courses[i];
  }
}
console.log("Prog200 starts: " + prog200course.StartDate);

//What is the title of PROG500 course?

let prog500course;

for (let i = 0; i < courses.length; i++){
  if (courses[i].CourseId == "PROG500"){
    prog500course = courses[i];
  }
}

console.log("PROG500 course name is: " + prog500course.Title);

// What are the titles of the courses that cost $50 or less?

let inexpensiveCourses = [];

for(let i = 0 ; i < courses.length; i++) {
  let courseCost = courses[i];
  if (courseCost.Fee <= 50){
    
    inexpensiveCourses.push(courseCost.Title);
  }
}

console.log("The courses that are $50 or less are: ")
for (let i = 0; i < inexpensiveCourses.length; i++) {
  console.log(inexpensiveCourses[i]);
}

// What classes meet in classroom1?

let classroom1 = [];

for (let i = 0; i < courses.length; i++) {
  let coursesInfo = courses[i];
  if (coursesInfo.Location == "Classroom 1") {

    classroom1.push(coursesInfo.Title);
  }
}

console.log("Courses that meet in Classroom 1 are: ")
  for(let i = 0; i < classroom1.length; i++) {
    console.log(classroom1[i]);
  }