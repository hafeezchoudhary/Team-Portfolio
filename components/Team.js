import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Team = () => {
    const teamMembers = [
        {
            name: "Hafeez Choudhary",
            role: "Lead Full-Stack Developer",
            description:
                "Leads the team in building scalable web solutions using React, Node.js, Express, and MongoDB. Skilled in managing both frontend and backend workflows.",
            skills: ["React", "Next.js" , "Node.js", "JavaScript", "MongoDB", "Express", "Tailwind CSS"],
            github: "https://github.com/hafeezchoudhary",
            linkedin: "https://www.linkedin.com/in/hafeez-choudhary/",
            resume: "https://drive.google.com/file/d/1wlWGlXTStLxUCzT6ZPt0MUGtV61OUDrB/view?usp=drive_link",
        },
        {
            name: "Saurabh Khajekar",
            role: "Support Team",
            description:
                "Provides technical assistance, resolves user issues, and ensures smooth communication between clients and the development team for efficient problem-solving.",
            skills: ["Assist", "Communication"],
            linkedin: "https://www.linkedin.com/in/saurabh-khajekar-a05596310/",
            resume: "/resumes/saurabh_resume.pdf",
        },
        {
            name: "Niraj Patil",
            role: "UI/UX Designer",
            description:
                "Designs modern, user-friendly interfaces with Figma, Adobe XD, and Tailwind CSS, focusing on seamless user experience.",
            skills: ["Figma", "Design Systems", "User Research", "Tailwind CSS", "Accessibility"],
            linkedin: "https://www.linkedin.com/in/niraj-patil-593a3228b/",
            resume: "/resumes/niraj_resume.pdf",
        },
    ];

    return (
        <>
            <div id="team" className="scroll-mt-20 flex flex-col items-center px-4 py-10 bg-[#060a16]">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-6">
                        Our Team
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl md:text-xl max-w-4xl mx-auto px-2">
                        A team of aspiring web developers, building modern and creative digital experiences.
                        Learning, coding, and growing together to shape the future of the web.
                    </p>
                </div>

                <div className="flex flex-col items-center lg:py-16 lg:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-[#0a111e] via-[#070e1d] to-[#0c111a] rounded-2xl shadow-lg p-11 flex flex-col items-center text-center hover:shadow-cyan-400 hover:shadow-xl/20 hover:cursor-pointer transform transition-transform hover:-translate-y-2 duration-500">

                                <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-400 text-sm mb-4">{member.description}</p>

                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {member.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#1b1f2a] text-gray-300 px-3 py-1 rounded-full text-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center gap-6 text-gray-300 text-lg">
                                    {member.github && (
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-cyan-400 cursor-pointer">
                                            <FaGithub />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-cyan-400 cursor-pointer">
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {member.resume && (
                                        <a
                                            href={member.resume}
                                            download
                                            className="hover:text-cyan-400 cursor-pointer">
                                            <FaDownload />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
