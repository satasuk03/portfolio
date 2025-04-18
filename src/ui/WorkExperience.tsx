import React from "react";

export function WorkExperience() {
  const data = [
    {
      title: "DEC 2021 - PRESENT",
      subtitle: "Software Engineer at Cryptomind Group",
      content: (
        <div className="font-abel text-sm font-medium">
          Working as a full-time Full Stack Engineer and a Feature Lead.
          Responsible for designing, developing and testing the GuildFi/Radiant
          web app which has over 100k users and 25k active users per day.
        </div>
      ),
    },
    {
      title: "FEB 2020 - DEC 2021",
      subtitle: "Software Engineer/BA/SA at Blockfint",
      content: (
        <div className="font-abel text-sm font-medium">
          As a full-time Software Engineer specializing in the banking sector, I
          have worked on core-banking projects involving Savings, Lending, and
          Certificate of Deposit systems. My responsibilities included gathering
          requirements, designing, developing, and testing the systems to ensure
          they meet business and technical specifications.
        </div>
      ),
    },
    {
      title: "JUN 2019 - MAY 2020",
      subtitle: "Data Engineer at Phatra Asset Management",
      content: (
        <div className="font-abel text-sm font-medium">
          As a part-time Data Engineer in the Research Department, I specialized
          in ETL processes and automated data management. My responsibilities
          included exploring, scraping, extracting, and transforming data from
          files or websites, and storing it in databases. Additionally, I
          utilized various tools, such as Tableau, for data visualization and
          worked on implementing and improving data pipelines.
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip font-abel h-fit">
      <h2 className="sm:text-2xl text-lg font-medium font-poppins text-secondary/80 sm:mb-4 mb-2">
        Work Experience
      </h2>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="collapse rounded-none collapse-arrow text-terminal-white/80"
          >
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked={index === 0}
            />
            <div className="collapse-title p-0 font-semibold text-terminal-white">
              {item.title}
              <div className="text-xs text-terminal-white/80">
                {item.subtitle}
              </div>
            </div>
            <div className="collapse-content text-sm p-0">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
