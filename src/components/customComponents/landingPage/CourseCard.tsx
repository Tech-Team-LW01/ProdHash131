import { Card, CardFooter } from "@/components/ui/card";
import { courseInfo } from "../../../../data/courses/courses"
import { Course } from "../../../../types/courses";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

type SimplifiedCourse = Pick<Course, '_id' | 'title' | 'category' | 'backgroundImage' | 'rating' | 'hours' | 'slug' | 'shortDescription'>;

interface CourseCardProps {
  course: SimplifiedCourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`courses/${course.slug}`);
  }

  const formatTitle = (title: string) => {
    const parts = title.split('|').map(part => part.trim());
    const mainTitle = parts[0];
    const subtitle = parts[1];

    // Function to apply formatting
    const applyFormatting = (text: string) => {
      let isBold = false;
      let isRed = false;
      const result: JSX.Element[] = [];
      let currentText = '';

      for (let i = 0; i < text.length; i++) {
        if (text.slice(i).startsWith('[B]')) {
          if (currentText) {
            result.push(
              <span key={`text-${i}`} className="inline">
                {currentText}
              </span>
            );
            currentText = '';
          }
          isBold = true;
          i += 2;
        } 
        else if (text.slice(i).startsWith('[/B]')) {
          if (currentText) {
            result.push(
              <span key={`bold-${i}`} className="font-bold inline">
                {currentText}
              </span>
            );
            currentText = '';
          }
          isBold = false;
          i += 3;
        }
        else if (text.slice(i).startsWith('[R]')) {
          if (currentText) {
            result.push(
              <span key={`text-${i}`} className={`${isBold ? 'font-bold' : ''} inline`}>
                {currentText}
              </span>
            );
            currentText = '';
          }
          isRed = true;
          i += 2;
        }
        else if (text.slice(i).startsWith('[/R]')) {
          if (currentText) {
            result.push(
              <span 
                key={`red-${i}`} 
                className={`text-[#ff0000] ${isBold ? 'font-bold' : ''} inline`}
              >
                {currentText}
              </span>
            );
            currentText = '';
          }
          isRed = false;
          i += 3;
        }
        else {
          currentText += text[i];
        }
      }

      if (currentText) {
        result.push(
          <span 
            key="final" 
            className={`
              ${isBold ? 'font-bold' : ''} 
              ${isRed ? 'text-[#ff0000]' : ''}
              inline
            `}
          >
            {currentText}
          </span>
        );
      }

      return result;
    };

    return (
      <div className="flex flex-col text-left">
        <div className="text-xs sm:text-sm leading-tight">
          {applyFormatting(mainTitle)}
        </div>
        {subtitle && (
          <div className="text-[10px] sm:text-xs text-gray-600">
            {subtitle}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card 
      onClick={handleClick} 
      className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col h-full"
    >
      <div className="h-[200px] sm:h-[260px] overflow-hidden">
        <img 
          src={course.backgroundImage}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardFooter className="p-2 flex flex-col flex-1 bg-white">
        <div className="mb-2 overflow-hidden">
          <h3 className="line-clamp-3 text-xs sm:text-sm text-left">
            {formatTitle(course.title)}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-auto w-full">
          <span className="text-left">
            <Badge className="bg-gray-100 text-black text-[10px] sm:text-xs hover:bg-gray-50">
              {course.category}
            </Badge>
          </span>
          <span className="text-[10px] sm:text-xs text-gray-600">
            {course.hours} hrs.
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}