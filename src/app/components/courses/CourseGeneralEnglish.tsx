import { CourseTemplate } from "../CourseTemplate";

export function CourseGeneralEnglish() {
  return (
    <CourseTemplate
      title="General English"
      subtitle="ENGLISH"
      duration="6 недель"
      frequency="3 раза в неделю, 80 мин"
      price="7000"
      teacher="Имя учителя"
      googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSfKyadzPB-xWNOxRqK0N4oNw5a8LSbBdrlsEoVa_DIYmUUGyQ/viewform?usp=publish-editor"
      description={[
        "Курс для уровня Pre-Intermediate",
        "Развитие всех языковых навыков",
        "Грамматика, лексика, произношение",
        "Практика общения в повседневных ситуациях",
        "Интерактивные занятия и разговорная практика",
      ]}
    />
  );
}
