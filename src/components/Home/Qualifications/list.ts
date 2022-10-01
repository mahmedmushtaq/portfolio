const technologies_which_i_used = (t: any) =>
  t("home:technologies_which_i_used");

export const qualificationsList = (t: any) => [
  {
    id: "smodin-io",
    heading: "Full Stack developer at Smodin.io",
    date: "Feb 2022 - October 2022",
    technologiesList: `${t(
      "home:technologies_which_i_am_using"
    )} - Next, GCP, Firebase, MUI`,
  },
  {
    id: "foreseer-co",
    heading: "Front End developer at Foreseer.co ( Freelance )",
    date: "Dec 2021- Jan 2022",
    technologiesList: `${technologies_which_i_used(
      t
    )}:- React, React Native, AWS amplify, dynamoDB`,
  },
  {
    id: "actual-ly",
    heading: " Full-stack developer at Actual.ly ( Contract )",
    date: "Mar 2021- Sep 2021",
    technologiesList: `${technologies_which_i_used(
      t
    )}:- React, AWS serverless, dynamoDB, Node, Twilio`,
  },
  {
    id: "upwork-freelance",
    heading: "Freelancer at Upwork ( Freelance, Contract )",
    date: "Jan 2020- Feb 2021",
    technologiesList: `${technologies_which_i_used(
      t
    )}:- TypeScript, React, React Native, Node.js, MondoDB, MySql, Next.js, Testing,  GraphQL, AWS ( amplify, serverless, dynamodb, kinesis video streaming ) `,
  },
  {
    id: "orthiya-tec",
    heading: "Full-stack developer at orthiya technology ( Contract )",
    date: "May 2020 - Aug 2020",
    technologiesList: `${technologies_which_i_used(
      t
    )} React, Node.js, MongoDB, GraphQL, Website Scrapping, Laravel, MySql, Next.js, Testing`,
  },
  {
    id: "contest-app",
    heading: "Full-stack developer at Contest",
    date: "Sep 2017 - June 2019",
    technologiesList: `${technologies_which_i_used(
      t
    )} Android, Java, Php, MySql, Firebase, Node.js, Restful web services, Testing`,
  },
];
