import DisplayTechIcons from "@/components/DisplayTechIcons";
import { getInterviewById } from "@/lib/actions/general.action";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const interview = await getInterviewById(id);

  if (!interview) redirect("/");

  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="roundeed-full object-cover size-[40px]"
            />

            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>
          <DisplayTechIcons techStack={interview.techstack} />
        </div>
      </div>
    </>
  );
};

export default page;
