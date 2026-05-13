"use client";

import { useState } from "react";

const previews = [
  {
    title: "Events entdecken",
    image: "/images/leylix/homescreen.PNG",
    text: "Regionale Events, echte Communities und neue Begegnungen direkt in deiner Umgebung.",
  },

  {
    title: "Eventerstellung",
    image: "/images/leylix/event-detail.PNG",
    text: "Events erstellen, Teilnehmer erreichen und Veranstaltungen professionell organisieren.",
  },

  {
    title: "Vereine & Communities",
    image: "/images/leylix/news.PNG",
    text: "Vereine sichtbarer machen, Mitglieder gewinnen und regionale Communities stärken.",
  },

  {
    title: "Sponsoring",
    image: "/images/leylix/ticket-category.PNG",
    text: "Unternehmen und regionale Sponsoren mit passenden Events verbinden.",
  },
];

export default function ExperiencePreview() {
  const [activePreview, setActivePreview] = useState<number | null>(null);

  return (
    <>
      <div className="experienceGrid" style={{ position: "relative", zIndex: 2 }}>
        {previews.map((preview, index) => (
          <article
            key={index}
            className="experienceCard clickableCard"
            onClick={() => setActivePreview(index)}
          >
            <div className="experienceText">
              <span>0{index + 1}</span>
              <h3>{preview.title}</h3>
              <p>{preview.text}</p>
            </div>

            <div className="experiencePreview">
              <img src={preview.image} alt={preview.title} />
            </div>
          </article>
        ))}
      </div>

      {activePreview !== null && (
        <div
  className="previewModal"
  style={{ position: "fixed" }}
  onClick={() => setActivePreview(null)}
>
          <div
            className="previewPhone"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="previewPhoneNotch"></div>

            <img
              src={previews[activePreview].image}
              alt={previews[activePreview].title}
            />

            <div className="previewContent">
              <h3>{previews[activePreview].title}</h3>
              <p>{previews[activePreview].text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}