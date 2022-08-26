import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css";
import workStudy  from '../assets/work-study-data';



function Experience() {
  return (
     <div className="experience">
     <div class='light x1'></div>
     <div class='light x2'></div>
     <div class='light x3'></div>
     <div class='light x4'></div>
     <div class='light x5'></div>
     <div class='light x6'></div>
     <div class='light x7'></div>
     <div class='light x8'></div>
     <div class='light x9'></div>
    <VerticalTimeline lineColor="#3e497a">

    {workStudy.map((experience)=>{
      return <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{ background:"#3e497a", color:"#fff"}} icon={experience.type === "study" ? <SchoolIcon/> : <WorkIcon/> }>
        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
        <p>{experience.place}</p>
        <p>{experience.date}</p>

      </VerticalTimelineElement>
    })}

    </VerticalTimeline>
    

    </div>
  )
}

export default Experience;