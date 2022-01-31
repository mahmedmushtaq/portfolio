import { Code, Database, FileText, Box } from "react-feather";

const mySkillsList = [
  {
    id: 1,
    icon: Code,
    heading: "Frontend Development",
    description: "More Than 4 years of experience",
    list: [
      { id: 1, heading: "HTML, CSS, JAVASCRIPT", percentage: 97 },
      { id: 2, heading: "Typescript, webpack, babel", percentage: 85 },
      { id: 3, heading: "React, React Native", percentage: 100 },
      { id: 4, heading: "Next", percentage: 98 },
      { id: 5, heading: "Web3", percentage: 80 },
      { id: 6, heading: "AWS", percentage: 85 },
      { id: 7, heading: "WordPress", percentage: 100 },
      { id: 8, heading: "Shopify", percentage: 100 },
      { id: 9, heading: "Unit Testing", percentage: 100 },
    ],
  },
  {
    id: 2,
    icon: FileText,
    heading: "Backend Development",
    description: "More Than 4 years of experience",
    list: [
      { id: 1, heading: "Node, Express", percentage: 97 },
      { id: 2, heading: "AWS, GCP", percentage: 85 },
      { id: 3, heading: "Microservices Architecture", percentage: 99 },
      { id: 4, heading: "Laravel", percentage: 80 },
      { id: 8, heading: "Unit Testing", percentage: 100 },
    ],
  },

  {
    id: 3,
    icon: Database,
    heading: "Databases",
    description: "More Than 4 years of experience",
    list: [
      { id: 1, heading: "MongoDB", percentage: 97 },
      { id: 2, heading: "MySql", percentage: 95 },
      { id: 4, heading: "PostgreSql", percentage: 80 },
    ],
  },
  {
    id: 4,
    icon: Box,
    heading: "Blockchain",
    description: "More Than 2 years of experience",
    list: [
      { id: 1, heading: "Solidity", percentage: 97 },
      { id: 2, heading: "Ganache", percentage: 95 },
      { id: 4, heading: "Truffle", percentage: 80 },
      { id: 5, heading: "Web3", percentage: 100 },
    ],
  },
];

export default mySkillsList;
