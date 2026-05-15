import { CourseTemplate } from "../CourseTemplate";

export function CourseAcademicWriting() {
  return (
    <CourseTemplate
      title="Academic Writing"
      subtitle="WRITING"
      duration="6 недель"
      frequency="2 раза в неделю, 80 мин"
      price="9000"
      teacher="Имя учителя"
      googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSdBsO2Fdf1tCCpYj4BMHkaCTNdBkj_cjAEiBh-5MrTgP6MOgg/viewform?usp=dialog"
      description={[
        "Курс для студентов уровня Intermediate и выше",
        "Академическое письмо для университета",
        "Структура эссе и научных работ",
        "Развитие навыков критического мышления",
        "Практика написания различных типов текстов",
      ]}
    />
  );
}
