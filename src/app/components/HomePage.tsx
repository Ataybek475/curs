import { Link } from "react-router";

const courses = [
  {
    id: 1,
    title: "IELTS",
    subtitle: "TEACHER",
    duration: "6 недель",
    frequency: "4 раза в неделю",
    price: "9000",
    description: "2 Reading и Writing, 2 Listening и Speaking",
    path: "/course/ielts",
  },
  {
    id: 2,
    title: "SAT",
    subtitle: "MATH",
    duration: "6 недель",
    frequency: "4 раза в неделю",
    price: "9000",
    description: "2 Math, 2 English",
    path: "/course/sat",
  },
  {
    id: 3,
    title: "SAT + IELTS",
    subtitle: "COMBO",
    duration: "6 недель",
    frequency: "Интенсив",
    price: "15000",
    description: "Комбинированный курс",
    path: "/course/combined",
  },
  {
    id: 4,
    title: "Academic Writing",
    subtitle: "WRITING",
    duration: "6 недель",
    frequency: "2 раза в неделю",
    price: "9000",
    description: "Intermediate и выше",
    path: "/course/academic-writing",
  },
  {
    id: 5,
    title: "General English",
    subtitle: "ENGLISH",
    duration: "6 недель",
    frequency: "3 раза в неделю",
    price: "7000",
    description: "Pre-Intermediate",
    path: "/course/general-english",
  },
  {
    id: 6,
    title: "IT",
    subtitle: "CODING",
    duration: "Уточняется",
    frequency: "Гибкий график",
    price: "---",
    description: "От студентов для студентов",
    path: "/course/it",
  },
];

export function HomePage() {
  return (
    <div className="relative">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Добро пожаловать в
            <span className="text-primary"> EC КУРСЫ</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get into your dream university
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              to={course.path}
              className="relative bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all group overflow-hidden hover:-translate-y-2 hover:shadow-lg"
            >
              <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-48 h-48 bg-primary rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h2 className="text-4xl font-bold mb-2">
                    <span className="text-primary">{course.title.split(' ')[0]}</span>
                    {course.title.split(' ').slice(1).length > 0 && (
                      <span className="text-white"> {course.title.split(' ').slice(1).join(' ')}</span>
                    )}
                  </h2>
                  <div className="inline-block bg-white text-black px-4 py-1 transform -rotate-2 font-bold">
                    {course.subtitle}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{course.frequency}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{course.description}</span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-white">{course.price}</p>
                    {course.price !== "---" && <p className="text-white/60">сом</p>}
                  </div>
                  <div className="text-primary group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
