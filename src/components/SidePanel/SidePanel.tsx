import React, { useEffect, useState } from "react";
import checkedIcon from "./svg/checked.svg";
import uncheckedIcon from "./svg/unchecked.svg";
import arrowLeftIcon from "./svg/arrow-left.svg";
import { useTracker } from "@laudspeaker/react";

interface StepFixture {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  done: boolean;
}

interface SidePanelProps {
  wrapperClass?: string;
}

type OnboardingTracker = {
  "step-1-button-text": string;
  "step-1-desc": string;
  "step-1-done": string;
  "step-1-title": string;
  "step-2-button-text": string;
  "step-2-desc": string;
  "step-2-done": string;
  "step-2-title": string;
  "step-3-button-text": string;
  "step-3-desc": string;
  "step-3-done": string;
  "step-3-title": string;
  MainTitle: string;
};

const SidePanel = ({ wrapperClass = "" }: SidePanelProps) => {
  const { state, emitTrackerEvent } =
    useTracker<OnboardingTracker>("cute-yard-3869");

  const [isExpanded, setIsExpanded] = useState(state?.show);

  useEffect(() => {
    setIsExpanded(state?.show);
  }, [state]);

  if (state?.show === undefined) return <></>;

  const sidePanelStepsFixtures: StepFixture[] = [
    {
      title: state["step-1-button-text"],
      description: state["step-1-desc"],
      buttonText: state["step-1-button-text"],
      buttonAction: () => {
        emitTrackerEvent("1-to-2");
      },
      done: state["step-1-done"] === "true",
    },
    {
      title: state["step-2-button-text"],
      description: state["step-2-desc"],
      buttonText: state["step-2-button-text"],
      buttonAction: () => {
        emitTrackerEvent("2-to-3");
      },
      done: state["step-2-done"] === "true",
    },
    {
      title: state["step-3-button-text"],
      description: state["step-3-desc"],
      buttonText: state["step-3-button-text"],
      buttonAction: () => {
        emitTrackerEvent("3-to-start");
      },
      done: state["step-3-done"] === "true",
    },
  ];

  const activeStep = sidePanelStepsFixtures.find((fixture) => !fixture.done);
  const activeStepIndex = activeStep
    ? sidePanelStepsFixtures.indexOf(activeStep)
    : -1;

  return (
    <div
      className={`${wrapperClass} w-fit max-w-[400px] h-full max-h-screen fixed top-0 right-0 bg-white transition-all font-graphik text-[14px] font-normal text-[#1F2E77] ${
        isExpanded ? "" : "translate-x-full"
      }`}
      style={{
        boxShadow: "0px 2px 16px 0px rgba(16, 23, 61, 0.15)",
      }}
    >
      <div className="h-full relative">
        <button
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-full bg-[#6366F1] w-fit h-fit flex gap-[5px] items-center rounded-[4px_0px_0px_4px] ${
            isExpanded ? "px-[3px] py-[26px]" : "p-[10px] gap-[5px]"
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <img
              className={`origin-center ${isExpanded ? " rotate-180" : ""}`}
              src={arrowLeftIcon}
              alt=""
            />
          </div>
          {!isExpanded && (
            <div className="text-white text-[16px] font-semibold">Guide</div>
          )}
        </button>
        <div className="px-[24px] py-[16px] bg-[#6366F1] text-white max-h-full text-[18px] font-bold leading-[24px]">
          {state.MainTitle}
        </div>
        <div className="p-[24px] flex flex-col gap-[16px] max-h-full">
          <div className="text-[16px] font-medium leading-[140%]">
            Let's start the quick onboarding process to explore valuable
            features.
          </div>
          {sidePanelStepsFixtures.map((fixture, i) => (
            <div
              key={i}
              className="border-[1px] border-[#DAE0F4] rounded-[8px] flex flex-col overflow-hidden"
              style={{
                boxShadow: "0px 2px 4px 0px rgba(31, 46, 119, 0.06)",
              }}
            >
              <div
                className={`p-[16px] flex gap-[8px] items-center ${
                  i === activeStepIndex ? "bg-[#F8FAFF]" : ""
                }`}
              >
                <div>
                  <img
                    src={fixture.done ? checkedIcon : uncheckedIcon}
                    alt=""
                  />
                </div>
                <div className="text-[16px] font-medium leading-[140%]">
                  Step {i + 1}: {fixture.title}
                </div>
              </div>
              {i === activeStepIndex && (
                <div className="border-t-[1px] border-[#DAE0F4] p-[16px] flex flex-col gap-[16px]">
                  <div className="leading-[140%]">{fixture.description}</div>
                  <button
                    className="w-fit px-[16px] rounded-[8px] bg-[#6366F1] text-white h-[32px] flex items-center font-bold leading-[140%]"
                    onClick={fixture.buttonAction}
                  >
                    {fixture.buttonText}
                  </button>
                </div>
              )}
            </div>
          ))}

          {sidePanelStepsFixtures.every((fixture) => fixture.done) && (
            <button
              className="h-[48px] px-[16px] flex justify-center items-center w-full text-[18px] font-bold leading-[140%] bg-[#6366F1] text-white rounded-[8px] disabled:opacity-70"
              onClick={() => emitTrackerEvent("start")}
              disabled={!state.show}
            >
              {!state.show ? "Onboarding completed" : "Finish"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
