import React, { useEffect } from 'react';
import { FieldTitle } from '../../../../../../components';
import { useStyles } from './styles';
import { AddProject } from '../project/addButton';
import { Project } from '../project';

function Projects({ projects, setNotableProjects, sectionId, autosaveIsOn }) {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);

  useEffect(() => {
    const newProj = projects.filter((item) => item._id === 'new');
    newProj.length === 0 && setDisabled(false);
  }, [projects]);

  return (
    <div style={{ width: '100%' }}>
      <FieldTitle
        name="Projects"
        description="What have you worked on in the industry that will impress clients? Please specify your role within the project."
        warning=""
        inline={false}
      />

      <div className={classes.testimonialWrapper}>
        {projects &&
          projects.map((project, index) => {
            return (
              <Project
                project={project}
                index={index}
                setNotableProjects={setNotableProjects}
                projects={projects}
                key={`testimonial_${index}`}
                sectionId={sectionId}
                autosaveIsOn={autosaveIsOn}
                setDisabled={setDisabled}
              />
            );
          })}
      </div>

      {projects.length < 5 && !disabled && (
        <AddProject
          projects={projects}
          setNotableProjects={setNotableProjects}
          setDisabled={setDisabled}
          disabled={disabled}
        />
      )}
    </div>
  );
}

export default Projects;
