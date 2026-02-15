import skills from "../data/skills.js";

function SkillsSection() {
    return (

        <>
            <div>
                {skills.map(skill => (
                   <h3>{skill.name}</h3>
                ))}

            </div>
        </>
    );
}

export default SkillsSection
;