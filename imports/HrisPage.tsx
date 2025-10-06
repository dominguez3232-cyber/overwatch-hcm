import svgPaths from "./svg-buiv0tprbn";
import imgPrimitiveImg from "figma:asset/1162b70d9bce3d9bc46857cc86bb8bdc5c5e3d08.png";
import imgPrimitiveImg1 from "figma:asset/80590115117c5f72e317a9fc5e7105049fb7d1da.png";
import imgPrimitiveImg2 from "figma:asset/c47870bf01f989650eaadfebe75f1949340dd812.png";
import imgPrimitiveImg3 from "figma:asset/68ac1bee97c99b0898da5250c533dbe2f4b998dd.png";
import imgPrimitiveImg4 from "figma:asset/5d6fda70fe61b938e47091015a6e5f70016b6c75.png";
import imgPrimitiveImg5 from "figma:asset/e2e2c378dee9a61ebc7f5a8b1e2ea22a4701da5c.png";
import imgPrimitiveImg6 from "figma:asset/f2e0d0183a438e31fe7131ed2173548b7f21aea2.png";
import imgPrimitiveImg7 from "figma:asset/b9ec5d60bf5f2f5a7f8fb14d389a2b12a79efedd.png";

function Sidebar() {
  return (
    <div className="h-[779.091px] relative shrink-0 w-[255.994px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[779.091px] w-[255.994px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3cc8d400} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M5.99787 1.99929V13.995" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[27.997px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.014px] py-0 relative size-[27.997px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 grow h-[23.991px] min-h-px min-w-px relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.991px] relative w-full">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">HR Dashboard</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[146.42px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.994px] h-[27.997px] items-center relative w-[146.42px]">
        <Button />
        <Heading1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_737)" id="Icon">
          <path d={svgPaths.p5d04e00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M7.99716 1.33286V2.66572" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M7.99716 13.3286V14.6615" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2e47c400} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p27444500} id="Vector_5" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M1.33286 7.99716H2.66572" id="Vector_6" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M13.3286 7.99716H14.6615" id="Vector_7" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p3cd5cf80} id="Vector_8" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pea59d00} id="Vector_9" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_737">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(38,38,38,0.3)] relative rounded-[8px] shrink-0 size-[35.994px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.909px] relative size-[35.994px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10.91px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_882)" id="Icon">
          <path d={svgPaths.p15935c00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p23a34100} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M12.6622 5.33144V9.33002" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M14.6615 7.33073H10.6629" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_882">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(38,38,38,0.3)] h-[31.989px] relative rounded-[8px] shrink-0 w-[143.92px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] relative w-[143.92px]">
        <Icon2 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[40.9px] not-italic text-[14px] text-neutral-50 text-nowrap top-[3.99px] whitespace-pre">Add Employee</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[10px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_840)" id="Icon">
          <path d={svgPaths.p1aaaa600} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p1bffbec0} id="Vector_2" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M6.6643 5.99787H5.33144" id="Vector_3" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 8.66359H5.33144" id="Vector_4" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 11.3293H5.33144" id="Vector_5" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_840">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-neutral-50 h-[31.989px] relative rounded-[8px] shrink-0 w-[154.773px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] relative w-[154.773px]">
        <Icon3 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[39.99px] not-italic text-[14px] text-neutral-900 text-nowrap top-[3.99px] whitespace-pre">Generate Report</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[350.682px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[35.994px] items-center relative w-[350.682px]">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-neutral-950 h-[68.892px] relative shrink-0 w-[2865.82px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[68.892px] items-center justify-between pb-[0.909px] pt-0 px-[23.991px] relative w-[2865.82px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[99.588px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[99.588px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Total Employees</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_802)" id="Icon">
          <path d={svgPaths.p15935c00} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p18591840} id="Vector_2" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p335722c0} id="Vector_3" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p23a34100} id="Vector_4" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_802">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[51.989px] relative shrink-0 w-[681.236px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[51.989px] items-center justify-between px-[23.991px] py-0 relative w-[681.236px]">
        <CardTitle />
        <Icon4 />
      </div>
    </div>
  );
}

function HrMetricsCards() {
  return (
    <div className="content-stretch flex h-[32.003px] items-start relative shrink-0 w-full" data-name="HRMetricsCards">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-neutral-50">1,247</p>
    </div>
  );
}

function HrMetricsCards1() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-full" data-name="HRMetricsCards">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[-1px] w-[122px]">+5.2% from last month</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[71.989px] relative shrink-0 w-[681.236px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[71.989px] items-start px-[23.991px] py-0 relative w-[681.236px]">
        <HrMetricsCards />
        <HrMetricsCards1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex flex-col gap-[23.991px] h-[149.787px] items-start left-0 p-[0.909px] rounded-[14px] top-0 w-[683.054px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader />
      <CardContent />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.21px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[63.21px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">New Hires</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_821)" id="Icon">
          <path d={svgPaths.p15935c00} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p23a34100} id="Vector_2" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M12.6622 5.33144V9.33002" id="Vector_3" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M14.6615 7.33073H10.6629" id="Vector_4" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_821">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="h-[51.989px] relative shrink-0 w-[681.236px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[51.989px] items-center justify-between px-[23.991px] py-0 relative w-[681.236px]">
        <CardTitle1 />
        <Icon5 />
      </div>
    </div>
  );
}

function HrMetricsCards2() {
  return (
    <div className="content-stretch flex h-[32.003px] items-start relative shrink-0 w-full" data-name="HRMetricsCards">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-neutral-50">23</p>
    </div>
  );
}

function HrMetricsCards3() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-full" data-name="HRMetricsCards">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[-1px] w-[129px]">+12.4% from last month</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="h-[71.989px] relative shrink-0 w-[681.236px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[71.989px] items-start pl-[23.991px] pr-[23.992px] py-0 relative w-[681.236px]">
        <HrMetricsCards2 />
        <HrMetricsCards3 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex flex-col gap-[23.991px] h-[149.787px] items-start left-[707.04px] p-[0.909px] rounded-[14px] top-0 w-[683.054px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader1 />
      <CardContent1 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.903px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[71.903px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Avg. Tenure</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_869)" id="Icon">
          <path d="M5.33144 1.33286V3.99858" id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 1.33286V3.99858" id="Vector_2" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p8fd3100} id="Vector_3" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M1.99929 6.6643H13.995" id="Vector_4" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_869">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="h-[51.989px] relative shrink-0 w-[681.236px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[51.989px] items-center justify-between pl-[23.991px] pr-[23.992px] py-0 relative w-[681.236px]">
        <CardTitle2 />
        <Icon6 />
      </div>
    </div>
  );
}

function HrMetricsCards4() {
  return (
    <div className="content-stretch flex h-[32.003px] items-start relative shrink-0 w-full" data-name="HRMetricsCards">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-neutral-50">3.2 years</p>
    </div>
  );
}

function HrMetricsCards5() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-full" data-name="HRMetricsCards">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[-1px] w-[143px]">+0.3 years from last month</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="h-[71.989px] relative shrink-0 w-[681.236px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[71.989px] items-start pl-[23.991px] pr-[23.992px] py-0 relative w-[681.236px]">
        <HrMetricsCards4 />
        <HrMetricsCards5 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex flex-col gap-[23.991px] h-[149.787px] items-start left-[1414.09px] p-[0.909px] rounded-[14px] top-0 w-[683.054px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader2 />
      <CardContent2 />
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.548px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[86.548px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Turnover Rate</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_847)" id="Icon">
          <path d={svgPaths.p14336500} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p5bc0080} id="Vector_2" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_847">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="h-[51.989px] relative shrink-0 w-[681.25px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[51.989px] items-center justify-between pl-[23.991px] pr-[23.992px] py-0 relative w-[681.25px]">
        <CardTitle3 />
        <Icon7 />
      </div>
    </div>
  );
}

