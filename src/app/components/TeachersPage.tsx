import { User } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import imgDSC0104 from "./img/_DSC0104.JPG";
import imgDSC0032 from "./img/_DSC0032.JPG";
import imgDSC0036 from "./img/_DSC0036.JPG";

const teachers = [
  {
    id: 1,
    name: "Doolos Aibek uulu",
    photo: "https://media.licdn.com/dms/image/v2/C4D03AQHjH0kaAlvJDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646749579313?e=1780531200&v=beta&t=FIvr0ON1RiL2JvYekm8vlQNWf2ZrTWjj8gOFk6E0gbs",
    courses: ["IELTS"],
    degree: "PhD in Electrical & Computer Engineering (KAUST)",
    students: "+500 students",
    highlights: [
      "Teaching experience",
      "PhD in KAUST",
      "Scientific publications",
    ],
    description: "Заведующий учебной частью, преподаватель по кибербезопасности",
    bio: `Имя Фамилия: Доолос Айбек

Образование:

Получил степень PhD в области электротехники и компьютерной инженерии в KAUST (King Abdullah University of Science and Technology). Имеет степень магистра в области материаловедения и нанотехнологий (Bilkent University) и степень бакалавра по физике (Middle East Technical University, METU).

Опыт работы:

Имеет значительный опыт преподавания физики, математики и инженерных дисциплин на уровне колледжа и университета. В настоящее время занимает должность заведующего учебной частью (завуча) в Инженерном колледже. Преподаёт курсы по кибербезопасности на кафедре кибербезопасности, а также ведёт подготовку студентов к экзамену SAT. Ранее работал ассистент-профессором в Университете Центральной Азии (UCA). Участвовал в разработке учебных программ и экзаменов.

Научная деятельность:

В ходе докторантуры проводил исследования в области антенн и электромагнитики. Результаты исследований опубликованы в журналах IEEE Transactions on Antennas and Propagation. Принимал участие в многочисленных международных конференциях, включая IEEE International Symposium on Antennas & Propagation and USNC-URSI Radio Science Meeting.

Немного о себе:

Сосредоточен на эффективных методах преподавания и подготовке студентов к академическим и профессиональным достижениям. Особое внимание уделяет развитию аналитического мышления и практических навыков у студентов.

Почему Инженерный Колледж:

Инженерный колледж предоставляет возможность сочетать академическое качество с практико-ориентированным обучением. Работа в колледже позволяет готовить студентов к реальным требованиям современной инженерии и технологий.`,
  },
  {
    id: 6,
    name: "Эльбрус Тажибаев",
    courses: ["Biology"],
    highlights: [
      "Бакалавр в Abant Izzet Baysal (Турция)",
      "Магистратура по микробиологии (И.Арабаев)",
      "12 лет преподавания и тренерской работы",
    ],
    description: "",
    degree: "",
    students: "",
    bio: `1. Имя и фамилия: Эльбрус Тажибаев

2. Образование: Бакалавр в области науки биологии в университете Абант Иззет Байсал, Болу, Турция. Магистратура в области микробиология в университете И.Арабаева

3. Опыт работы: Учитель биологии со стажем 12 лет, 12 лет как тренер подготовки Нац сборной КР по биологии, 6 лет главный тренер КР по биологии, назначен главным тренером нац сборной КР по химии с 2025г.

4. Немного о себе: Руководитель OL Academy где готовят лучших будущих ученных и медиков.

5. Почему вы выбрали Инженерный Колледж: новые возможности, меньше бюрократии больше дел.`,
  },
  {
    id: 2,
    name: "Нуржан Бексултанова",
    photo: imgDSC0104,
    courses: ["SAT"],
    highlights: [
      "Bachelor's degree at UCA",
      "PhD at METU",
      "Development experience in IT +3 year",
    ],
    description: "",
    bio: `Имя Фамилия:  

Нуржан Бексултанова

Образование: 

Получила степень PhD в области химии в Middle East Technical University (METU). Там же окончила магистратуру и бакалавриат по химии.

Опыт работы: 

Имеет большой опыт работы в образовательной и научной среде. Имеет многолетний опыт работы асистентом профессора в Middle East Technical University (Анкара, Турция).

Имеет значительный опыт работы со студентами разных возрастов — от младших курсов до выпускников. Проводит занятия, помогает студентам разбирать сложные темы и оказывает академическую поддержку. Разрабатывает учебные материалы и задания для курсов. Также имеет опыт в организации международных научных конференций.

Научная деятельность: 

Занимается исследованиями в области химии. Является автором и соавтором научных публикаций в международных журналах. Также имеет опыт рецензирования научных статей и учебных материалов. Участвовала в нескольких научных проектаах, направленных на развитие современных методов в химии.

Немного о себе: 

Ответственная, организованная и внимательная к деталям. Умеет понятно объяснять сложные темы и находить подход к студентам. Любит работать в команде и делиться знаниями.

Почему Инженерный Колледж: 

Работа в Инженерном колледже является одновременно интеллектуально стимулирующей и значимой с точки зрения вклада в развитие образования. Она предоставляет возможность не только работать в академически насыщенной среде, но и участвовать в совершенствовании образовательной системы.

Особую ценность представляет возможность оказывать влияние на развитие студентов на ранних этапах их обучения — помогать им определить профессиональное направление, развивать ключевые навыки и уверенно двигаться по выбранному пути.
`,
  },
  {
    id: 3,
    name: "Зумрад Уйсал",
    photo: imgDSC0032,
    courses: ["Academic Writing"],
    highlights: [
      "27+ years of teaching",
      "Winner of English Olympiads",
      "Students placed at: MIT, HUK, HK",
    ],
    description: "",
    bio: `Имя Фамилия: Зумрад Уйсал

Образование:

Получила степень Master of Arts in Teaching в AUCA. Также окончила магистратуру и бакалавриат на факультете романо-германской филологии в КГНУ.

Опыт работы:

Имеет большой опыт работы в сфере образования. Работала в течение 27 лет в международном образовательном учреждении Сапат на различных позициях. В частности, работала учителем английского языка в Бишкекском лицее Айчурек, Международной школе Силк Роуд и в Бишкекском лицее имени Чынгыза Айтматова.

С 2023 года вела различные курсы на факультете педагогики в AUCA. Также работала ассистентом профессора.

Немного о себе:

Ответственный и целеустремлённый человек. Ответственно подходит к задачам, доводит дела до результата и постоянно ищет способы развиваться.

Почему Инженерный Колледж:

Работу в колледже выбрала, потому что ценит возможность совмещать преподавание и работу со студентами. Считает важным участвовать в формировании не только академических знаний, но и личностного развития студентов.
`,
  },
  {
    id: 4,
    name: "Жылдыз Бийгелдиева",
    photo: imgDSC0036,
    courses: ["General English"],
    highlights: [
      "15+ years of teaching",
      "Certificates of Cambridge",
      "Students placed at: Australia, Canada, China",
    ],
    description: "",
    bio: `Имя Фамилия: Жылдыз Бийгелдиева

Образование:

Получает степень магистра (M.A.) в области Curriculum & Instruction в North American University (Хьюстон, США), окончание ожидается в 2025 году. Имеет степень бакалавра по английскому языку и литературе (Alatoo International University, Бишкек), где обучалась на полном академическом гранте, была награждена золотой медалью за академические достижения и стипендией президента. Также проходила обучение по образовательной программе в Berea College (Кентукки, США) в рамках международной программы обмена UGRAD.

Опыт работы:

Имеет более 10 лет международного опыта преподавания английского языка в мультикультурной среде (Лаос, Кыргызстан, США). Работала преподавателем в International School of Laos в течение 6 лет, где вела занятия по программе Cambridge IGCSE, разрабатывала интерактивные уроки и развивала у учащихся навыки критического мышления и коммуникации. Руководила и тренировала команду Model United Nations.

Ранее работала в Silk Road International School (Кыргызстан), где преподавала английский язык учащимся с различным уровнем подготовки, внедряя современные образовательные технологии. Также имеет опыт работы в Learning Center Berea College (США), где оказывала академическую поддержку студентам.

Профессиональное развитие:

Прошла ряд международных тренингов, включая Cambridge CELTA, Cambridge IGCSE Syllabus Training, Oxford Teacher Training и SEBAT. Принимала участие в международных образовательных и культурных проектах, а также работала переводчиком и ассистентом на мероприятиях IFLC Kyrgyzstan.

Достижения:

Награждена сертификатом за вклад в благотворительные проекты, получила звание лучшего студента факультета английского языка, а также была финалистом программы UGRAD Global Exchange Program (Вашингтон, США).

Навыки:

Обладает навыками разработки учебных программ (IGCSE, ESL), академического наставничества, использования современных образовательных технологий, организации мероприятий и эффективной межкультурной коммуникации.

Немного о себе:

Ориентирована на создание поддерживающей и мотивирующей учебной среды, где учащиеся могут развивать уверенность, критическое мышление и языковые навыки. Особое внимание уделяет индивидуальному подходу и вовлечению студентов в активный учебный процесс.

Почему Инженерный Колледж:

Инженерный колледж предоставляет возможность применять современные образовательные подходы и международный опыт в обучении студентов. Работа в таком учреждении позволяет вносить вклад в развитие будущих специалистов, сочетая академические знания с практическими навыками и глобальным мышлением.
`,
  },
  {
    id: 5,
    name: "Азамат Аскаров",
    courses: ["IT"],
    highlights: [
      "Bachelor's degree at METU",
      "10+ years coaching",
      "IMO silver medal (2010)",
    ],
    description: "",
    bio: `1. Имя и фамилия

Азамат Аскаров


2. Образование

Окончил факультет искусств и наук Ближневосточного технического университета (Middle East Technical University, METU) по специальности «Математика». Получил степень бакалавра в одном из ведущих технических вузов мира.

3. Опыт работы

Является ведущим специалистом по олимпиадной математике с более чем 10-летним опытом тренерской деятельности. С 2015 по 2025 годы работал главным тренером по подготовке к математическим олимпиадам в МОУ «Сапат» (г. Бишкек). За этот период подготовил плеяду призеров республиканских и международных интеллектуальных соревнований. С сентября 2026 года работает в Инженерном колледже Light Academy. Вписал свое имя в историю образования Кыргызстана, став первым кыргызстанцем, завоевавшим серебряную медаль на Международной математической олимпиаде (IMO 2010).


4. Немного о себе

Вся профессиональная деятельность Азамата посвящена математическому просвещению. Он искренне увлечен преподаванием и верит в потенциал молодого поколения. На базе колледжа основал и ведет кружок по подготовке к олимпиадам для учащихся 6–11 классов, а также проводит индивидуальные занятия. Почти всё свое время посвящает обучению школьников и студентов, помогая им осваивать сложные математические концепции и развивать логическое мышление.


5. Почему выбран Инженерный колледж

Выбрал Инженерный колледж в первую очередь из-за сильного коллектива. Азамат отмечает, что здесь собраны талантливые и опытные специалисты, профессионализм которых он знает лично. Также важным фактором стал современный подход руководства к образовательному процессу. По его мнению, сочетание сильной команды и инновационного менеджмента создает идеальные условия для подготовки будущих инженерных лидеров.`,
  },
];

