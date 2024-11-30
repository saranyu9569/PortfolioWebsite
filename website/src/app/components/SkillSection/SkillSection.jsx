import React from "react";

function SkillSection() {
  const skills = [
    { name: "Python", percentage: 100 },
    { name: "Java", percentage: 100 },
    { name: "C", percentage: 95 },
    { name: "Javascript", percentage: 90 },
    { name: "Prolog", percentage: 90 },
    { name: "C++", percentage: 85 },
    { name: "C#", percentage: 85 },
    { name: "Typescript", percentage: 75 },
  ];

  return (
    <div className="p-24 mt-10">
      <h2 className="text-3xl font-semibold mb-2 lg:text-5xl xl:text-5xl">
        My Skills
      </h2>
      <div className="border border-2 w-2/5 mb-6 md:w-1/5" />
      <div className="mt-8">
        <h1 className="text-xl font-medium font-bold">
          <strong className="text-3xl">Expertise</strong>
          <div className="grid grid-cols-2 gap-4 ml-10 pt-3 text-2xl font-semibold">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Internet of Things (IOT)</li>
            <li>Cyber Security</li>
            <li>Web Development</li>
          </div>
        </h1>
      </div>

      {/* Grid Layout for the skills */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center">
            <div className="w-full">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold">
                      {skill.name} ({skill.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        skill.percentage === 100
                          ? "bg-green-600"
                          : skill.percentage >= 75
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
