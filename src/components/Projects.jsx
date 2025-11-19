import React from "react";

const Projects = () => {
    const projects = [
        { title: "UI/UX Design", count: 117 },
        { title: "Front End Development", count: 84 },
        { title: "Mobile App Development", count: 32 },
    ];

    return (
        <section className="px-6 py-12">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400">{project.count} Projects</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
