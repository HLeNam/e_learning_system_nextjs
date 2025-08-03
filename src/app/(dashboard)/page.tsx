import { CourseGrid } from "@/components/common";
import { CourseItem } from "@/components/course";
import { Heading } from "@/components/typography";

const page = async () => {
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrid>
    </div>
  );
};
export default page;
