import { CourseGrid } from "@/components/common";
import { CourseItem } from "@/components/course";
import { Heading } from "@/components/typography";

const page = () => {
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrid>
    </>
  );
};

export default page;
