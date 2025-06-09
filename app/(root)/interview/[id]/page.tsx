import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";

import { getInterviewById } from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dayjs from "dayjs";

const InterviewDetails = async ({ params }: RouteParams) => {
  const { id } = await params;

  const user = await getCurrentUser();

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
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interview.type}
        </p>
      </div>

      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          <span className="capitalize">Full Stack</span> Interview
        </h1>
      </div>

      <div className="flex flex-row gap-5 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/star.svg" width={22} height={22} alt="star" />
          <p>
            Interview Quality:{" "}
            <span className="text-primary-200 font-bold">A+</span>
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
        <p>
          Interview Taken:{" "}
          {interview?.createdAt
            ? dayjs(interview.createdAt).format("MMM D, YYYY h:mm A")
            : "N/A"}
        </p>
      </div>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        interviewId={id}
        type="interview"
        questions={interview.questions}
      />

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default InterviewDetails;
