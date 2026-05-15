import { CourseTemplate } from "../CourseTemplate";

export function CourseSAT() {
  return (
    <CourseTemplate
      title="SAT"
      subtitle="MATH"
      duration="6 недель"
      frequency="4 раза в неделю, 80 мин"
      price="9000"
      teacher="Имя учителя"
      googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSekY_h35jnvh1TWakxl_7NrNqlT9b2IlPa1DJHhQQUnIjh40Q/viewform?usp=dialog"
      description={[
        "Полная подготовка к SAT экзамену",
        "2 занятия по Math (математика)",
        "2 занятия по English (английский язык)",
        "Практические тесты и разбор заданий",
        "Стратегии решения задач и управления временем",
      ]}
    />
  );
}
