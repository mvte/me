import "./index.scss";

const TimelineCard = ({ company, location, position, date, description}) => {
    return (
        <div className="card-container">
            <div className="timeline-dot" />
            <div className="timeline-line" />
            <div className="timeline-card">
                <div className="timeline-content">
                    <div className="left">
                        <div className="company-location">
                            {company} - {location}
                        </div>
                        <div className="position">
                            {position}
                        </div>
                        <div className="date">
                            {date}
                        </div>
                    </div>
                    <div className="right">
                        <div className="description">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default TimelineCard;