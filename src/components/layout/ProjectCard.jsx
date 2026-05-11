import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const ProjectCard = ({project}) => {
    const {i18n} = useTranslation();

    return (
        <motion.div className="scaling-div blur-bg-strong shadow-custom-lg rounded-lg min-h-100 ">
            <div className="flex flex-col w-full h-full items-end justify-between">

                <img src={project.imgPath ? project.imgPath : '/images/placeholder.jpg'}
                     alt={`Screenshot for ${project.name[i18n.language]}`}
                     className="w-full max-h-48 object-cover object-top rounded-lg"/>


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
                            {project.githubLink && (
                                <div className="flex gap-1 items-center">
                                    <Github className="w-5 h-5 text-forest-mid" />
                                    <a href={project.githubLink}
                                       target="_blank"
                                       className="text-sm text-forest hover:text-accent hover:cursor-pointer">
                                        GitHub
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default ProjectCard;