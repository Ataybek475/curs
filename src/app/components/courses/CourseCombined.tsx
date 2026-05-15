import { CourseTemplate } from "../CourseTemplate";

export function CourseCombined() {
  return (
    <CourseTemplate
      title="SAT + IELTS"
      subtitle="COMBO"
      duration="6 недель"
      frequency="Интенсивный курс"
      price="15000"
      teacher="Имя учителя"
      googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSeFpjuMCwbAdDlai1Yrg4_hqqF2iudpqZJjPIz5p6McbtgWEw/viewform?usp=dialog"
      description={[
        "Комплексная подготовка к обоим экзаменам",
        "Подготовка к SAT (Math и English)",
        "Подготовка к IELTS (все 4 навыка)",
        "Экономия 3000 сом при покупке обоих курсов",
        "Оптимальное распределение времени и материалов",
      ]}
    />
  );
}
