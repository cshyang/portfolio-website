"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import CompanyIcon from "./CompanyIcon";
import IconBadge from "./IconBadge";

function Experience() {
  const { ref } = useSectionInView("Experience", 0.4);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Journey</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid  rgba(255,255,255,005)",
              }}
              date={item.date}
              icon={
                // Prefer normalized logo rendering when iconSrc is provided
                (item as any).iconSrc ? (
                  <CompanyIcon
                    src={(item as any).iconSrc}
                    alt={(item as any).iconAlt ?? "Company logo"}
                    size={60}
                  />
                ) : (
                  <IconBadge
                    size={72}
                    offsetY={(item as any).iconOffsetY ?? -3}
                  >
                    {(item as any).icon}
                  </IconBadge>
                )
              }
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                width: "72px",
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
              }}
            >
              <h3 className="font-semibold captalize">{item.title}</h3>
              <p className="!font-normal !text-sm !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal !text-sm text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
