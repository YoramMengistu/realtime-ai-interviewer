"use client";

import React from "react";
import InterviewCard from "@/components/InterviewCard";
import { dummyInterviews } from "@/constants/index";

const InterviewsList = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {dummyInterviews.map((interview) => (
        <InterviewCard
          key={interview.id}
          interviewId={interview.id}
          userId={interview.userId}
          role={interview.role}
          type={interview.type}
          techstack={interview.techstack}
          createdAt={interview.createdAt}
        />
      ))}
    </div>
  );
};

export default InterviewsList;
