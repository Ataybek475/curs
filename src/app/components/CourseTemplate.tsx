import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

interface CourseTemplateProps {
  title: string;
  subtitle: string;
  duration: string;
  frequency: string;
  price: string;
  teacher: string;
  description: string[];
  googleFormUrl?: string | undefined;
  disabled?: boolean;
}

export function CourseTemplate({
  title,
  subtitle,
  duration,
  frequency,
  price,
  teacher,
  description,
  googleFormUrl = "https://forms.google.com",
  disabled = false,
}: CourseTemplateProps) {
  const titleParts = title.split(' ');

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-primary rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors mb-12 text-lg"
        >
          <ArrowLeft size={24} />
          Назад к курсам
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-primary">{titleParts[0]}</span>
              {titleParts.slice(1).length > 0 && (
                <span className="text-white"> {titleParts.slice(1).join(' ')}</span>
              )}
            </h1>
            <div className="inline-block bg-white text-black px-6 py-2 transform -rotate-2 font-bold text-2xl mb-8">
              {subtitle}
            </div>

            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 mb-8">
              <p className="text-white/70 text-lg italic">
                "Get into your dream university."
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {description.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-white text-lg">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative bg-card border border-white/10 rounded-3xl p-10 hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-white/60 mb-1">Длительность</p>
                  <p className="text-white text-2xl font-bold">{duration}</p>
                </div>

                <div className="h-px bg-white/10"></div>

                <div>
                  <p className="text-white/60 mb-1">Частота занятий</p>
                  <p className="text-white text-2xl font-bold">{frequency}</p>
                </div>

                <div className="h-px bg-white/10"></div>

                <div>
                  <p className="text-white/60 mb-1">Преподаватель</p>
                  <p className="text-white text-2xl font-bold">{teacher}</p>
                </div>

                <div className="h-px bg-white/10"></div>

                <div>
                  <p className="text-white/60 mb-2">Стоимость</p>
                  <p className="text-primary text-5xl font-bold">{price}</p>
                  {price !== "Уточняется" && <p className="text-white/60 text-xl">сом</p>}
                </div>
              </div>

              {disabled ? (
                <button
                  disabled
                  className="block w-full bg-gray-400 text-white text-center px-8 py-4 rounded-xl font-bold text-lg cursor-not-allowed opacity-70"
                >
                  Зарегистрироваться на курс
                </button>
              ) : (
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                >
                  Зарегистрироваться на курс
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
