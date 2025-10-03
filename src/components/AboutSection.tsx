export default function AboutSection() {
  const techStack = [
    {
      category: "Backend",
      techs: ["Laravel", "NestJS", "FastAPI", "Golang", "Express.js"],
    },
    {
      category: "Frontend",
      techs: ["Next.js", "React", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Database",
      techs: ["MySQL", "PostgreSQL", "Supabase", "MongoDB"],
    },
    {
      category: "DevOps & Tools",
      techs: ["Docker", "NGINX", "Git", "Linux CLI"],
    },
    {
      category: "Integration",
      techs: ["Google APIs", "WhatsApp Gateway", "Midtrans", "Mapbox"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a 5th-semester Software Engineering student at{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Universitas Gadjah Mada
              </span>
              , specializing in backend development with expertise in building
              scalable and efficient systems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in tech extends beyond coding. I've held leadership
              positions in multiple organizations including{" "}
              <span className="font-semibold">KMTEDI</span>,{" "}
              <span className="font-semibold">ASSETS UGM</span>, and{" "}
              <span className="font-semibold">KOMATIK UGM</span>, where I've led
              technical teams and organized educational programs for fellow
              students.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a Teaching Assistant for Web Programming and Information
              Technology courses at UGM, I've developed strong communication
              skills and a passion for knowledge sharing. I believe that the
              best developers are those who can not only write great code but
              also empower others to do the same.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently seeking{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                internship and freelance opportunities
              </span>{" "}
              where I can contribute to impactful projects while continuing to
              grow as a backend developer and future technical leader.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  13+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Organizations
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  3.55
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  GPA
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Stack & Skills
            </h3>
            <div className="space-y-6">
              {techStack.map((stack, index) => (
                <div key={index}>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Core Competencies
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  RESTful API Development & Microservices Architecture
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Database Design & Optimization
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Third-party API Integration
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Technical Leadership & Team Collaboration
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Docker Containerization & Deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