function HrMetricsCards6() {
  return (
    <div className="content-stretch flex h-[32.003px] items-start relative shrink-0 w-full" data-name="HRMetricsCards">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-neutral-50">8.5%</p>
    </div>
  );
}

function HrMetricsCards7() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-full" data-name="HRMetricsCards">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#e7000b] text-[12px] top-[-1px] w-[119px]">-2.1% from last month</p>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="h-[71.989px] relative shrink-0 w-[681.25px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[71.989px] items-start pl-[23.991px] pr-[23.992px] py-0 relative w-[681.25px]">
        <HrMetricsCards6 />
        <HrMetricsCards7 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex flex-col gap-[23.991px] h-[149.787px] items-start left-[2121.14px] p-[0.909px] rounded-[14px] top-0 w-[683.068px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader3 />
      <CardContent3 />
    </div>
  );
}

function HrMetricsCards8() {
  return (
    <div className="h-[149.787px] relative shrink-0 w-full" data-name="HRMetricsCards">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[137.912px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.991px] relative w-[137.912px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">Employee Directory</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[10.91px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_729)" id="Icon">
          <path d={svgPaths.p11732500} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_729">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] h-[31.989px] left-[263.99px] rounded-[8px] top-[2px] w-[83.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon8 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[40.9px] not-italic text-[14px] text-neutral-50 text-nowrap top-[3.99px] whitespace-pre">Filter</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] h-[35.994px] left-0 rounded-[8px] top-0 w-[255.994px]" data-name="Input">
      <div className="box-border content-stretch flex h-[35.994px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] w-[255.994px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">Search employees...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[11.99px] size-[15.994px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2c894080} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2139fb00} id="Vector_2" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[35.994px] left-0 top-0 w-[255.994px]" data-name="Container">
      <Input />
      <Icon9 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[347.741px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.994px] relative w-[347.741px]">
        <Button4 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[35.994px] items-center justify-between relative w-full">
          <Heading3 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[709.872px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[7.77px] whitespace-pre">Employee</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[709.87px] top-0 w-[257.997px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[7.77px] whitespace-pre">Department</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[967.87px] top-0 w-[384.205px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[7.77px] whitespace-pre">Position</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[1352.07px] top-0 w-[233.778px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[7.77px] whitespace-pre">Status</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[1585.85px] top-0 w-[221.804px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[7.77px] whitespace-pre">Join Date</p>
    </div>
  );
}

function TableHead5() {
  return <div className="absolute h-[40px] left-[1807.66px] top-0 w-[51.989px]" data-name="TableHead" />;
}

function TableRow() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1859.64px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1859.64px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-50">Sarah Johnson</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">sarah.johnson@company.com</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[43.98px] top-0 w-[185.44px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 bg-neutral-800 grow h-[31.989px] min-h-px min-w-px relative rounded-[3.0504e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.989px] items-center justify-center relative w-full">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">SJ</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-[4.01px]" data-name="Primitive.span">
      <Text />
    </div>
  );
}

function EmployeeTable() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8.45px] w-[693.878px]" data-name="EmployeeTable">
      <Container7 />
      <PrimitiveSpan />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[56.903px] left-0 top-0 w-[709.872px]" data-name="TableCell">
      <EmployeeTable />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[56.903px] left-[709.87px] top-0 w-[257.997px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">Engineering</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[56.903px] left-[967.87px] top-0 w-[384.205px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">Senior Developer</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-green-100 h-[21.79px] left-[8px] rounded-[8px] top-[17.56px] w-[51.364px]" data-name="Badge">
      <div className="h-[21.79px] overflow-clip relative rounded-[inherit] w-[51.364px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.91px] not-italic text-[#016630] text-[12px] text-nowrap top-[1.9px] whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[56.903px] left-[1352.07px] top-0 w-[233.778px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[56.903px] left-[1585.85px] top-0 w-[221.804px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">3/14/2022</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[10px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p65f2d00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pb148ac0} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p19650e00} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[31.989px] left-[8px] rounded-[8px] top-[12.46px] w-[35.994px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[56.903px] left-[1807.66px] top-0 w-[51.989px]" data-name="TableCell">
      <Button5 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[56.903px] left-0 top-0 w-[1859.64px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-50">Michael Chen</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">michael.chen@company.com</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[43.98px] top-0 w-[180.27px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="basis-0 grow h-[31.989px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] w-full" />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-[4.01px]" data-name="Primitive.span">
      <PrimitiveImg />
    </div>
  );
}

function EmployeeTable1() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8.45px] w-[693.878px]" data-name="EmployeeTable">
      <Container10 />
      <PrimitiveSpan1 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[56.903px] left-0 top-0 w-[709.872px]" data-name="TableCell">
      <EmployeeTable1 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[56.903px] left-[709.87px] top-0 w-[257.997px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">Marketing</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[56.903px] left-[967.87px] top-0 w-[384.205px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">Marketing Manager</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-green-100 h-[21.79px] left-[8px] rounded-[8px] top-[17.56px] w-[51.364px]" data-name="Badge">
      <div className="h-[21.79px] overflow-clip relative rounded-[inherit] w-[51.364px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.91px] not-italic text-[#016630] text-[12px] text-nowrap top-[1.9px] whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[56.903px] left-[1352.07px] top-0 w-[233.778px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[56.903px] left-[1585.85px] top-0 w-[221.804px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">11/7/2021</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[10px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p65f2d00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pb148ac0} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p19650e00} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[31.989px] left-[8px] rounded-[8px] top-[12.46px] w-[35.994px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[56.903px] left-[1807.66px] top-0 w-[51.989px]" data-name="TableCell">
      <Button6 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[56.903px] left-0 top-[56.9px] w-[1859.64px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-50">Emily Rodriguez</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">emily.rodriguez@company.com</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[43.98px] top-0 w-[195.284px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function PrimitiveImg1() {
  return (
    <div className="basis-0 grow h-[31.989px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] w-full" />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-[4.01px]" data-name="Primitive.span">
      <PrimitiveImg1 />
    </div>
  );
}

function EmployeeTable2() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8.45px] w-[693.878px]" data-name="EmployeeTable">
      <Container13 />
      <PrimitiveSpan2 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[56.903px] left-0 top-0 w-[709.872px]" data-name="TableCell">
      <EmployeeTable2 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[56.903px] left-[709.87px] top-0 w-[257.997px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">HR</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[56.903px] left-[967.87px] top-0 w-[384.205px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">HR Specialist</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-green-100 h-[21.79px] left-[8px] rounded-[8px] top-[17.56px] w-[51.364px]" data-name="Badge">
      <div className="h-[21.79px] overflow-clip relative rounded-[inherit] w-[51.364px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.91px] not-italic text-[#016630] text-[12px] text-nowrap top-[1.9px] whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[56.903px] left-[1352.07px] top-0 w-[233.778px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[56.903px] left-[1585.85px] top-0 w-[221.804px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">1/19/2023</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[10px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p65f2d00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pb148ac0} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p19650e00} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[31.989px] left-[8px] rounded-[8px] top-[12.46px] w-[35.994px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[56.903px] left-[1807.66px] top-0 w-[51.989px]" data-name="TableCell">
      <Button7 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[56.903px] left-0 top-[113.81px] w-[1859.64px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-50">David Kim</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">david.kim@company.com</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[43.98px] top-0 w-[159.077px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function PrimitiveImg2() {
  return (
    <div className="basis-0 grow h-[31.989px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] w-full" />
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-[4.01px]" data-name="Primitive.span">
      <PrimitiveImg2 />
    </div>
  );
}

function EmployeeTable3() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8.45px] w-[693.878px]" data-name="EmployeeTable">
      <Container16 />
      <PrimitiveSpan3 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[56.903px] left-0 top-0 w-[709.872px]" data-name="TableCell">
      <EmployeeTable3 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[56.903px] left-[709.87px] top-0 w-[257.997px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">Finance</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[56.903px] left-[967.87px] top-0 w-[384.205px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">Financial Analyst</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-neutral-800 h-[21.79px] left-[8px] rounded-[8px] top-[17.56px] w-[68.068px]" data-name="Badge">
      <div className="h-[21.79px] overflow-clip relative rounded-[inherit] w-[68.068px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.91px] not-italic text-[12px] text-neutral-50 text-nowrap top-[1.9px] whitespace-pre">On Leave</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[56.903px] left-[1352.07px] top-0 w-[233.778px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[56.903px] left-[1585.85px] top-0 w-[221.804px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">7/11/2022</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[10px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p65f2d00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pb148ac0} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p19650e00} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[31.989px] left-[8px] rounded-[8px] top-[12.46px] w-[35.994px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[56.903px] left-[1807.66px] top-0 w-[51.989px]" data-name="TableCell">
      <Button8 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[56.903px] left-0 top-[170.71px] w-[1859.64px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-50">Lisa Thompson</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">lisa.thompson@company.com</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[43.98px] top-0 w-[186.023px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function PrimitiveImg3() {
  return (
    <div className="basis-0 grow h-[31.989px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg3} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] w-full" />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-[4.01px]" data-name="Primitive.span">
      <PrimitiveImg3 />
    </div>
  );
}

function EmployeeTable4() {
  return (
    <div className="absolute h-[40px] left-[8px] top-[8.45px] w-[693.878px]" data-name="EmployeeTable">
      <Container19 />
      <PrimitiveSpan4 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[56.449px] left-0 top-0 w-[709.872px]" data-name="TableCell">
      <EmployeeTable4 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[56.449px] left-[709.87px] top-0 w-[257.997px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">Sales</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[56.449px] left-[967.87px] top-0 w-[384.205px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">Sales Director</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-green-100 h-[21.79px] left-[8px] rounded-[8px] top-[17.56px] w-[51.364px]" data-name="Badge">
      <div className="h-[21.79px] overflow-clip relative rounded-[inherit] w-[51.364px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.91px] not-italic text-[#016630] text-[12px] text-nowrap top-[1.9px] whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[56.449px] left-[1352.07px] top-0 w-[233.778px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[56.449px] left-[1585.85px] top-0 w-[221.804px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-50 text-nowrap top-[16.45px] whitespace-pre">9/2/2020</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[10px] size-[15.994px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p65f2d00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pb148ac0} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p19650e00} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute h-[31.989px] left-[8px] rounded-[8px] top-[12.46px] w-[35.994px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[56.449px] left-[1807.66px] top-0 w-[51.989px]" data-name="TableCell">
      <Button9 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[56.449px] left-0 top-[227.61px] w-[1859.64px]" data-name="TableRow">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[284.062px] left-0 top-[40px] w-[1859.64px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[324.062px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[325.881px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[325.881px] items-start p-[0.909px] relative w-full">
          <Table />
        </div>
      </div>
    </div>
  );
}

function EmployeeTable5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[377.869px] items-start left-0 top-0 w-[1861.46px]" data-name="EmployeeTable">
      <Container4 />
      <Container20 />
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[868.935px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[868.935px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-1.73px] whitespace-pre">Quick Actions</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_791)" id="Icon">
          <path d={svgPaths.p15935c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p23a34100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M12.6622 5.33144V9.33002" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M14.6615 7.33073H10.6629" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_791">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[10px] shrink-0 size-[40px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-neutral-50">Add New Employee</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-center text-nowrap whitespace-pre">Onboard a new team member</p>
    </div>
  );
}

function QuickActions1() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[163.295px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.994px] items-start relative w-[163.295px]">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] box-border content-stretch flex flex-col gap-[15.994px] h-[125.795px] items-center justify-center left-0 p-[0.909px] rounded-[8px] top-0 w-[428.466px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <QuickActions />
      <QuickActions1 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_836)" id="Icon">
          <path d="M7.99716 1.33286V14.6615" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p31c68c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_836">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QuickActions2() {
  return (
    <div className="bg-[#00c950] relative rounded-[10px] shrink-0 size-[40px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-neutral-50">Generate Payroll</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-center text-nowrap whitespace-pre">Process monthly payroll</p>
    </div>
  );
}

function QuickActions3() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[130.057px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.994px] items-start relative w-[130.057px]">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] box-border content-stretch flex flex-col gap-[15.994px] h-[125.795px] items-center justify-center left-[440.45px] p-[0.909px] rounded-[8px] top-0 w-[428.48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <QuickActions2 />
      <QuickActions3 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_860)" id="Icon">
          <path d="M5.33144 1.33286V3.99858" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 1.33286V3.99858" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p8fd3100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M1.99929 6.66428H13.995" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_860">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QuickActions4() {
  return (
    <div className="bg-[#ad46ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-neutral-50">Schedule Interview</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-center text-nowrap whitespace-pre">Book candidate interviews</p>
    </div>
  );
}

function QuickActions5() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[143.438px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.994px] items-start relative w-[143.438px]">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] box-border content-stretch flex flex-col gap-[15.994px] h-[125.795px] items-center justify-center left-0 p-[0.909px] rounded-[8px] top-[137.78px] w-[428.466px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <QuickActions4 />
      <QuickActions5 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_779)" id="Icon">
          <path d={svgPaths.p1aaaa600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p1bffbec0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M6.6643 5.99785H5.33144" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 8.66357H5.33144" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 11.3293H5.33144" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_779">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QuickActions6() {
  return (
    <div className="bg-[#ff6900] relative rounded-[10px] shrink-0 size-[40px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-neutral-50">Create Report</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-center text-nowrap whitespace-pre">Generate HR analytics</p>
    </div>
  );
}

function QuickActions7() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[119.446px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.994px] items-start relative w-[119.446px]">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] box-border content-stretch flex flex-col gap-[15.994px] h-[125.795px] items-center justify-center left-[440.45px] p-[0.909px] rounded-[8px] top-[137.78px] w-[428.48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <QuickActions6 />
      <QuickActions7 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_756)" id="Icon">
          <path d={svgPaths.pd920f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pf9c0a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_756">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QuickActions8() {
  return (
    <div className="bg-[#f6339a] relative rounded-[10px] shrink-0 size-[40px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon19 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-neutral-50">Send Announcement</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-center">Company-wide notification</p>
    </div>
  );
}

function QuickActions9() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[148.097px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.994px] items-start relative w-[148.097px]">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] box-border content-stretch flex flex-col gap-[15.994px] h-[125.795px] items-center justify-center left-0 p-[0.909px] rounded-[8px] top-[275.57px] w-[428.466px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <QuickActions8 />
      <QuickActions9 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_760)" id="Icon">
          <path d={svgPaths.p1ffb2e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2e209400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_760">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QuickActions10() {
  return (
    <div className="bg-[#615fff] relative rounded-[10px] shrink-0 size-[40px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-neutral-50">Time Off Requests</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-center text-nowrap whitespace-pre">Review pending requests</p>
    </div>
  );
}

function QuickActions11() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[136.009px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.994px] items-start relative w-[136.009px]">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] box-border content-stretch flex flex-col gap-[15.994px] h-[125.795px] items-center justify-center left-[440.45px] p-[0.909px] rounded-[8px] top-[275.57px] w-[428.48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <QuickActions10 />
      <QuickActions11 />
    </div>
  );
}

function QuickActions12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[868.935px]" data-name="QuickActions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[868.935px]">
        <Button10 />
        <Button11 />
        <Button12 />
        <Button13 />
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-neutral-950 h-[497.145px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[29.986px] h-[497.145px] items-start pl-[24.901px] pr-[0.909px] py-[24.901px] relative w-full">
          <CardTitle4 />
          <QuickActions12 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_156_748)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_156_748">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[868.935px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[868.935px]">
        <Icon21 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[28px] not-italic text-[16px] text-neutral-50 text-nowrap top-[0.28px] whitespace-pre">Recent Activities</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[23.991px] left-0 top-0 w-[824.957px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">New employee onboarded</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[23.99px] w-[824.957px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#a1a1a1] text-[14px]">Sarah Johnson joined Engineering team</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[63.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[63.125px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap whitespace-pre">2 hours ago</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-green-100 h-[21.79px] relative rounded-[8px] shrink-0 w-[38.651px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.79px] items-center justify-center overflow-clip px-[8.909px] py-[2.909px] relative rounded-[inherit] w-[38.651px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px] text-nowrap whitespace-pre">hire</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[21.79px] items-center justify-between left-0 top-[47.98px] w-[824.957px]" data-name="Container">
      <Text1 />
      <Badge5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[69.773px] left-[43.98px] top-0 w-[824.957px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Container33 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_767)" id="Icon">
          <path d={svgPaths.p15935c00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p23a34100} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M12.6622 5.33144V9.33002" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M14.6615 7.33073H10.6629" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_767">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 bg-neutral-800 grow h-[31.989px] min-h-px min-w-px relative rounded-[3.0504e+07px] shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.989px] items-center justify-center relative w-full">
          <Icon22 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-0" data-name="Primitive.span">
      <Text2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[69.773px] left-0 top-0 w-[868.935px]" data-name="Container">
      <Container34 />
      <PrimitiveSpan5 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">Contract updated</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#a1a1a1] text-[14px]">{`Michael Chen's contract renewal processed`}</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[63.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[63.125px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap whitespace-pre">4 hours ago</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-blue-100 h-[21.79px] relative rounded-[8px] shrink-0 w-[73.196px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.79px] items-center justify-center overflow-clip px-[8.909px] py-[2.909px] relative rounded-[inherit] w-[73.196px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#193cb8] text-[12px] text-nowrap whitespace-pre">document</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[21.79px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[21.79px] items-center justify-between relative w-full">
          <Text3 />
          <Badge6 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.005e_-5px] h-[69.773px] items-start left-[43.98px] top-0 w-[824.957px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
      <Container36 />
    </div>
  );
}

function PrimitiveImg4() {
  return (
    <div className="basis-0 grow h-[31.989px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg4} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] w-full" />
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-0" data-name="Primitive.span">
      <PrimitiveImg4 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[69.773px] left-0 top-[85.77px] w-[868.935px]" data-name="Container">
      <Container37 />
      <PrimitiveSpan6 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[23.991px] left-0 top-0 w-[824.957px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">Leave request approved</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[23.99px] w-[824.957px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#a1a1a1] text-[14px]">{`Emily Rodriguez's vacation request for next week`}</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[63.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[63.125px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap whitespace-pre">6 hours ago</p>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#fef9c2] h-[21.79px] relative rounded-[8px] shrink-0 w-[45.966px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.79px] items-center justify-center overflow-clip px-[8.909px] py-[2.909px] relative rounded-[inherit] w-[45.966px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#894b00] text-[12px] text-nowrap whitespace-pre">leave</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex h-[21.79px] items-center justify-between left-0 top-[47.98px] w-[824.957px]" data-name="Container">
      <Text4 />
      <Badge7 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[69.773px] left-[43.98px] top-0 w-[824.957px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
      <Container39 />
    </div>
  );
}

function PrimitiveImg5() {
  return (
    <div className="basis-0 grow h-[31.989px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg5} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] w-full" />
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-0" data-name="Primitive.span">
      <PrimitiveImg5 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[69.773px] left-0 top-[171.53px] w-[868.935px]" data-name="Container">
      <Container40 />
      <PrimitiveSpan7 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[23.991px] left-0 top-0 w-[824.957px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">Performance review completed</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[23.99px] w-[824.957px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#a1a1a1] text-[14px]">{`David Kim's quarterly review submitted`}</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[52.23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[52.23px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap whitespace-pre">1 day ago</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-blue-100 h-[21.79px] relative rounded-[8px] shrink-0 w-[87.784px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.79px] items-center justify-center overflow-clip px-[8.909px] py-[2.909px] relative rounded-[inherit] w-[87.784px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#193cb8] text-[12px] text-nowrap whitespace-pre">performance</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex h-[21.79px] items-center justify-between left-0 top-[47.98px] w-[824.957px]" data-name="Container">
      <Text5 />
      <Badge8 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[69.773px] left-[43.98px] top-0 w-[824.957px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Container42 />
    </div>
  );
}

function PrimitiveImg6() {
  return (
    <div className="basis-0 grow h-[31.989px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg6} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] w-full" />
    </div>
  );
}

function PrimitiveSpan8() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-0" data-name="Primitive.span">
      <PrimitiveImg6 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[69.773px] left-0 top-[257.3px] w-[868.935px]" data-name="Container">
      <Container43 />
      <PrimitiveSpan8 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[23.991px] left-0 top-0 w-[824.957px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">Position change</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[23.99px] w-[824.957px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#a1a1a1] text-[14px]">Lisa Thompson promoted to Sales Director</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[57.33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.994px] items-start relative w-[57.33px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap whitespace-pre">2 days ago</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-green-100 h-[21.79px] relative rounded-[8px] shrink-0 w-[75.98px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.79px] items-center justify-center overflow-clip px-[8.909px] py-[2.909px] relative rounded-[inherit] w-[75.98px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px] text-nowrap whitespace-pre">promotion</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[21.79px] items-center justify-between left-0 top-[47.98px] w-[824.957px]" data-name="Container">
      <Text6 />
      <Badge9 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[69.773px] left-[43.98px] top-0 w-[824.957px]" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
      <Container45 />
    </div>
  );
}

function PrimitiveImg7() {
  return (
    <div className="basis-0 grow h-[31.989px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg7} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.989px] w-full" />
    </div>
  );
}

function PrimitiveSpan9() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.0504e+07px] size-[31.989px] top-0" data-name="Primitive.span">
      <PrimitiveImg7 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[69.773px] left-0 top-[343.07px] w-[868.935px]" data-name="Container">
      <Container46 />
      <PrimitiveSpan9 />
    </div>
  );
}

function RecentActivities() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[868.935px]" data-name="RecentActivities">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[868.935px]">
        <Container35 />
        <Container38 />
        <Container41 />
        <Container44 />
        <Container47 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-neutral-950 h-[512.628px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[29.986px] h-[512.628px] items-start pl-[24.901px] pr-[0.909px] py-[24.901px] relative w-full">
          <CardTitle5 />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.991px] h-[1033.76px] items-start left-[1885.45px] top-0 w-[918.736px]" data-name="Container">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[1033.76px] relative shrink-0 w-full" data-name="Container">
      <EmployeeTable5 />
      <Container48 />
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="absolute h-[15.994px] left-[24.9px] top-[24.9px] w-[1340.3px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-1.73px] whitespace-pre">Department Distribution</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/2 left-[46.77%] right-[44.03%] top-[23.33%]" data-name="Group">
      <div className="absolute inset-[-0.63%_-0.41%_-0.63%_-0.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 82">
          <g id="Group">
            <path d={svgPaths.p3426f0} fill="var(--fill-0, #8884D8)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[47.47%] left-[44.03%] right-1/2 top-[27.57%]" data-name="Group">
      <div className="absolute inset-[-0.92%_-1.08%_-0.73%_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 77">
          <g id="Group">
            <path d={svgPaths.p23013800} fill="var(--fill-0, #82CA9D)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[23.33%] left-[44.06%] right-[49.15%] top-1/2" data-name="Group">
      <div className="absolute inset-[-0.68%_-0.62%_-0.62%_-0.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 82">
          <g id="Group">
            <path d={svgPaths.pc40500} fill="var(--fill-0, #FFC658)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[23.61%] left-1/2 right-[46.09%] top-1/2" data-name="Group">
      <div className="absolute inset-[-2.04%_-1.35%_-0.71%_-1.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 82">
          <g id="Group">
            <path d={svgPaths.p35b2ca00} fill="var(--fill-0, #FF7C7C)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[29.85%] left-1/2 right-[44.03%] top-1/2" data-name="Group">
      <div className="absolute inset-[-0.83%_-0.63%_-1.17%_-1.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 63">
          <g id="Group">
            <path d={svgPaths.p220db200} fill="var(--fill-0, #8DD1E1)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[23.33%_44.03%]" data-name="Group">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[16.74%_39.78%_78.26%_53.58%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[16.74%_39.78%_78.26%_53.58%] leading-[normal] not-italic text-[#8884d8] text-[12px] text-nowrap whitespace-pre">Engineering: 45</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[31.43%_56.71%_63.56%_37.39%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[31.43%_56.71%_63.56%_37.39%] leading-[normal] not-italic text-[#82ca9d] text-[12px] text-nowrap text-right whitespace-pre">Marketing: 23</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[72.2%_54.61%_22.8%_41.43%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[72.2%_54.61%_22.8%_41.43%] leading-[normal] not-italic text-[#ffc658] text-[12px] text-nowrap text-right whitespace-pre">Sales: 34</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[76.32%_44.14%_18.68%_53.1%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[76.32%_44.14%_18.68%_53.1%] leading-[normal] not-italic text-[#ff7c7c] text-[12px] text-nowrap whitespace-pre">HR: 12</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[59.85%_38.36%_35.15%_56.79%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[59.85%_38.36%_35.15%_56.79%] leading-[normal] not-italic text-[#8dd1e1] text-[12px] text-nowrap whitespace-pre">Finance: 18</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[16.74%_38.36%_18.68%_37.39%]" data-name="Group">
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[16.74%_38.36%_18.68%_37.39%]" data-name="Group">
      <Group5 />
      <Group11 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1340px]" data-name="Icon">
      <Group12 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="absolute h-[300px] left-[24.9px] top-[70.88px] w-[1340px]" data-name="CardContent">
      <Icon23 />
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-neutral-950 h-[395.781px] left-0 rounded-[14px] top-0 w-[1390.1px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle6 />
      <CardContent4 />
    </div>
  );
}

function CardTitle7() {
  return (
    <div className="absolute h-[15.994px] left-[24.9px] top-[24.9px] w-[1340.31px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-1.73px] whitespace-pre">Headcount by Department</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[1.67%_0.37%_11.67%_4.85%]" data-name="Group">
      <div className="absolute bottom-[-0.19%] left-0 right-0 top-[-0.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1270 262">
          <g id="Group">
            <path d="M0 261H1270" id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 196H1270" id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 131H1270" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 66H1270" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 1H1270" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[1.67%_0.37%_11.67%_4.85%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.04%] right-[-0.04%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1272 260">
          <g id="Group">
            <path d="M128 0V260" id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M382 0V260" id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M636 0V260" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M890 0V260" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M1144 0V260" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M1 0V260" id="Vector_6" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M1271 0V260" id="Vector_7" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[1.67%_0.37%_11.67%_4.85%]" data-name="Group">
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[88.33%_83.17%_5.16%_11.83%]" data-name="Group">
      <div className="absolute inset-[88.33%_85.67%_9.67%_14.33%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_83.17%_5.16%_11.83%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Engineering</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[88.33%_64.59%_5.16%_31.16%]" data-name="Group">
      <div className="absolute inset-[88.33%_66.72%_9.67%_33.28%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_64.59%_5.16%_31.16%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Marketing</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[88.33%_46.6%_5.16%_51.08%]" data-name="Group">
      <div className="absolute inset-[88.33%_47.76%_9.67%_52.24%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_46.6%_5.16%_51.08%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Sales</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[88.33%_28.17%_5.16%_70.56%]" data-name="Group">
      <div className="absolute inset-[88.33%_28.81%_9.67%_71.19%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_28.17%_5.16%_70.56%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">HR</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[88.33%_8.17%_5.16%_88.47%]" data-name="Group">
      <div className="absolute inset-[88.33%_9.85%_9.67%_90.15%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_8.17%_5.16%_88.47%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Finance</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[88.33%_8.17%_5.16%_11.83%]" data-name="Group">
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[88.33%_0.37%_5.16%_4.85%]" data-name="Group">
      <div className="absolute inset-[88.33%_0.37%_11.67%_4.85%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1270 2">
            <path d="M0 1H1270" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[85.75%_95.15%_9.25%_3.66%]" data-name="Group">
      <div className="absolute inset-[88.33%_95.15%_11.67%_4.4%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[85.75%_95.75%_9.25%_3.66%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[64.09%_95.15%_30.91%_3.28%]" data-name="Group">
      <div className="absolute inset-[66.67%_95.15%_33.33%_4.4%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[64.09%_95.75%_30.91%_3.28%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">15</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[42.42%_95.15%_52.58%_3.06%]" data-name="Group">
      <div className="absolute inset-[45%_95.15%_55%_4.4%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[42.42%_95.75%_52.58%_3.06%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">30</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[20.75%_95.15%_74.25%_3.13%]" data-name="Group">
      <div className="absolute inset-[23.33%_95.15%_76.67%_4.4%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[20.75%_95.75%_74.25%_3.13%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">45</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[1.42%_95.15%_93.58%_3.13%]" data-name="Group">
      <div className="absolute inset-[1.67%_95.15%_98.33%_4.4%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[1.42%_95.75%_93.58%_3.13%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">60</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[1.42%_95.15%_9.25%_3.06%]" data-name="Group">
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[1.42%_95.15%_9.25%_3.06%]" data-name="Group">
      <div className="absolute inset-[1.67%_95.15%_11.67%_4.85%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 260">
            <path d="M1 0V260" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group28 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[23.33%_78.1%_11.67%_6.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 195">
        <g id="Group">
          <path d="M0 0H203V195H0V0Z" fill="var(--fill-0, #8884D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[55.11%_59.15%_11.67%_25.7%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 100">
        <g id="Group">
          <path d="M0 0H203V99.6667H0V0Z" fill="var(--fill-0, #82CA9D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[39.22%_40.19%_11.67%_44.66%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 148">
        <g id="Group">
          <path d="M0 0H203V147.333H0V0Z" fill="var(--fill-0, #FFC658)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[71%_21.24%_11.67%_63.61%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 52">
        <g id="Group">
          <path d="M0 0H203V52H0V0Z" fill="var(--fill-0, #FF7C7C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[62.33%_2.28%_11.67%_82.57%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 78">
        <g id="Group">
          <path d="M0 0H203V78H0V0Z" fill="var(--fill-0, #8DD1E1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[23.33%_2.28%_11.67%_6.75%]" data-name="Group">
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[23.33%_2.28%_11.67%_6.75%]" data-name="Group">
      <Group35 />
    </div>
  );
}

function RechartsBarRe() {
  return (
    <div className="absolute contents inset-[23.33%_2.28%_11.67%_6.75%]" data-name="recharts-bar-:re:">
      <Group36 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1340px]" data-name="Icon">
      <Group15 />
      <Group22 />
      <Group29 />
      <RechartsBarRe />
    </div>
  );
}

function CardContent5() {
  return (
    <div className="absolute h-[300px] left-[24.9px] top-[70.88px] w-[1340px]" data-name="CardContent">
      <Icon24 />
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute bg-neutral-950 h-[395.781px] left-[1414.09px] rounded-[14px] top-0 w-[1390.11px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle7 />
      <CardContent5 />
    </div>
  );
}

function CardTitle8() {
  return (
    <div className="absolute h-[15.994px] left-[24.9px] top-[24.9px] w-[2754.4px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-1.73px] whitespace-pre">Headcount Trend (Last 6 Months)</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[1.67%_0.18%_11.67%_2.36%]" data-name="Group">
      <div className="absolute bottom-[-0.19%] left-0 right-0 top-[-0.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2684 262">
          <g id="Group">
            <path d={svgPaths.pe34f880} id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d={svgPaths.p34760a00} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d="M-0.000201678 131H2683.99" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d="M0 66H2683.99" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d="M0 1H2683.99" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[1.67%_0.18%_11.67%_2.36%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.02%] right-[-0.02%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2686 260">
          <g id="Group">
            <path d="M1 0V260" id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d="M537.798 -1.55137e-05V260" id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d="M1074.6 -1.55137e-05V260" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d="M1611.39 -1.55137e-05V260" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d="M2148.19 -1.55137e-05V260" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
            <path d="M2684.99 -1.55137e-05V260" id="Vector_6" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" strokeWidth="0.999997" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[1.67%_0.18%_11.67%_2.36%]" data-name="Group">
      <Group37 />
      <Group38 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[88.33%_97.26%_5.16%_1.98%]" data-name="Group">
      <div className="absolute inset-[88.33%_97.64%_9.67%_2.36%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_97.26%_5.16%_1.98%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Jan</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[88.33%_77.77%_5.16%_21.47%]" data-name="Group">
      <div className="absolute inset-[88.33%_78.15%_9.67%_21.85%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_77.77%_5.16%_21.47%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Feb</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[88.33%_58.26%_5.16%_40.94%]" data-name="Group">
      <div className="absolute inset-[88.33%_58.66%_9.67%_41.34%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_58.26%_5.16%_40.94%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Mar</p>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[88.33%_38.8%_5.16%_60.47%]" data-name="Group">
      <div className="absolute inset-[88.33%_39.16%_9.67%_60.84%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_38.8%_5.16%_60.47%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Apr</p>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[88.33%_19.24%_5.16%_79.89%]" data-name="Group">
      <div className="absolute inset-[88.33%_19.67%_9.67%_80.33%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_19.24%_5.16%_79.89%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">May</p>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[88.33%_0.05%_5.16%_99.19%]" data-name="Group">
      <div className="absolute inset-[88.33%_0.18%_9.67%_99.82%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_0.05%_5.16%_99.19%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Jun</p>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[88.33%_0.05%_5.16%_1.98%]" data-name="Group">
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[88.33%_0.05%_5.16%_1.98%]" data-name="Group">
      <div className="absolute inset-[88.33%_0.18%_11.67%_2.36%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2684 2">
            <path d="M0 1H2683.99" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <Group46 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[85.75%_97.64%_9.25%_1.78%]" data-name="Group">
      <div className="absolute inset-[88.33%_97.64%_11.67%_2.14%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[85.75%_97.93%_9.25%_1.78%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[64.09%_97.64%_30.91%_1.24%]" data-name="Group">
      <div className="absolute inset-[66.67%_97.64%_33.33%_2.14%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[64.09%_97.93%_30.91%_1.24%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">350</p>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[42.42%_97.64%_52.58%_1.27%]" data-name="Group">
      <div className="absolute inset-[45%_97.64%_55%_2.14%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[42.42%_97.93%_52.58%_1.27%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">700</p>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[20.75%_97.64%_74.25%_1.05%]" data-name="Group">
      <div className="absolute inset-[23.33%_97.64%_76.67%_2.14%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[20.75%_97.93%_74.25%_1.05%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">1050</p>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[1.42%_97.64%_93.58%_1.02%]" data-name="Group">
      <div className="absolute inset-[1.67%_97.64%_98.33%_2.14%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[1.42%_97.93%_93.58%_1.02%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">1400</p>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[1.42%_97.64%_9.25%_1.02%]" data-name="Group">
      <Group48 />
      <Group49 />
      <Group50 />
      <Group51 />
      <Group52 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[1.42%_97.64%_9.25%_1.02%]" data-name="Group">
      <div className="absolute inset-[1.67%_97.64%_11.67%_2.36%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 260">
            <path d="M1 0V260" id="Vector" stroke="var(--stroke-0, #666666)" strokeWidth="0.999997" />
          </svg>
        </div>
      </div>
      <Group53 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[9.8%_0.04%_83.38%_2.21%]" data-name="Group">
      <div className="absolute inset-[-4.89%_-0.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2694 23">
          <g id="Group">
            <path d={svgPaths.p194d040} id="recharts-line-:rf:" stroke="var(--stroke-0, #8884D8)" strokeWidth="2.99999" />
            <g id="Group_2">
              <path d={svgPaths.p242a5b00} fill="var(--fill-0, #8884D8)" id="Vector" stroke="var(--stroke-0, #8884D8)" strokeWidth="1.99999" />
              <path d={svgPaths.pb075200} fill="var(--fill-0, #8884D8)" id="Vector_2" stroke="var(--stroke-0, #8884D8)" strokeWidth="1.99999" />
              <path d={svgPaths.p17b1a400} fill="var(--fill-0, #8884D8)" id="Vector_3" stroke="var(--stroke-0, #8884D8)" strokeWidth="1.99999" />
              <path d={svgPaths.p264c4800} fill="var(--fill-0, #8884D8)" id="Vector_4" stroke="var(--stroke-0, #8884D8)" strokeWidth="1.99999" />
              <path d={svgPaths.p1a7e2900} fill="var(--fill-0, #8884D8)" id="Vector_5" stroke="var(--stroke-0, #8884D8)" strokeWidth="1.99999" />
              <path d={svgPaths.p13975bc0} fill="var(--fill-0, #8884D8)" id="Vector_6" stroke="var(--stroke-0, #8884D8)" strokeWidth="1.99999" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute h-[299.999px] left-0 overflow-clip top-0 w-[2753.99px]" data-name="Icon">
      <Group39 />
      <Group47 />
      <Group54 />
      <Group56 />
    </div>
  );
}

function CardContent6() {
  return (
    <div className="absolute h-[300px] left-[24.9px] top-[70.88px] w-[2753.99px]" data-name="CardContent">
      <Icon25 />
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute bg-neutral-950 h-[395.781px] left-0 rounded-[14px] top-[419.77px] w-[2804.2px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.909px] border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle8 />
      <CardContent6 />
    </div>
  );
}

function HrCharts() {
  return (
    <div className="h-[815.554px] relative shrink-0 w-full" data-name="HRCharts">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex flex-col gap-[23.991px] h-[2047.09px] items-start relative shrink-0 w-full" data-name="App">
      <HrMetricsCards8 />
      <Container49 />
      <HrCharts />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[2865.82px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pb-0 pl-[23.991px] pr-[37.628px] pt-[23.991px] relative rounded-[inherit] w-[2865.82px]">
        <App />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[779.091px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[779.091px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

function HrisLayout() {
  return (
    <div className="absolute content-stretch flex h-[779.091px] items-start left-0 top-0 w-[3121.82px]" data-name="HRISLayout">
      <Sidebar />
      <Container50 />
    </div>
  );
}

function SidebarTrigger() {
  return (
    <div className="absolute content-stretch flex items-start left-[293.48px] overflow-clip size-[0.994px] top-[33.48px]" data-name="SidebarTrigger">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Toggle Sidebar</p>
    </div>
  );
}

function ThemeToggle() {
  return (
    <div className="absolute content-stretch flex items-start left-[2764.64px] overflow-clip size-[0.994px] top-[33.49px]" data-name="ThemeToggle">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Toggle theme</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[23.991px] left-0 top-[-20000px] w-[25.881px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">350</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_686)" id="Icon">
          <path d={svgPaths.p15935c00} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p1cc8e400} id="Vector_2" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p335722c0} id="Vector_3" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p23a34100} id="Vector_4" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_686">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-neutral-50 relative rounded-[10px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon26 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[91.222px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.991px] relative w-[91.222px]">
        <p className="absolute font-['Arial:Bold',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2.09px] whitespace-pre">HRIS System</p>
      </div>
    </div>
  );
}

function HrisLayout1() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[31.989px] items-center left-[15.99px] top-[15.99px] w-[223.097px]" data-name="HRISLayout">
      <Container51 />
      <Text8 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pc88c140} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M11.9957 11.3293V5.99787" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M8.66359 11.3293V3.33215" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M5.33144 11.3293V9.33002" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function HrisLayout2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.977px]" data-name="HRISLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[68.977px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function SidebarMenuButton() {
  return (
    <div className="absolute bg-neutral-800 box-border content-stretch flex gap-[7.997px] h-[31.989px] items-center left-0 overflow-clip pl-[7.997px] pr-0 py-0 rounded-[8px] top-0 w-[255.085px]" data-name="SidebarMenuButton">
      <Icon27 />
      <HrisLayout2 />
    </div>
  );
}

function SidebarMenuItem() {
  return (
    <div className="absolute h-[31.989px] left-0 top-0 w-[255.085px]" data-name="SidebarMenuItem">
      <SidebarMenuButton />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_773)" id="Icon">
          <path d={svgPaths.p15935c00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p18591840} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p335722c0} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p23a34100} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_773">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HrisLayout3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.335px]" data-name="HRISLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[66.335px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Employees</p>
      </div>
    </div>
  );
}

function SidebarMenuButton1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.997px] h-[31.989px] items-center left-0 overflow-clip pl-[7.997px] pr-0 py-0 rounded-[8px] top-0 w-[255.085px]" data-name="SidebarMenuButton">
      <Icon28 />
      <HrisLayout3 />
    </div>
  );
}

function SidebarMenuItem1() {
  return (
    <div className="absolute h-[31.989px] left-0 top-[35.98px] w-[255.085px]" data-name="SidebarMenuItem">
      <SidebarMenuButton1 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_702)" id="Icon">
          <path d={svgPaths.p15935c00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p23a34100} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M12.6622 5.33144V9.33002" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M14.6615 7.33073H10.6629" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_702">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HrisLayout4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.73px]" data-name="HRISLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[74.73px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Recruitment</p>
      </div>
    </div>
  );
}

function SidebarMenuButton2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.997px] h-[31.989px] items-center left-0 overflow-clip pl-[7.997px] pr-0 py-0 rounded-[8px] top-0 w-[255.085px]" data-name="SidebarMenuButton">
      <Icon29 />
      <HrisLayout4 />
    </div>
  );
}

function SidebarMenuItem2() {
  return (
    <div className="absolute h-[31.989px] left-0 top-[71.96px] w-[255.085px]" data-name="SidebarMenuItem">
      <SidebarMenuButton2 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_674)" id="Icon">
          <path d="M5.33144 1.33286V3.99858" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 1.33286V3.99858" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p8fd3100} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M1.99929 6.6643H13.995" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_674">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HrisLayout5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.83px]" data-name="HRISLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[119.83px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">{`Time & Attendance`}</p>
      </div>
    </div>
  );
}

function SidebarMenuButton3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.997px] h-[31.989px] items-center left-0 overflow-clip pl-[7.997px] pr-0 py-0 rounded-[8px] top-0 w-[255.085px]" data-name="SidebarMenuButton">
      <Icon30 />
      <HrisLayout5 />
    </div>
  );
}

