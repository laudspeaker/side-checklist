import { format } from "date-fns";
import SidePanel from "../../components/SidePanel/SidePanel";

const Homev2 = () => {
  return (
    <div className="w-full flex h-full gap-[80px]  pt-[140px] justify-center">
      <div className="bg-[#F3F4F6] max-w-[780px] w-full h-full flex flex-col gap-[20px] font-inter font-normal text-[14px] text-[#111827] leading-[22px]">
        <div className="flex gap-[16px] items-end">
          <div className="text-[30px] font-roboto font-medium leading-[40px]">
            Hi, Name
          </div>
          <div>{format(new Date(), "MM/dd/yyyy")}</div>
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex gap-[20px]">
            <button className="w-full h-[72px] px-[30px] py-5 bg-white rounded-lg shadow justify-start items-center gap-5 inline-flex">
              <div className="w-8 h-8 p-0.5 bg-[#E0F2FE] rounded justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative rounded-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="NodeIndex">
                      <path
                        id="Vector"
                        d="M17.3994 15.0267C17.1226 13.3482 15.6316 12.145 13.9329 12.2276C12.2343 12.3102 10.8682 13.6562 10.7588 15.3526C7.33247 15.2455 6.11595 14.4441 6.31461 12.8147C6.38827 12.2053 6.75658 11.8794 7.43292 11.7209C7.84363 11.6249 8.29899 11.6116 8.71193 11.6495C8.74988 11.654 8.79006 11.6562 8.82801 11.6607C9.08024 11.7209 9.33693 11.7723 9.59363 11.8124C10.3548 11.9374 11.1293 11.9999 11.866 11.9598C13.9374 11.8482 15.3481 10.9352 15.4195 8.99772C15.4887 7.12048 14.1985 5.79013 12.1182 4.8995C11.4508 4.61379 10.7432 4.39281 10.0356 4.22539C9.7164 4.1495 9.44854 4.09816 9.24988 4.06468C9.07354 2.37048 7.6539 1.07807 5.95077 1.06468C4.24765 1.05129 2.80568 2.31691 2.60033 4.00888C2.39497 5.70084 3.49319 7.2745 5.14944 7.66736C6.80569 8.06022 8.49542 7.14727 9.07131 5.54459C9.28113 5.58254 9.48872 5.62495 9.69631 5.67406C10.3258 5.82138 10.9552 6.01781 11.5356 6.26781C13.1137 6.94191 13.9753 7.83254 13.9351 8.94414C13.8994 9.93968 13.1851 10.3995 11.7878 10.4754C11.174 10.5089 10.5021 10.4553 9.83917 10.3459C9.6539 10.3147 9.48426 10.2834 9.3347 10.2499C9.24765 10.2321 9.18738 10.2165 9.1606 10.2098L9.0914 10.1964C9.04229 10.1897 8.9597 10.1785 8.85256 10.1674C8.29452 10.116 7.68961 10.1339 7.10033 10.27C5.86819 10.558 5.00435 11.3236 4.84363 12.6316C4.49319 15.4486 6.5981 16.7544 11.0043 16.8482C11.6539 18.4196 13.3793 19.2566 15.0133 18.7901C16.6494 18.3236 17.6762 16.7053 17.3994 15.0267ZM5.91729 6.27227C5.6731 6.27226 5.4313 6.22414 5.20571 6.13068C4.98011 6.03722 4.77513 5.90024 4.60247 5.72756C4.42981 5.55488 4.29285 5.34988 4.19942 5.12428C4.10598 4.89867 4.0579 4.65686 4.05792 4.41267C4.05793 4.16848 4.10604 3.92668 4.1995 3.70109C4.29297 3.47549 4.42995 3.27051 4.60263 3.09785C4.77531 2.92519 4.9803 2.78823 5.20591 2.6948C5.43152 2.60136 5.67332 2.55328 5.91751 2.5533C6.41068 2.55333 6.88364 2.74926 7.23234 3.09801C7.58104 3.44675 7.77692 3.91973 7.77689 4.41289C7.77686 4.90606 7.58092 5.37902 7.23218 5.72772C6.88344 6.07642 6.41046 6.2723 5.91729 6.27227ZM14.0981 17.4285C13.8539 17.4285 13.6121 17.3804 13.3865 17.2869C13.1609 17.1935 12.9559 17.0565 12.7833 16.8838C12.6106 16.7111 12.4737 16.5061 12.3802 16.2805C12.2868 16.0549 12.2387 15.8131 12.2387 15.5689C12.2387 15.3247 12.2868 15.0829 12.3803 14.8573C12.4738 14.6317 12.6108 14.4268 12.7834 14.2541C12.9561 14.0814 13.1611 13.9445 13.3867 13.851C13.6123 13.7576 13.8541 13.7095 14.0983 13.7095C14.5915 13.7096 15.0644 13.9055 15.4131 14.2543C15.7618 14.603 15.9577 15.076 15.9577 15.5691C15.9577 16.0623 15.7617 16.5353 15.413 16.884C15.0642 17.2327 14.5913 17.4286 14.0981 17.4285Z"
                        fill="#0EA5E9"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-black text-base font-semibold leading-normal">
                Create Journey
              </div>
            </button>
            <button className="w-full h-[72px] px-[30px] py-5 bg-white rounded-lg shadow justify-start items-center gap-5 inline-flex">
              <div className="w-8 h-8 bg-[#DCFCE7] rounded justify-center items-center gap-2.5 flex">
                <div className="w-[22px] h-[22px] relative">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Icon">
                      <path
                        id="Vector"
                        d="M6.39585 9.16667H12.125M4.02078 6.41667H19.3126M6.39585 12.375H17.1667M5.47919 18.5625H17.8542C18.4012 18.5625 18.9258 18.3452 19.3126 17.9584C19.6994 17.5716 19.9167 17.047 19.9167 16.5V5.5C19.9167 4.95299 19.6994 4.42839 19.3126 4.04159C18.9258 3.6548 18.4012 3.4375 17.8542 3.4375H5.47919C4.93218 3.4375 4.40757 3.6548 4.02078 4.04159C3.63399 4.42839 3.41669 4.95299 3.41669 5.5V16.5C3.41669 17.047 3.63399 17.5716 4.02078 17.9584C4.40757 18.3452 4.93218 18.5625 5.47919 18.5625Z"
                        stroke="#22C55E"
                        stroke-width="1.375"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-black text-base font-semibold leading-normal">
                Create Modal
              </div>
            </button>
            <button className="w-full h-[72px] px-[30px] py-5 bg-white rounded-lg shadow justify-start items-center gap-5 inline-flex">
              <div className="w-8 h-8 p-2.5 bg-yellow-100 rounded justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3025 14.1975C16.7438 13.6384 16.091 13.182 15.374 12.8493C16.3851 12.0301 17.0302 10.7801 17.0302 9.37831C17.0302 6.9051 14.9677 4.87608 12.4945 4.91403C10.0592 4.95197 8.09717 6.93635 8.09717 9.37831C8.09717 10.7801 8.74449 12.0301 9.75342 12.8493C9.03625 13.1817 8.38338 13.6381 7.82485 14.1975C6.6061 15.4185 5.91413 17.0301 5.86949 18.7488C5.8689 18.7727 5.87308 18.7964 5.88178 18.8186C5.89049 18.8407 5.90355 18.861 5.92019 18.878C5.93683 18.8951 5.95672 18.9086 5.97868 18.9179C6.00064 18.9271 6.02423 18.9319 6.04806 18.9319H7.29806C7.39405 18.9319 7.4744 18.856 7.47663 18.76C7.51905 17.4654 8.0436 16.2533 8.96547 15.3337C9.43721 14.8594 9.99833 14.4834 10.6163 14.2275C11.2344 13.9716 11.897 13.8407 12.5659 13.8426C13.9253 13.8426 15.2043 14.3716 16.1664 15.3337C17.086 16.2533 17.6106 17.4654 17.6552 18.76C17.6574 18.856 17.7378 18.9319 17.8338 18.9319H19.0838C19.1076 18.9319 19.1312 18.9271 19.1532 18.9179C19.1751 18.9086 19.195 18.8951 19.2117 18.878C19.2283 18.861 19.2414 18.8407 19.2501 18.8186C19.2588 18.7964 19.2629 18.7727 19.2623 18.7488C19.2177 17.0301 18.5257 15.4185 17.3025 14.1975ZM12.5659 12.2355C11.8025 12.2355 11.0838 11.9386 10.5458 11.3984C10.2759 11.1306 10.0626 10.8111 9.91879 10.459C9.77498 10.107 9.70355 9.72956 9.70878 9.3493C9.71547 8.61715 10.0079 7.90956 10.519 7.38501C11.0548 6.8359 11.7713 6.5301 12.5369 6.52117C13.2936 6.51447 14.028 6.80912 14.5682 7.33814C15.1217 7.88055 15.4253 8.60599 15.4253 9.37831C15.4253 10.1417 15.1284 10.8582 14.5882 11.3984C14.3232 11.6647 14.008 11.8758 13.6609 12.0195C13.3138 12.1631 12.9416 12.2366 12.5659 12.2355ZM6.9744 9.9676C6.95431 9.7734 6.94315 9.57697 6.94315 9.37831C6.94315 9.0234 6.97663 8.67742 7.03913 8.34037C7.05476 8.26001 7.01235 8.17742 6.93869 8.14394C6.63512 8.00778 6.3561 7.82028 6.11503 7.58367C5.83097 7.30824 5.60743 6.97662 5.4587 6.60997C5.30996 6.24332 5.23929 5.8497 5.25119 5.45421C5.27128 4.73769 5.55922 4.05689 6.06146 3.54349C6.6128 2.97876 7.35387 2.67072 8.14181 2.67965C8.85387 2.68635 9.54137 2.9609 10.0615 3.44751C10.2378 3.61269 10.3896 3.79572 10.5168 3.99215C10.5615 4.06135 10.6485 4.09037 10.7244 4.06358C11.1173 3.92742 11.5324 3.83144 11.9588 3.7868C12.0838 3.7734 12.1552 3.63947 12.0994 3.52787C11.374 2.0926 9.89181 1.10153 8.17753 1.07474C5.70208 1.0368 3.63958 3.06581 3.63958 5.5368C3.63958 6.93858 4.28467 8.18858 5.29583 9.00778C4.58601 9.3359 3.93199 9.78903 3.36503 10.356C2.14181 11.577 1.44985 13.1886 1.40521 14.9096C1.40461 14.9334 1.40879 14.9571 1.4175 14.9793C1.4262 15.0015 1.43926 15.0217 1.4559 15.0387C1.47255 15.0558 1.49243 15.0693 1.5144 15.0786C1.53636 15.0878 1.55995 15.0926 1.58378 15.0926H2.83601C2.93199 15.0926 3.01235 15.0167 3.01458 14.9207C3.05699 13.6261 3.58155 12.414 4.50342 11.4944C5.15967 10.8381 5.96324 10.3828 6.84047 10.1618C6.92753 10.1395 6.98556 10.0569 6.9744 9.9676Z"
                      fill="#EAB308"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-black text-base font-semibold leading-normal">
                Import Users
              </div>
            </button>
          </div>
        </div>

        <div className="w-[780px] h-[383px] p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch justify-between items-end gap-2.5 inline-flex">
            <div className="text-black text-xl font-semibold leading-7">
              Delivery
            </div>
            <div className="text-gray-600 text-sm font-normal leading-snug">
              06/07/2023-06/13/2023
            </div>
          </div>
          <div className="w-[400px] justify-between items-start gap-10 inline-flex">
            <div className="pr-2.5 rounded flex-col justify-center items-start inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-600 text-sm font-normal leading-snug">
                  Email sent
                </div>
              </div>
              <div className="py-[5px] justify-start items-end gap-0.5 inline-flex">
                <div className="text-gray-300 text-3xl font-medium leading-10">
                  -
                </div>
              </div>
            </div>
            <div className="pr-2.5 rounded flex-col justify-center items-start inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-600 text-sm font-normal leading-snug">
                  Delivery rate
                </div>
              </div>
              <div className="py-[5px] justify-start items-baseline gap-1 inline-flex">
                <div className="text-gray-300 text-3xl font-medium leading-10">
                  -
                </div>
              </div>
            </div>
            <div className="pr-2.5 rounded flex-col justify-center items-start inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="text-gray-600 text-sm font-normal leading-snug">
                  Bounce rate
                </div>
              </div>
              <div className="py-[5px] justify-start items-baseline gap-1 inline-flex">
                <div className="text-gray-300 text-3xl font-medium leading-10">
                  -
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[203px] relative">
            <div className="w-[40.88px] left-0 top-[181px] absolute text-gray-500 text-sm font-normal leading-snug">
              06/07
            </div>
            <div className="w-[41.93px] left-[113.20px] top-[181px] absolute text-gray-500 text-sm font-normal leading-snug">
              06/08
            </div>
            <div className="w-[41.93px] left-[227.46px] top-[181px] absolute text-gray-500 text-sm font-normal leading-snug">
              06/09
            </div>
            <div className="w-[39.83px] left-[341.71px] top-[181px] absolute text-gray-500 text-sm font-normal leading-snug">
              06/10
            </div>
            <div className="w-[37.73px] left-[453.84px] top-[181px] absolute text-gray-500 text-sm font-normal leading-snug">
              06/11
            </div>
            <div className="w-[39.83px] left-[563.91px] top-[181px] absolute text-gray-500 text-sm font-normal leading-snug">
              06/12
            </div>
            <div className="w-[39.83px] left-[676.07px] top-[181px] absolute text-gray-500 text-sm font-normal leading-snug">
              06/13
            </div>
            <div className="w-[712.78px] h-[0px] left-0 top-[171px] absolute bg-gray-500 border border-gray-200"></div>
            <div className="w-[712.78px] h-[0px] left-0 top-[131px] absolute border border-gray-200"></div>
            <div className="w-[712.78px] h-[0px] left-0 top-[91px] absolute border border-gray-200"></div>
            <div className="w-[712.78px] h-[0px] left-0 top-[51px] absolute border border-gray-200"></div>
            <div className="w-[712.78px] h-[0px] left-0 top-[11px] absolute border border-gray-200"></div>
            <div className="w-[8.39px] left-[723.23px] top-[159px] absolute text-gray-500 text-sm font-normal leading-snug">
              0
            </div>
            <div className="w-[16.77px] left-[723.23px] top-[80px] absolute text-gray-500 text-sm font-normal leading-snug">
              30
            </div>
            <div className="w-[16.77px] left-[723.23px] top-0 absolute text-gray-500 text-sm font-normal leading-snug">
              60
            </div>
          </div>
        </div>
      </div>
      <div
        className="min-w-[360px] mt-[60px] w-[360px] bg-white rounded-[8px] h-fit flex flex-col gap-[20px] p-[20px]"
        style={{
          boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[20px] font-semibold leading-[28px]">
            Active journey
          </div>
          <button className="underline">View all</button>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center justify-between text-[#4B5563] text-[12px] leading-[20px]">
            <div>journey</div>
            <div>Enrolled</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px] font-semibold">
              <div className="w-[24px] h-[24px] rounded-[4px] flex justify-center items-center bg-[#EEF2FF] text-[#6366F1]">
                1
              </div>
              <div>Onboarding</div>
            </div>

            <div className="flex flex-col items-end gap-[5px]">
              <div className="font-semibold leading-[24px]">150,000</div>
              <div className="px-[2px] flex items-center gap-[5px] bg-[#F0FDF4] text-[#22C55E] rounded-[2px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M1.125 9.50053L4.5 6.12553L6.653 8.27903C7.27537 7.05193 8.30218 6.07722 9.56 5.51953L10.93 4.90953M10.93 4.90953L7.96 3.76953M10.93 4.90953L9.79 7.88003"
                      stroke="#22C55E"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[12px] font-medium leading-[20px]">20</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px] font-semibold">
              <div className="w-[24px] h-[24px] rounded-[4px] flex justify-center items-center bg-[#EEF2FF] text-[#6366F1]">
                2
              </div>
              <div>Onboarding</div>
            </div>

            <div className="flex flex-col items-end gap-[5px]">
              <div className="font-semibold leading-[24px]">1500</div>
              <div className="px-[2px] flex items-center gap-[5px] bg-[#F0FDF4] text-[#22C55E] rounded-[2px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M1.125 9.50053L4.5 6.12553L6.653 8.27903C7.27537 7.05193 8.30218 6.07722 9.56 5.51953L10.93 4.90953M10.93 4.90953L7.96 3.76953M10.93 4.90953L9.79 7.88003"
                      stroke="#22C55E"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[12px] font-medium leading-[20px]">20</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px] font-semibold">
              <div className="w-[24px] h-[24px] rounded-[4px] flex justify-center items-center bg-[#EEF2FF] text-[#6366F1]">
                3
              </div>
              <div>Onboarding</div>
            </div>

            <div className="flex flex-col items-end gap-[5px]">
              <div className="font-semibold leading-[24px]">1500</div>
              <div className="px-[2px] flex items-center gap-[5px] bg-[#FFF1F2] text-[#F43F5E] rounded-[2px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M1.125 3.5L4.5 6.875L6.643 4.732C7.69746 5.53514 8.45487 6.66616 8.796 7.947L9.184 9.396M9.184 9.396L10.775 6.6405M9.184 9.396L6.4285 7.805"
                      stroke="#F43F5E"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[12px] font-medium leading-[20px]">20</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>Single-campaign</div>
            <div className="flex flex-col items-end gap-[5px]">
              <div>1000</div>
              <div className="px-[2px] flex items-center gap-[5px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M1.125 9.00053L4.5 5.62553L6.653 7.77903C7.27537 6.55193 8.30218 5.57722 9.56 5.01953L10.93 4.40953M10.93 4.40953L7.96 3.26953M10.93 4.40953L9.79 7.38003"
                      stroke="#4B5563"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[12px] text-[#4B5563] leading-[20px]">
                  20
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>Anniversary celebration</div>
            <div className="flex flex-col items-end gap-[5px]">
              <div>500</div>
              <div className="px-[2px] flex items-center gap-[5px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M1.125 9.00053L4.5 5.62553L6.653 7.77903C7.27537 6.55193 8.30218 5.57722 9.56 5.01953L10.93 4.40953M10.93 4.40953L7.96 3.26953M10.93 4.40953L9.79 7.38003"
                      stroke="#4B5563"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[12px] text-[#4B5563] leading-[20px]">
                  20
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SidePanel wrapperClass="!top-[56px] max-h-[calc(100vh-56px)]" />
    </div>
  );
};

export default Homev2;
