import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { TeachersPage } from "./components/TeachersPage";
import { CourseIELTS } from "./components/courses/CourseIELTS";
import { CourseSAT } from "./components/courses/CourseSAT";
import { CourseCombined } from "./components/courses/CourseCombined";
import { CourseAcademicWriting } from "./components/courses/CourseAcademicWriting";
import { CourseGeneralEnglish } from "./components/courses/CourseGeneralEnglish";
import { CourseIT } from "./components/courses/CourseIT";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "teachers", Component: TeachersPage },
      { path: "course/ielts", Component: CourseIELTS },
      { path: "course/sat", Component: CourseSAT },
      { path: "course/combined", Component: CourseCombined },
      { path: "course/academic-writing", Component: CourseAcademicWriting },
      { path: "course/general-english", Component: CourseGeneralEnglish },
      { path: "course/it", Component: CourseIT },
    ],
  },
]);
