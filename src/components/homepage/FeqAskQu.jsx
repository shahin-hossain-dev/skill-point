import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../SectionTitle";

const FeqAskQu = () => {
  return (
    <div className="lg:w-2/3 mx-auto">
      <div>
        <SectionTitle
          title={"Most of the Client Questions"}
          subtitle={"Frequently Ask Questions"}
        />
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FeqAskQu;

const faqs = [
  {
    id: 1,
    question: "What topics are covered in the web development course?",
    answer:
      "The course covers HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB.",
  },
  {
    id: 2,
    question: "What level of experience is required for the course?",
    answer:
      "The course is suitable for beginners, but some basic knowledge of programming is helpful.",
  },
  {
    id: 3,
    question: "How long does it take to complete the course?",
    answer:
      "It typically takes 3-6 months to complete, depending on the learner's pace.",
  },
  {
    id: 4,
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes, a certificate of completion is provided after successfully finishing all modules.",
  },
  {
    id: 5,
    question: "Is the course project-based?",
    answer:
      "Yes, the course includes multiple projects, allowing learners to build real-world applications.",
  },
];
