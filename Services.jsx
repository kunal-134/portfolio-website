import React from "react";

const projects = [
  {
    image: "portfo.png",
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with Windsurf AI, featuring animations and responsive design.",
    link: ""
  },
  {
    image: "piza.png",
    title: "Pizza Hurt Analysis ",
    desc: "An interactive dashboard for data visualization and analytics using Python and Plotly.",
    link: "https://github.com/kunal-134/Pizza-Hurt-Report"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "OLA Ride Analysis",
    desc: "A conversational AI chatbot powered by NLP and machine learning, deployed as a web app.",
    link: "https://github.com/kunal-134/OLA-Project"
  }
];

const Projects = () => (
  <section id="projects" className="text-gray-100 py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-12 text-center text-yellow-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="rounded-2xl border border-transparent hover:border-yellow-400 shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 bg-transparent"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-yellow-400">{project.title}</h3>
            <p className="text-gray-200 text-base mb-4">{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-yellow-400 text-gray-900 font-bold shadow hover:bg-yellow-300 transition">View Project</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