function SidebarMenuItem3() {
  return (
    <div className="absolute h-[31.989px] left-0 top-[107.94px] w-[255.085px]" data-name="SidebarMenuItem">
      <SidebarMenuButton3 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_670)" id="Icon">
          <path d="M7.99716 1.33286V14.6615" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p31c68c00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_670">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HrisLayout6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.122px]" data-name="HRISLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[41.122px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Payroll</p>
      </div>
    </div>
  );
}

function SidebarMenuButton4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.997px] h-[31.989px] items-center left-0 overflow-clip pl-[7.997px] pr-0 py-0 rounded-[8px] top-0 w-[255.085px]" data-name="SidebarMenuButton">
      <Icon31 />
      <HrisLayout6 />
    </div>
  );
}

function SidebarMenuItem4() {
  return (
    <div className="absolute h-[31.989px] left-0 top-[143.92px] w-[255.085px]" data-name="SidebarMenuItem">
      <SidebarMenuButton4 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_891)" id="Icon">
          <path d={svgPaths.p1aaaa600} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p1ee41280} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M6.6643 5.99788H5.33144" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 8.6636H5.33144" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M10.6629 11.3293H5.33144" id="Vector_5" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_891">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HrisLayout7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.398px]" data-name="HRISLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[70.398px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Documents</p>
      </div>
    </div>
  );
}

