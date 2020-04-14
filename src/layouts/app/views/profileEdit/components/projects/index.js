import React, { useEffect } from 'react';
import { FieldTitle } from '../section/fieldTitle';
import { useStyles } from './styles';
import { AddProject } from '../project/addButton';
import { Project } from '../project';

function Projects({
  projects,
  setChanged,
  setNotableProjects,
  sectionId,
  autosaveIsOn,
}) {
  const classes = useStyles();
  const [showAdd, setShowAdd] = React.useState(true);

  useEffect(() => {
    const newProj = projects.filter((item) => item.id === 'new');
    newProj.length === 0 && setShowAdd(true);
  }, [projects]);

  return (
    <div style={{ width: '100%' }}>
      <FieldTitle
        name="Projects"
        description="What have you worked on in the industry that will impress clients? Please specify your role within the project."
        warning=""
      />

      <div className={classes.testimonialWrapper}>
        {projects &&
          projects.map((project, index) => {
            return (
              <Project
                project={project}
                setChanged={setChanged}
                index={index}
                setNotableProjects={setNotableProjects}
                projects={projects}
                key={`testimonial_${index}`}
                sectionId={sectionId}
                autosaveIsOn={autosaveIsOn}
                setShowAdd={setShowAdd}
              />
            );
          })}
      </div>

      {projects.length < 5 && showAdd && (
        <AddProject
          projects={projects}
          setNotableProjects={setNotableProjects}
          setShowAdd={setShowAdd}
        />
      )}
    </div>
  );
}

export default Projects;
