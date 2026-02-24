import {motion} from 'framer-motion';

const ProjectCard = ({contentObj}) => {

    return (
        <motion.div className="blur-bg-strong shadow-custom-lg rounded-lg min-h-100 ">
            <div className="flex flex-col w-full items-end">
                <img src={contentObj.imgPath ? contentObj.imgPath : '/images/placeholder.jpg'}
                     alt={`Screenshot for ${contentObj.name}`}
                     className="w-full max-h-32 object-cover object-center rounded-lg"/>
                <div className="p-4 flex flex-col gap-4 ">
                    <div className="flex gap-4 items-end">
                        <h4 className="font-display font-bold text-2xl text-forest "
                        >
                            {contentObj.name}
                        </h4>
                        {contentObj.isLive ? <span> Live</span> : <span>Coming Soon</span>}
                    </div>
                    <p className="text-base">{contentObj.description}</p>
                    <div className="flex gap-4">
                        {contentObj.techStack.map(entry => (
                            <div key={entry}
                                 className="blur-bg-strong w-1/5 h-8 text-xs font-medium flex items-center justify-center rounded-lg shadow-custom-lg">{entry}</div>
                        ))}
                    </div>
                    <hr/>
                    <div>
                        {contentObj.liveLink && <span>
                            <a href={contentObj.liveLink}
                               className="text-sm hover:text-accent hover:cursor-pointer">
                                Live
                            </a>
                        </span>}
                        {contentObj.githubLink && <span>
                            <a href={contentObj.githubLink}
                               className="text-sm hover:text-accent hover:cursor-pointer">
                                GitHub
                            </a>
                        </span>}
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default ProjectCard;