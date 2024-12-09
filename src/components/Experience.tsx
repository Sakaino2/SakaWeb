import "../styles.css";
import React, { useState, type MouseEventHandler } from "react";

interface Props {
  experience: ExperienceData;
}

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  experienceType: ExperienceType;
  className: string;
  stateNone: boolean;
}

const Experience = (props: Props) => {
  const { experience } = props;

  enum ExperienceStates {
    None,
    Developer,
    GraphicDesign,
  }

  const [experienceState, setExperienceState] = useState(ExperienceStates.None);
  const [columnState, setColumnState] = useState("grid grid-cols-2 h-auto");

  function onDevClick(): void {
    console.log("dev clicked");
    if (experienceState === ExperienceStates.Developer) {
        setExperienceState(ExperienceStates.None);
        setColumnState("grid grid-cols-2");
    } else {
        setExperienceState(ExperienceStates.Developer);
        setColumnState("grid grid-cols-1");
    }
  }

  function onGraphicClick(): void {
    console.log("graphic designer clicked");
    if (experienceState === ExperienceStates.GraphicDesign) {
        setExperienceState(ExperienceStates.None);
        setColumnState("grid grid-cols-2");
    } else {
        setExperienceState(ExperienceStates.GraphicDesign);
        setColumnState("grid grid-cols-1");
    }
  }

  return (
    <div className="h-auto" >
      <h3 className="section-subtitle">{experience.title}</h3>
      <div className={columnState}>
        {(experienceState === ExperienceStates.None ||
          experienceState === ExperienceStates.GraphicDesign) && (
            <div className="bg-blue-50 text-center">
                <ExperienceButton
                  experienceType={experience.graphicDesigner}
                  onClick={onGraphicClick}
                  className=""
                  stateNone={experienceState === ExperienceStates.None}
                ></ExperienceButton>
            </div>
        )}
        {(experienceState === ExperienceStates.None ||
          experienceState === ExperienceStates.Developer) && (
          <div className=" bg-red-50 text-center">
            <ExperienceButton
            experienceType={experience.developer}
            onClick={onDevClick}
            className=""
            stateNone={experienceState === ExperienceStates.None}
            ></ExperienceButton>
            </div>
        )}
      </div>
    </div>
  );
};

const ExperienceButton = (props: ButtonProps) => {
  const { experienceType, onClick, className, stateNone } = props;

  return (
    <button onClick={onClick} className={className}>
      <h3 className="text-center">{experienceType.title}</h3>
      {!stateNone && <p className="text-center">{experienceType.description}</p>}
    </button>
  );
};

export default Experience;
