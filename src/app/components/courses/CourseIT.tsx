import { CourseTemplate } from "../CourseTemplate";

export function CourseIT() {
  return (
    <CourseTemplate
      title="IT"
      subtitle="CODING"
      duration="Уточняется"
      frequency="Гибкий график"
      price="Уточняется"
      teacher="Студент программист"
      googleFormUrl="https://docs.google.com/forms?course=IT"
      disabled={true}
      description={[
        "Курс программирования от практикующих студентов",
        "Программа обучения согласовывается индивидуально",
        "Современные технологии и практический подход",
        "Обучение от студентов для студентов",
        "Свяжитесь с нами для подробной информации",
      ]}
    />
  );
}
