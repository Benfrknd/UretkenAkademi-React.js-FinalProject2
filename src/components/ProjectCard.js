import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onclick }) => {
  const handleCardClick = () => {
    if (onclick) {
      window.location.href = onclick;
    }
  };
  
  return (
    <Col size={12} sm={6} md={4} onClick={handleCardClick}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}