const courseRegistrationLinks: Record<string, string> = {
  IELTS: "https://docs.google.com/forms/d/e/1FAIpQLSdivO84i13a08EEov4arMHMO93CDcxTBjyh2z10mlcMKMjI2w/viewform?usp=dialog",
  SAT: "https://docs.google.com/forms/d/e/1FAIpQLSekY_h35jnvh1TWakxl_7NrNqlT9b2IlPa1DJHhQQUnIjh40Q/viewform?usp=dialog",
  "SAT + IELTS": "https://docs.google.com/forms/d/e/1FAIpQLSeFpjuMCwbAdDlai1Yrg4_hqqF2iudpqZJjPIz5p6McbtgWEw/viewform?usp=dialog",
  "Academic Writing": "https://docs.google.com/forms/d/e/1FAIpQLSdBsO2Fdf1tCCpYj4BMHkaCTNdBkj_cjAEiBh-5MrTgP6MOgg/viewform?usp=dialog",
  "General English": "https://docs.google.com/forms/d/e/1FAIpQLSfKyadzPB-xWNOxRqK0N4oNw5a8LSbBdrlsEoVa_DIYmUUGyQ/viewform?usp=publish-editor",
  IT: "https://docs.google.com/forms?course=IT",
};

const courseToRoute: Record<string, string> = {
  IELTS: "/course/ielts",
  SAT: "/course/sat",
  "SAT + IELTS": "/course/combined",
  "Academic Writing": "/course/academic-writing",
  "General English": "/course/general-english",
  IT: "/course/it",
};