function SidebarMenuButton5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.997px] h-[31.989px] items-center left-0 overflow-clip pl-[7.997px] pr-0 py-0 rounded-[8px] top-0 w-[255.085px]" data-name="SidebarMenuButton">
      <Icon32 />
      <HrisLayout7 />
    </div>
  );
}

function SidebarMenuItem5() {
  return (
    <div className="absolute h-[31.989px] left-0 top-[179.9px] w-[255.085px]" data-name="SidebarMenuItem">
      <SidebarMenuButton5 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_156_666)" id="Icon">
          <path d={svgPaths.p1e68f500} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p1f301500} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_156_666">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HrisLayout8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.758px]" data-name="HRISLayout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[49.758px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function SidebarMenuButton6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.997px] h-[31.989px] items-center left-0 overflow-clip pl-[7.997px] pr-0 py-0 rounded-[8px] top-0 w-[255.085px]" data-name="SidebarMenuButton">
      <Icon33 />
      <HrisLayout8 />
    </div>
  );
}

function SidebarMenuItem6() {
  return (
    <div className="absolute h-[31.989px] left-0 top-[215.88px] w-[255.085px]" data-name="SidebarMenuItem">
      <SidebarMenuButton6 />
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="h-[247.869px] relative shrink-0 w-[255.085px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[247.869px] relative w-[255.085px]">
        <SidebarMenuItem />
        <SidebarMenuItem1 />
        <SidebarMenuItem2 />
        <SidebarMenuItem3 />
        <SidebarMenuItem4 />
        <SidebarMenuItem5 />
        <SidebarMenuItem6 />
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[715.114px] items-start left-0 overflow-clip top-[63.98px] w-[255.085px]" data-name="SidebarContent">
      <SidebarMenu />
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="absolute bg-neutral-900 h-[779.091px] left-0 top-0 w-[255.085px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_0.909px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <HrisLayout1 />
      <SidebarContent />
    </div>
  );
}

export default function HrisPage() {
  return (
    <div className="bg-neutral-950 relative size-full" data-name="HRIS Page">
      <HrisLayout />
      <SidebarTrigger />
      <ThemeToggle />
      <Text7 />
      <Sidebar1 />
    </div>
  );
}