import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import mentorData from "../../src/mentorData.json";

class MentorDirectory extends Component {
  // UPON LOAD: get all mentors from database (query all)
  // NEXT STEP: search bar => search passed to AWS AppSync => returns updated query
  // IDEAL CASE: filters with multiple fields

  // TODOs
  // Add API endpoint instead of mentors.json

  render() {
    return (
      <div>
        <Typography h2>Mentor Directory</Typography>
        <Typography paragraph>
          Use this page to filter and search for mentors.
        </Typography>
      </div>
    );
  }
}
export default MentorDirectory;

/* 
import timelineData from '_path_to_file_';
const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

const MentorCard = ({ data }) => (
    <div className="mentor-card">
      <div className="timeline-item-content">
        <span className="tag">
          {data.category.tag}
        </span>
        <a>{data.linkedin}</a>  
      </div>
    </div>
); */
