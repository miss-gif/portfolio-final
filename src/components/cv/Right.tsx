import axios from "axios";
import { useEffect, useState } from "react";
import "./Right.scss";

interface SubSection {
  subTitle: string;
  content:
    | string
    | Array<{
        projectTitle: string;
        date: string;
        role: string;
        teamComposition: string;
        details: string;
      }>;
}

interface Section {
  sectionTitle: string;
  subSections: SubSection[];
}

const Right: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    // JSON 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get("/public/json/pr.json");
        setSections(response.data.sections);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cv__right">
      {sections.map((section, index) => (
        <div key={index} className="cv__right-section">
          <div className="cv__right-section__title">{section.sectionTitle}</div>
          <div className="cv__right-section__content">
            {section.subSections.map((subSection, subIndex) => (
              <div key={subIndex} className="cv__right-subsection">
                <div className="cv__right-subsection__title">
                  {subSection.subTitle}
                </div>
                <div className="cv__right-subsection__content">
                  {Array.isArray(subSection.content) ? (
                    subSection.content.map((project, projectIndex) => (
                      <div key={projectIndex} className="cv__right-project">
                        <div className="cv__right-project__title">
                          {project.projectTitle}
                        </div>
                        <div className="cv__right-project__date">
                          {project.date}
                        </div>
                        <div className="cv__right-project__role">
                          {project.role}
                        </div>
                        <div className="cv__right-project__team">
                          {project.teamComposition}
                        </div>
                        <div className="cv__right-project__details">
                          {project.details}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>{subSection.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right;
