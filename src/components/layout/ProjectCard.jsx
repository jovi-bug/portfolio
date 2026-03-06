import {motion} from 'framer-motion';
import {ArrowUpRight} from 'lucide-react';
import {useTranslation} from "react-i18next";

const ProjectCard = ({project}) => {
    const {i18n} = useTranslation();

    // TODO Bei Hover über Karte nur das Bild reinzoomen
    return (
        <motion.div className="scaling-div blur-bg-strong shadow-custom-lg rounded-lg min-h-100 ">
            <div className="flex flex-col w-full h-full items-end justify-between">

                <img src={project.imgPath ? project.imgPath : '/images/placeholder.jpg'}
                     alt={`Screenshot for ${project.name[i18n.language]}`}
                     className="w-full max-h-48 object-cover object-center rounded-lg"/>


                <div className="p-4 flex flex-col gap-4 ">

                    {/* Headline and Live-Status */}
                    <div className="flex gap-4 justify-between content-center">
                        <h4 className="font-display font-bold text-2xl text-forest "
                        >
                            {project.name[i18n.language]}
                        </h4>
                        {project.isLive
                            ? <div className="flex gap-2 items-center">
                                <div className="w-3 h-3 rounded-full bg-green-400"/>
                                <span className="text-sm text-forest mr-4"> Live</span>
                            </div>
                            : <div className="flex gap-2 items-center">
                                <div className="w-3 h-3 rounded-full bg-red-500"/>
                                <span className="text-sm text-forest mr-4"> Coming Soon</span>
                            </div>
                        }
                    </div>

                    {/* Description and Tags */}
                    <p className="text-base">{project.description[i18n.language]}</p>
                    <div className="flex gap-4 w-full">
                        {project.techStack.map(entry => (
                            <div key={entry}
                                 className="bg-sage/30 w-1/5 h-8 text-xs text-center font-medium flex items-center justify-center rounded-xl shadow-custom-lg">{entry}</div>
                        ))}
                    </div>

                    {/* Links to Github and Live */}
                    <div className="w-full">
                        <hr className="border-forest-mid mb-4"/>

                        <div className="flex gap-8 w-full items-center">
                            {project.liveLink && project.isLive && <div className="flex gap-1 items-center">
                                <ArrowUpRight className="w-5 h-5 text-forest-mid"/>

                                <a href={project.liveLink}
                                   target="_blank"
                                   className="text-sm hover:text-accent hover:cursor-pointer">
                                    Live
                                </a>
                            </div>}
                            {project.githubLink && <div className="flex gap-1 items-center">
                                <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-forest-mid">
                                    <title>GitHub</title>
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                <a href={project.githubLink}
                                   target="_blank"
                                   className="text-sm text-forest hover:text-accent hover:cursor-pointer">
                                    GitHub
                                </a>
                            </div>}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default ProjectCard;