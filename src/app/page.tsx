import Courses from "@/components/Homepage/Courses";
import Herosection from "@/components/Homepage/Herosection";
import HowItWorks from "@/components/Homepage/HowItWorks";
import Testimonials from "@/components/Homepage/Testimonials";
import TopicsCovered from "@/components/Homepage/TopicsCovered";

export default function Home() {
  return (
    <>
      <Herosection/>
      <Courses/>
      <HowItWorks />
      <TopicsCovered />
      <Testimonials/>
    </>
  );
}
