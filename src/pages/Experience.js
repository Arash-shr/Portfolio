import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css";


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
      <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{ background:"#3e497a", color:"#fff"}} icon={<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title">Aryan Institute of Scicence and Technology</h3>
        <p>Bachelors Information Technology</p>
        <p>2016-2019</p>

      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education"  iconStyle={{ background:"#3e497a", color:"#fff"}} icon={<WorkIcon/>}>
        <h3 className="vertical-timeline-element-title">Junior Business Analyst</h3>
        <p>Kalleh Dairy</p>
        <p>2016-2016</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education"  iconStyle={{ background:"#3e497a", color:"#fff"}} icon={<WorkIcon/>}>
        <h3 className="vertical-timeline-element-title">Junior Front End Developer</h3>
        <p>HKA Smart Home</p>
        <p>2017-2018</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education"  iconStyle={{ background:"#3e497a", color:"#fff"}} icon={<SchoolIcon/>}>
        <h3 className="vertical-timeline-element-title">Sheffield Hallam University</h3>
        <p>MSc Information Technology Management</p>
        <p>2021-2022</p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    

    </div>
  )
}

export default Experience;