import React from "react";

const skills = [
  { name: "FastApi", percent: 60 },
  { name: "Microsoft Excel", percent: 75 },
  { name: "SQL Alchemy", percent: 70 },
  { name: "Promt Engineering", percent: 65 },
  { name: "SQL", percent: 75 },
  { name: "C++,Python", percent: 70},
  { name: "Power Bi", percent: 70},
];

const Skills = () => (
  <section id="skills" className="text-gray-100 py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-12 text-center text-yellow-400">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="mb-4 animate-fadeInUp">
            <div className="flex justify-between mb-1">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-blue-400 font-bold">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-yellow-400 h-3 rounded-full transition-all duration-700"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
