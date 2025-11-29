import motivation from "../assets/motivation.jpg";
import conseillerIA from "../assets/conseillerIA.jpg";
import weather from "../assets/weather.jpg";

export default function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Conseiller IA",
      image: conseillerIA,
      link: "https://boy-aad.github.io/Conseiller_IA/",
      desc: "Application interactive qui guide les nouveaux bacheliers dans le choix de leur orientation. Elle analyse les préférences et compétences pour proposer des filières adaptées, offrant ainsi un accompagnement personnalisé dans leurs décisions académiques.",
    },
    {
      id: 2,
      title: "WeatherNow",
      image: weather,
      link: "https://boy-aad.github.io/weathernow/",
      desc: "Application météo moderne qui fournit les prévisions en temps réel pour n’importe quelle ville. Intégration d’une API météo pour afficher la température, l’humidité et les conditions climatiques, avec une interface intuitive et responsive.",
    },
    {
      id: 3,
      title: "Motivation",
      image: motivation,
      link: "https://boy-aad.github.io/Citations-Motivantes/",
      desc: "Application web de motivation qui affiche des citations inspirantes provenant d’une API. Elle permet aux utilisateurs de découvrir chaque jour de nouvelles phrases motivantes pour booster leur productivité et leur état d’esprit positif.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-white px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Mes Projets
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {myProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-80"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <p className="text-white opacity-70 p-4">{project.desc}</p>
            <div className="p-4 text-center">
              <button className="bg-amber-600 py-2 px-4 rounded-full text-xl font-semibold hover:bg-amber-900">
                {project.title}
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
