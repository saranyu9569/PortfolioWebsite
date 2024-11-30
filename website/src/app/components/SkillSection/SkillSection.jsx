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
    <div className="p-24 sm:p-12 md:p-24 lg:p-24 mt-10 md:p-14 2xl:p-44">
      <h2 className="text-3xl sm:text-3xl lg:text-5xl font-semibold mb-4 text-center md:text-left">
        My Skills
      </h2>
      <div className="border border-2 w-2/4 sm:w-1/4 lg:w-1/5 mb-6 mx-auto md:mx-0" />
      
      <div className="mt-8">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-medium font-bold">
          <strong className="text-2xl sm:text-3xl">Expertise</strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 ml-2 sm:ml-6 pt-3 text-lg sm:text-xl font-semibold">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Internet of Things (IoT)</li>
            <li>Cyber Security</li>
            <li>Web Development</li>
          </div>
        </h1>
      </div>

      {/* Responsive Grid Layout for Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center">
            <div className="w-full">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm sm:text-base lg:text-lg font-semibold">
                    {skill.name} ({skill.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
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
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
