import React from 'react';
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
              />
            );
          })}
      </div>

      {projects.length < 5 && (
        <AddProject
          projects={projects}
          setNotableProjects={setNotableProjects}
        />
      )}
    </div>
  );
}

export default Projects;