export function TeachersPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Наши </span>
            <span className="text-primary">Учителя</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Познакомьтесь с нашей командой опытных преподавателей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className="relative bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all overflow-hidden group hover:-translate-y-2"
            >
              <div className={`absolute ${index % 2 === 0 ? 'bottom-0 right-0' : 'top-0 left-0'} w-64 h-64 bg-primary rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden hover:scale-110 transition-transform duration-300">
                  {teacher.photo ? (
                    <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={64} className="text-white" />
                  )}
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{teacher.name}</h2>
                </div>

                {/* Описание учителя скрыто по запросу */}

                <div className="space-y-2">
                  {teacher.highlights ? (
                    teacher.highlights.map((h: string) => (
                      <div key={h} className="flex items-center gap-3 text-white">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{h}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{teacher.degree}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{teacher.students}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setSelectedTeacher(teacher)}
                    className="inline-block w-full md:w-auto bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Узнать больше об учителе
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedTeacher && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedTeacher(null)}></div>
            <div className="relative bg-card w-11/12 md:w-2/3 lg:w-1/2 rounded-2xl p-8 z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedTeacher.name}</h3>
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="text-white/70 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {selectedTeacher.photo && (
                <div className="flex justify-center mb-4">
                  <img src={selectedTeacher.photo} alt={selectedTeacher.name} className="w-32 h-32 rounded-full object-cover" />
                </div>
              )}

              <div className="mb-4">
                {selectedTeacher.bio && (
                  <div className="prose prose-invert max-h-64 overflow-auto">
                    {selectedTeacher.bio.split('\n\n').map((para: string, i: number) => (
                      <p key={i} className="text-white/80 mb-3">{para}</p>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-white/60">Степень</p>
                  <p className="text-white font-bold">{selectedTeacher.degree}</p>
                </div>
                <div>
                  <p className="text-white/60">Студентов</p>
                  <p className="text-white font-bold">{selectedTeacher.students}</p>
                </div>
              </div>

              <div>
                <p className="text-white/60 mb-2">Курсы</p>
                <div className="flex flex-wrap gap-2">
                  {selectedTeacher.courses.map((c: string) => (
                    <span key={c} className="bg-white/5 px-3 py-1 rounded-full text-white">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    
  );
}
