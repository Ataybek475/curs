import { CourseTemplate } from "../CourseTemplate";

export function CourseIELTS() {
  return (
    <CourseTemplate
      title="IELTS"
      subtitle="TEACHER"
      duration="6 недель"
      frequency="4 раза в неделю, 80 мин"
      price="9000"
      teacher="Имя учителя"
      googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSdivO84i13a08EEov4arMHMO93CDcxTBjyh2z10mlcMKMjI2w/viewform?usp=dialog"
      description={[
        "Комплексная подготовка к экзамену IELTS",
        "2 занятия по Reading и Writing",
        "2 занятия по Listening и Speaking",
        "Актуальные материалы и практические задания",
        "Разбор типичных ошибок и стратегии сдачи экзамена",
      ]}
    />
  );
}
