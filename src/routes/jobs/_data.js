import { LoremIpsum } from 'lorem-ipsum';


const lorem = new LoremIpsum();

export let jobs = [
  { id: '1', title: "Php developer in Abuja", salary: 20000, details: lorem.generateParagraphs(3) },
  { id: '2', title: "NodeJs and Go Dveloper in Portland, Remote", salary: 35000, details: lorem.generateParagraphs(3) },
  { id: '3', title: "Android developer in Congo", salary: 40000, details: lorem.generateParagraphs(3) },
];