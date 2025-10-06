import svgPaths from "./svg-tap4tts2c0";

function Sidebar() {
  return (
    <div className="h-[944px] relative shrink-0 w-[256px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[944px] w-[256px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[28px]">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[24.688px]">
        <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">OW</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-gradient-to-r from-[#2b7fff] relative rounded-[10px] shrink-0 size-[32px] to-[#9810fa]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Text />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <p className="absolute font-['Arial:Bold',_sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] whitespace-pre">OVERWATCH Business Intelligence Platform</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-full">
        <Container />
        <Heading1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[706.062px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[36px] items-center relative w-[706.062px]">
        <Button />
        <Container1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_195_746)" id="Icon">
          <path d={svgPaths.p3adb3b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 1.33333V2.66667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333V14.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5c447c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p191ca260} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H2.66667" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 8H14.6667" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17455c00} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1df25380} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_195_746">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(38,38,38,0.3)] h-[32px] relative rounded-[8px] shrink-0 w-[125.172px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[125.172px]">
        <Icon1 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[41px] not-italic text-[14px] text-nowrap text-white top-[4px] whitespace-pre">Light Mode</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Arial:Bold',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1d293d] text-[24px] text-nowrap whitespace-pre">Unified Business Intelligence Dashboard</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[-2px] whitespace-pre">Real-time insights across all enterprise systems</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[452.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[56px] items-start relative w-[452.188px]">
        <Heading2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_195_868)" id="Icon">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_195_868">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#00a63e] text-[14px] text-nowrap whitespace-pre">All Systems Online</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-full">
        <Icon2 />
        <Text1 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-green-50 h-[22px] relative rounded-[8px] shrink-0 w-[88.313px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[88.313px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-nowrap whitespace-pre">AI/ML Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[233.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[22px] items-center relative w-[233.688px]">
        <Container5 />
        <Badge />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.594px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[88.594px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-nowrap whitespace-pre">Total Revenue</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 1.33333V14.6667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5120400} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-center justify-between left-px px-[24px] py-0 top-px w-[761px]" data-name="CardHeader">
      <CardTitle />
      <Icon3 />
    </div>
  );
}

function UnifiedDashboard() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="UnifiedDashboard">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d293d] text-[24px]">$2.34M</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[40.047px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00a63e] text-[12px] text-nowrap whitespace-pre">+12.5%</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[85.063px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">from last month</p>
      </div>
    </div>
  );
}

function UnifiedDashboard1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full" data-name="UnifiedDashboard">
      <Icon4 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[76px] items-start left-px px-[24px] py-0 top-[77px] w-[761px]" data-name="CardContent">
      <UnifiedDashboard />
      <UnifiedDashboard1 />
    </div>
  );
}

function UnifiedDashboard2() {
  return <div className="absolute left-[698px] rounded-bl-[24px] size-[64px] top-px" data-name="UnifiedDashboard" />;
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-neutral-950 relative rounded-[14px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardHeader />
        <CardContent />
        <UnifiedDashboard2 />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.359px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[110.359px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-nowrap whitespace-pre">Active Customers</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3baa1080} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-center justify-between left-px px-[24px] py-0 top-px w-[761px]" data-name="CardHeader">
      <CardTitle1 />
      <Icon5 />
    </div>
  );
}

function UnifiedDashboard3() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="UnifiedDashboard">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d293d] text-[24px]">1,847</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[33.578px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00a63e] text-[12px] text-nowrap whitespace-pre">+8.2%</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[85.063px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">from last month</p>
      </div>
    </div>
  );
}

function UnifiedDashboard4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full" data-name="UnifiedDashboard">
      <Icon6 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[76px] items-start left-px px-[24px] py-0 top-[77px] w-[761px]" data-name="CardContent">
      <UnifiedDashboard3 />
      <UnifiedDashboard4 />
    </div>
  );
}

function UnifiedDashboard5() {
  return <div className="absolute left-[698px] rounded-bl-[24px] size-[64px] top-px" data-name="UnifiedDashboard" />;
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-neutral-950 relative rounded-[14px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardHeader1 />
        <CardContent1 />
        <UnifiedDashboard5 />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[139.484px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[139.484px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-nowrap whitespace-pre">Employee Satisfaction</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_195_885)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_195_885">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-center justify-between left-px px-[24px] py-0 top-px w-[761px]" data-name="CardHeader">
      <CardTitle2 />
      <Icon7 />
    </div>
  );
}

function UnifiedDashboard6() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="UnifiedDashboard">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d293d] text-[24px]">87%</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[33.578px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00a63e] text-[12px] text-nowrap whitespace-pre">+3.1%</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[85.063px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">from last month</p>
      </div>
    </div>
  );
}

function UnifiedDashboard7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full" data-name="UnifiedDashboard">
      <Icon8 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[76px] items-start left-px px-[24px] py-0 top-[77px] w-[761px]" data-name="CardContent">
      <UnifiedDashboard6 />
      <UnifiedDashboard7 />
    </div>
  );
}

function UnifiedDashboard8() {
  return <div className="absolute left-[698px] rounded-bl-[24px] size-[64px] top-px" data-name="UnifiedDashboard" />;
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-neutral-950 relative rounded-[14px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardHeader2 />
        <CardContent2 />
        <UnifiedDashboard8 />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[113.172px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[113.172px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] text-nowrap whitespace-pre">AI Accuracy Score</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_195_785)" id="Icon">
          <path d="M8 12V3.33333" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3b97c700} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ccff000} id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1025c120} id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc8fb100} id="Vector_5" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p20a84200} id="Vector_6" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p38868200} id="Vector_7" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p348bc3f0} id="Vector_8" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_195_785">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-center justify-between left-px px-[24px] py-0 top-px w-[761px]" data-name="CardHeader">
      <CardTitle3 />
      <Icon9 />
    </div>
  );
}

function UnifiedDashboard9() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="UnifiedDashboard">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d293d] text-[24px]">94.2%</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M8 3.5H11V6.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3a7e7417} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[33.578px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00a63e] text-[12px] text-nowrap whitespace-pre">+2.8%</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[85.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[85.063px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-nowrap whitespace-pre">from last month</p>
      </div>
    </div>
  );
}

function UnifiedDashboard10() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full" data-name="UnifiedDashboard">
      <Icon10 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[76px] items-start left-px px-[24px] py-0 top-[77px] w-[761px]" data-name="CardContent">
      <UnifiedDashboard9 />
      <UnifiedDashboard10 />
    </div>
  );
}

function UnifiedDashboard11() {
  return <div className="absolute left-[698px] rounded-bl-[24px] size-[64px] top-px" data-name="UnifiedDashboard" />;
}

function Card3() {
  return (
    <div className="[grid-area:1_/_4] bg-neutral-950 relative rounded-[14px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <CardHeader3 />
        <CardContent3 />
        <UnifiedDashboard11 />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[154px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center left-[3px] px-[9px] py-[5px] rounded-[14px] top-[3.5px] w-[618.797px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Overview</p>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center left-[621.8px] px-[9px] py-[5px] rounded-[14px] top-[3.5px] w-[618.797px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">Performance</p>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center left-[1240.59px] px-[9px] py-[5px] rounded-[14px] top-[3.5px] w-[618.797px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">Advisory</p>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center left-[1859.39px] px-[9px] py-[5px] rounded-[14px] top-[3.5px] w-[618.797px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">AI/ML Engine</p>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center left-[2478.19px] px-[9px] py-[5px] rounded-[14px] top-[3.5px] w-[618.797px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a1a1] text-[14px] text-nowrap whitespace-pre">Maturity</p>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-neutral-800 h-[36px] relative rounded-[14px] shrink-0 w-[3100px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[3100px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
        <PrimitiveButton2 />
        <PrimitiveButton3 />
        <PrimitiveButton4 />
      </div>
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2px] whitespace-pre">Enterprise System Performance</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="[grid-area:2_/_1] relative shrink-0" data-name="CardDescription">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#a1a1a1] text-[16px] text-nowrap top-[-2px] whitespace-pre">Real-time performance across all modules</p>
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="absolute box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[16px_minmax(0px,_1fr)] h-[70px] left-px pb-0 pt-[24px] px-[24px] top-px w-[1536px]" data-name="CardHeader">
      <CardTitle4 />
      <CardDescription />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.67%_0.34%_11.67%_4.37%]" data-name="Group">
      <div className="absolute bottom-[-0.19%] left-0 right-0 top-[-0.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1418 262">
          <g id="Group">
            <path d="M0 261H1418" id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 196H1418" id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 131H1418" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 66H1418" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 1H1418" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.67%_0.34%_11.67%_4.37%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.04%] right-[-0.04%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1420 260">
          <g id="Group">
            <path d="M1 0V260" id="Vector" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M284.6 0V260" id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M568.2 0V260" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M851.8 0V260" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M1135.4 0V260" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M1419 0V260" id="Vector_6" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[1.67%_0.34%_11.67%_4.37%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[88.33%_94.93%_5.16%_3.66%]" data-name="Group">
      <div className="absolute inset-[88.33%_95.63%_9.67%_4.37%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_94.93%_5.16%_3.66%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Jan</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[88.33%_75.87%_5.16%_22.72%]" data-name="Group">
      <div className="absolute inset-[88.33%_76.57%_9.67%_23.43%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_75.87%_5.16%_22.72%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Feb</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[88.33%_56.77%_5.16%_41.75%]" data-name="Group">
      <div className="absolute inset-[88.33%_57.51%_9.67%_42.49%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_56.77%_5.16%_41.75%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Mar</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[88.33%_37.78%_5.16%_60.87%]" data-name="Group">
      <div className="absolute inset-[88.33%_38.45%_9.67%_61.55%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_37.78%_5.16%_60.87%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Apr</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[88.33%_18.59%_5.16%_79.8%]" data-name="Group">
      <div className="absolute inset-[88.33%_19.39%_9.67%_80.61%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_18.59%_5.16%_79.8%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">May</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[88.33%_0.1%_5.16%_98.49%]" data-name="Group">
      <div className="absolute inset-[88.33%_0.34%_9.67%_99.66%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[89.84%_0.1%_5.16%_98.49%] leading-[normal] not-italic text-[#666666] text-[12px] text-center text-nowrap whitespace-pre">Jun</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[88.33%_0.1%_5.16%_3.66%]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[88.33%_0.1%_5.16%_3.66%]" data-name="Group">
      <div className="absolute inset-[88.33%_0.34%_11.67%_4.37%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1418 2">
            <path d="M0 1H1418" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[85.75%_95.63%_9.25%_3.29%]" data-name="Group">
      <div className="absolute inset-[88.33%_95.63%_11.67%_3.96%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[85.75%_96.17%_9.25%_3.29%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">0</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[64.09%_95.63%_30.91%_2.42%]" data-name="Group">
      <div className="absolute inset-[66.67%_95.63%_33.33%_3.96%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[64.09%_96.17%_30.91%_2.42%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">150</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[42.42%_95.63%_52.58%_2.29%]" data-name="Group">
      <div className="absolute inset-[45%_95.63%_55%_3.96%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[42.42%_96.17%_52.58%_2.29%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">300</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[20.75%_95.63%_74.25%_2.29%]" data-name="Group">
      <div className="absolute inset-[23.33%_95.63%_76.67%_3.96%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[20.75%_96.17%_74.25%_2.29%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">450</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[1.42%_95.63%_93.58%_2.29%]" data-name="Group">
      <div className="absolute inset-[1.67%_95.63%_98.33%_3.96%]" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M0 1H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[1.42%_96.17%_93.58%_2.29%] leading-[normal] not-italic text-[#666666] text-[12px] text-nowrap text-right whitespace-pre">600</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[1.42%_95.63%_9.25%_2.29%]" data-name="Group">
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[1.42%_95.63%_9.25%_2.29%]" data-name="Group">
      <div className="absolute inset-[1.67%_95.63%_11.67%_4.37%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 260">
            <path d="M1 0V260" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[74.9%_0.34%_11.67%_4.37%]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-1.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1418 42">
          <g id="Group">
            <path d={svgPaths.p3a330d00} fill="var(--fill-0, #8884D8)" fillOpacity="0.6" id="recharts-area-:r6u:" />
            <path d={svgPaths.p18dd0100} id="Vector" stroke="var(--stroke-0, #8884D8)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[74.9%_0.34%_11.67%_4.37%]" data-name="Group">
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[61.76%_0.34%_23.94%_4.37%]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-1.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1418 44">
          <g id="Group">
            <path d={svgPaths.pb102f80} fill="var(--fill-0, #82CA9D)" fillOpacity="0.6" id="recharts-area-:r6v:" />
            <path d={svgPaths.p4c74680} id="Vector" stroke="var(--stroke-0, #82CA9D)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[61.76%_0.34%_23.94%_4.37%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[49.04%_0.34%_35.21%_4.37%]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-1.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1418 49">
          <g id="Group">
            <path d={svgPaths.p1963d580} fill="var(--fill-0, #FFC658)" fillOpacity="0.6" id="recharts-area-:r70:" />
            <path d={svgPaths.p5701300} id="Vector" stroke="var(--stroke-0, #FFC658)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[49.04%_0.34%_35.21%_4.37%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[35.32%_0.34%_47.06%_4.37%]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.95%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1419 54">
          <g id="Group">
            <path d={svgPaths.p25f929f0} fill="var(--fill-0, #FF7300)" fillOpacity="0.6" id="recharts-area-:r71:" />
            <path d={svgPaths.p3e3b6680} id="Vector" stroke="var(--stroke-0, #FF7300)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[35.32%_0.34%_47.06%_4.37%]" data-name="Group">
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[21.46%_0.34%_59.77%_4.37%]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1419 58">
          <g id="Group">
            <path d={svgPaths.p22c71a00} fill="var(--fill-0, #8DD1E1)" fillOpacity="0.6" id="recharts-area-:r72:" />
            <path d={svgPaths.p38494880} id="Vector" stroke="var(--stroke-0, #8DD1E1)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[21.46%_0.34%_59.77%_4.37%]" data-name="Group">
      <Group26 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1488px]" data-name="Icon">
      <Group2 />
      <Group10 />
      <Group17 />
      <Group19 />
      <Group21 />
      <Group23 />
      <Group25 />
      <Group27 />
    </div>
  );
}

function CardContent4() {
  return (
    <div className="absolute h-[300px] left-[25px] top-[95px] w-[1488px]" data-name="CardContent">
      <Icon11 />
    </div>
  );
}

function Card4() {
  return (
    <div className="[grid-area:1_/_1] bg-neutral-950 relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader4 />
      <CardContent4 />
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2px] whitespace-pre">Business Maturity Assessment</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="[grid-area:2_/_1] relative shrink-0" data-name="CardDescription">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#a1a1a1] text-[16px] text-nowrap top-[-2px] whitespace-pre">Current vs target maturity across business areas</p>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="absolute box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[16px_minmax(0px,_1fr)] h-[70px] left-px pb-0 pt-[24px] px-[24px] top-px w-[1536px]" data-name="CardHeader">
      <CardTitle5 />
      <CardDescription1 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[11.33%_43.25%]" data-name="Group">
      <div className="absolute inset-[-0.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 234">
          <g id="Group">
            <path d={svgPaths.p1149e300} id="Vector" stroke="var(--stroke-0, #CCCCCC)" />
            <path d={svgPaths.p2a0ba500} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" />
            <path d={svgPaths.p2a640300} id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" />
            <path d={svgPaths.p95f7a00} id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[11.33%_43.25%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.12%] right-[-0.12%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 232">
          <g id="Group">
            <path d="M101.459 116V0" id="Vector" stroke="var(--stroke-0, #CCCCCC)" />
            <path d="M101.459 116L201.918 58" id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" />
            <path d="M101.459 116L201.918 174" id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" />
            <path d="M101.459 116V232" id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" />
            <path d="M101.459 116L1 174" id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" />
            <path d="M101.459 116L1 58" id="Vector_6" stroke="var(--stroke-0, #CCCCCC)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[11.33%_43.25%]" data-name="Group">
      <Group28 />
      <Group29 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[4.67%_48.35%_88.67%_48.35%]" data-name="Group">
      <div className="absolute bottom-[88.67%] left-1/2 right-1/2 top-[8.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[4.67%_48.35%_90.33%_48.35%] leading-[normal] not-italic text-[12px] text-[grey] text-center text-nowrap whitespace-pre">Strategy</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[26.75%_38.55%_68.25%_56.75%]" data-name="Group">
      <div className="absolute inset-[29.33%_42.78%_69.33%_56.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[26.75%_38.55%_68.25%_57.22%] leading-[normal] not-italic text-[12px] text-[grey] text-nowrap whitespace-pre">Operations</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[68.09%_38.35%_26.91%_56.75%]" data-name="Group">
      <div className="absolute inset-[69.33%_42.78%_29.33%_56.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[68.09%_38.35%_26.91%_57.22%] leading-[normal] not-italic text-[12px] text-[grey] text-nowrap whitespace-pre">Technology</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[88.67%_48.49%_4.83%_48.49%]" data-name="Group">
      <div className="absolute bottom-[8.67%] left-1/2 right-1/2 top-[88.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[90.17%_48.49%_4.83%_48.49%] leading-[normal] not-italic text-[12px] text-[grey] text-center text-nowrap whitespace-pre">Finance</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[68.09%_56.75%_26.91%_41.64%]" data-name="Group">
      <div className="absolute inset-[69.33%_56.75%_29.33%_42.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[68.09%_57.22%_26.91%_41.64%] leading-[normal] not-italic text-[12px] text-[grey] text-nowrap text-right whitespace-pre">HR</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[26.75%_56.75%_68.25%_39.02%]" data-name="Group">
      <div className="absolute inset-[29.33%_56.75%_69.33%_42.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[26.75%_57.22%_68.25%_39.02%] leading-[normal] not-italic text-[12px] text-[grey] text-nowrap text-right whitespace-pre">Customer</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[4.67%_38.35%_4.83%_39.02%]" data-name="Group">
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[4.67%_38.35%_4.83%_39.02%]" data-name="Group">
      <div className="absolute inset-[11.33%_43.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group37 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[47.33%] contents left-[49.8%] right-[49.19%] top-1/2" data-name="Group">
      <div className="absolute bottom-[47.33%] flex items-center justify-center left-[49.8%] right-[49.19%] top-1/2">
        <div className="flex-none h-[15px] rotate-[90deg] w-[8px]">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative text-[#cccccc] text-[12px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute bottom-[45%] contents left-[51.75%] right-[47.24%] top-1/2" data-name="Group">
      <div className="absolute bottom-[45%] flex items-center justify-center left-[51.75%] right-[47.24%] top-1/2">
        <div className="flex-none rotate-[90deg] size-[15px]">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative text-[#cccccc] text-[12px] text-nowrap whitespace-pre">25</p>
        </div>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute bottom-[45%] contents left-[53.7%] right-[45.3%] top-1/2" data-name="Group">
      <div className="absolute bottom-[45%] flex items-center justify-center left-[53.7%] right-[45.3%] top-1/2">
        <div className="flex-none rotate-[90deg] size-[15px]">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative text-[#cccccc] text-[12px] text-nowrap whitespace-pre">50</p>
        </div>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute bottom-[45%] contents left-[55.65%] right-[43.35%] top-1/2" data-name="Group">
      <div className="absolute bottom-[45%] flex items-center justify-center left-[55.65%] right-[43.35%] top-1/2">
        <div className="flex-none rotate-[90deg] size-[15px]">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative text-[#cccccc] text-[12px] text-nowrap whitespace-pre">75</p>
        </div>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute bottom-[43%] contents left-[57.59%] right-[41.4%] top-1/2" data-name="Group">
      <div className="absolute bottom-[43%] flex items-center justify-center left-[57.59%] right-[41.4%] top-1/2">
        <div className="flex-none h-[15px] rotate-[90deg] w-[21px]">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative text-[#cccccc] text-[12px] text-nowrap whitespace-pre">100</p>
        </div>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute bottom-[43%] contents left-[49.8%] right-[41.4%] top-1/2" data-name="Group">
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute bottom-[43%] contents left-[49.8%] right-[41.4%] top-1/2" data-name="Group">
      <div className="absolute bottom-1/2 left-1/2 right-[42.2%] top-1/2" data-name="Vector">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 2">
            <path d="M0 1H116" id="Vector" stroke="var(--stroke-0, #CCCCCC)" />
          </svg>
        </div>
      </div>
      <Group44 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[17.13%_43.79%_15.97%_44.4%]" data-name="Group">
      <div className="absolute inset-[-0.3%_-0.31%_-0.3%_-0.3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 203">
          <g id="Group">
            <path d={svgPaths.p225b0d80} fill="var(--fill-0, #8884D8)" fillOpacity="0.6" id="recharts-radar-:r73:" stroke="var(--stroke-0, #8884D8)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[17.13%_43.79%_15.97%_44.4%]" data-name="Group">
      <Group46 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[13.27%_43.59%_14.04%_43.79%]" data-name="Group">
      <div className="absolute inset-[-0.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190 220">
          <g id="Group">
            <path d={svgPaths.p3fe03100} fill="var(--fill-0, #82CA9D)" fillOpacity="0.3" id="recharts-radar-:r74:" stroke="var(--stroke-0, #82CA9D)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[13.27%_43.59%_14.04%_43.79%]" data-name="Group">
      <Group48 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[1488px]" data-name="Icon">
      <Group30 />
      <Group38 />
      <Group45 />
      <Group47 />
      <Group49 />
    </div>
  );
}

function CardContent5() {
  return (
    <div className="absolute h-[300px] left-[25px] top-[95px] w-[1488px]" data-name="CardContent">
      <Icon12 />
    </div>
  );
}

function Card5() {
  return (
    <div className="[grid-area:1_/_2] bg-neutral-950 relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader5 />
      <CardContent5 />
    </div>
  );
}

function UnifiedDashboard12() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[420px] relative shrink-0 w-full" data-name="UnifiedDashboard">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1b43e7f0} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 18.3333V10" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2eca8c80} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.25 3.55835L13.75 7.85002" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[972.656px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[972.656px]">
        <Icon13 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[28px] not-italic text-[16px] text-neutral-50 text-nowrap top-0 whitespace-pre">ERP Status</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[88.156px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">System Health</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[27.359px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">98%</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container10() {
  return <div className="bg-neutral-50 h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="bg-[rgba(250,250,250,0.2)] box-border content-stretch flex flex-col h-[8px] items-start overflow-clip pr-[19.453px] py-0 relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container10 />
    </div>
  );
}

function UnifiedDashboard13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[972.656px]" data-name="UnifiedDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start relative w-[972.656px]">
        <Container9 />
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex flex-col gap-[30px] h-[136px] items-start left-0 pl-[25px] pr-px py-[25px] rounded-[14px] top-0 w-[1022.66px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle6 />
      <UnifiedDashboard13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_195_765)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p240d7000} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25499600} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_195_765">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[972.672px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[972.672px]">
        <Icon14 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[28px] not-italic text-[16px] text-neutral-50 text-nowrap top-0 whitespace-pre">CRM Performance</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[102.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[102.266px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Lead Conversion</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[27.047px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">87%</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container12() {
  return <div className="bg-neutral-50 h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv1() {
  return (
    <div className="bg-[rgba(250,250,250,0.2)] box-border content-stretch flex flex-col h-[8px] items-start overflow-clip pr-[126.447px] py-0 relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container12 />
    </div>
  );
}

function UnifiedDashboard14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[972.672px]" data-name="UnifiedDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start relative w-[972.672px]">
        <Container11 />
        <PrimitiveDiv1 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex flex-col gap-[30px] h-[136px] items-start left-[1038.66px] pl-[25px] pr-px py-[25px] rounded-[14px] top-0 w-[1022.67px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle7 />
      <UnifiedDashboard14 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_195_871)" id="Icon">
          <path d="M10 15V4.16667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p28aa85e0} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3a49ed00} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pa844680} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p127b9d00} id="Vector_5" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c481540} id="Vector_6" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p222ade80} id="Vector_7" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2ee2680} id="Vector_8" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_195_871">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CardTitle8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[972.672px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[972.672px]">
        <Icon15 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[28px] not-italic text-[16px] text-neutral-50 text-nowrap top-0 whitespace-pre">AI/ML Engine</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[98.688px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Model Accuracy</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[27.656px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">94%</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container14() {
  return <div className="bg-neutral-50 h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv2() {
  return (
    <div className="bg-[rgba(250,250,250,0.2)] box-border content-stretch flex flex-col h-[8px] items-start overflow-clip pr-[58.36px] py-0 relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container14 />
    </div>
  );
}

function UnifiedDashboard15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[972.672px]" data-name="UnifiedDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-full items-start relative w-[972.672px]">
        <Container13 />
        <PrimitiveDiv2 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex flex-col gap-[30px] h-[136px] items-start left-[2077.33px] pl-[25px] pr-px py-[25px] rounded-[14px] top-0 w-[1022.67px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-neutral-800 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle8 />
      <UnifiedDashboard15 />
    </div>
  );
}

function UnifiedDashboard16() {
  return (
    <div className="h-[136px] relative shrink-0 w-full" data-name="UnifiedDashboard">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function TabPanel() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[3100px]" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-full items-start relative w-[3100px]">
        <UnifiedDashboard12 />
        <UnifiedDashboard16 />
      </div>
    </div>
  );
}

function PrimitiveDiv3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[656px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <TabPanel />
    </div>
  );
}

function UnifiedDashboard17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[914px] items-start relative shrink-0 w-full" data-name="UnifiedDashboard">
      <Container7 />
      <Container8 />
      <PrimitiveDiv3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(15,23,43,0.95)] h-[964px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[964px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <UnifiedDashboard17 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[1072px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[1072px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container3 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[944px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[944px] items-start pl-0 pr-[15px] py-0 relative w-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex h-[944px] items-start left-0 top-0 w-[3469px]" data-name="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function SidebarTrigger() {
  return (
    <div className="absolute content-stretch flex items-start left-[293.5px] overflow-clip size-px top-[41.5px]" data-name="SidebarTrigger">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Toggle Sidebar</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[24px] left-0 top-[-20000px] w-[8.625px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-gradient-to-r from-[#2b7fff] relative rounded-[10px] shrink-0 size-[40px] to-[#9810fa]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-50 text-nowrap top-[-2px] whitespace-pre">OVERWATCH</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap whitespace-pre">Business Intelligence Platform</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[40px] relative shrink-0 w-[157.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[157.594px]">
        <Heading3 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function OverwatchSidebar() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[223px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-full items-center relative w-[223px]">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="h-[73px] relative shrink-0 w-[255px]" data-name="SidebarHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[73px] items-start pb-[17px] pl-[16px] pr-0 pt-[16px] relative w-[255px]">
        <OverwatchSidebar />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_195_757)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p31d5da00} id="Vector_2" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 6H11" id="Vector_3" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_195_757">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[82.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[82.781px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap whitespace-pre">EN | ES Support</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon17 />
      <Text17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_195_805)" id="Icon">
          <path d={svgPaths.p689b810} id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_195_805">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[106.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[106.797px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap whitespace-pre">AI/ML Engine Active</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon18 />
      <Text18 />
    </div>
  );
}

function OverwatchSidebar1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[69px] items-start left-0 pb-0 pt-[17px] px-[16px] top-[802px] w-[255px]" data-name="OverwatchSidebar">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <Container19 />
      <Container20 />
    </div>
  );
}

function SidebarGroupLabel() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center px-[8px] py-0 relative w-[239px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Core ERP</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[118.844px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[118.844px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Unified Dashboard</p>
      </div>
    </div>
  );
}

function SidebarMenuButton() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[rgba(43,127,255,0.2)] gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] to-[rgba(152,16,250,0.2)] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon19 />
      <OverwatchSidebar2 />
    </div>
  );
}

function SidebarMenuItem() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2bb95e00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14df0fc0} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 2.84667L11 6.28" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.188px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[58.188px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Inventory</p>
      </div>
    </div>
  );
}

function SidebarMenuButton1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon20 />
      <OverwatchSidebar3 />
    </div>
  );
}

function SidebarMenuItem1() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton1 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_195_723)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ec07880} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_195_723">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverwatchSidebar4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.891px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[91.891px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">{`Sales & Orders`}</p>
      </div>
    </div>
  );
}

function SidebarMenuButton2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon21 />
      <OverwatchSidebar4 />
    </div>
  );
}

function SidebarMenuItem2() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton2 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3baa1080} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65.672px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[65.672px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Customers</p>
      </div>
    </div>
  );
}

function SidebarMenuButton3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon22 />
      <OverwatchSidebar5 />
    </div>
  );
}

function SidebarMenuItem3() {
  return (
    <div className="absolute h-[32px] left-0 top-[108px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton3 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2d50f500} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p32887f80} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.328px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[66.328px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Employees</p>
      </div>
    </div>
  );
}

function SidebarMenuButton4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon23 />
      <OverwatchSidebar6 />
    </div>
  );
}

function SidebarMenuItem4() {
  return (
    <div className="absolute h-[32px] left-0 top-[144px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton4 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 1.33333V14.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5120400} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.578px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[53.578px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Financial</p>
      </div>
    </div>
  );
}

function SidebarMenuButton5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon24 />
      <OverwatchSidebar7 />
    </div>
  );
}

function SidebarMenuItem5() {
  return (
    <div className="absolute h-[32px] left-0 top-[180px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton5 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.281px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[47.281px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Reports</p>
      </div>
    </div>
  );
}

function SidebarMenuButton6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon25 />
      <OverwatchSidebar8 />
    </div>
  );
}

function SidebarMenuItem6() {
  return (
    <div className="absolute h-[32px] left-0 top-[216px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton6 />
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[239px]">
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

function SidebarGroup() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[296px] items-start left-0 pl-[8px] pr-0 py-[8px] top-0 w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel />
      <SidebarMenu />
    </div>
  );
}

function SidebarGroupLabel1() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center px-[8px] py-0 relative w-[239px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Enterprise Systems</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_195_708)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_195_708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverwatchSidebar9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.266px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[64.266px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">CRM Suite</p>
      </div>
    </div>
  );
}

function SidebarMenuButton7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon26 />
      <OverwatchSidebar9 />
    </div>
  );
}

function SidebarMenuItem7() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton7 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3155f180} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pea6a680} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[78.313px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[78.313px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">EPM Finance</p>
      </div>
    </div>
  );
}

function SidebarMenuButton8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon27 />
      <OverwatchSidebar10 />
    </div>
  );
}

function SidebarMenuItem8() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton8 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_195_770)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_195_770">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverwatchSidebar11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.094px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[70.094px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">HCM F-500</p>
      </div>
    </div>
  );
}

function SidebarMenuButton9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon28 />
      <OverwatchSidebar11 />
    </div>
  );
}

function SidebarMenuItem9() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton9 />
    </div>
  );
}

function SidebarMenu1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[239px]">
        <SidebarMenuItem7 />
        <SidebarMenuItem8 />
        <SidebarMenuItem9 />
      </div>
    </div>
  );
}

function SidebarGroup1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[152px] items-start left-0 pl-[8px] pr-0 py-[8px] top-[304px] w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel1 />
      <SidebarMenu1 />
    </div>
  );
}

function SidebarGroupLabel2() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center px-[8px] py-0 relative w-[239px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">{`Intelligence & Advisory`}</p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_195_827)" id="Icon">
          <path d="M8 12V3.33333" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3b97c700} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3fbf6000} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pec8c600} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p24a41580} id="Vector_5" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p321dcde0} id="Vector_6" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19ff680} id="Vector_7" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2b9c4000} id="Vector_8" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_195_827">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverwatchSidebar12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.094px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[83.094px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">AI/ML Engine</p>
      </div>
    </div>
  );
}

function SidebarMenuButton10() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon29 />
      <OverwatchSidebar12 />
    </div>
  );
}

function SidebarMenuItem10() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton10 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c647980} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13d22180} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.406px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[109.406px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Advisory Business</p>
      </div>
    </div>
  );
}

function SidebarMenuButton11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon30 />
      <OverwatchSidebar13 />
    </div>
  );
}

function SidebarMenuItem11() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton11 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2dea3900} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p347c4e00} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverwatchSidebar14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.031px]" data-name="OverwatchSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start overflow-clip relative rounded-[inherit] w-[112.031px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Business Elements</p>
      </div>
    </div>
  );
}

function SidebarMenuButton12() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] pr-0 py-0 rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon31 />
      <OverwatchSidebar14 />
    </div>
  );
}

function SidebarMenuItem12() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton12 />
    </div>
  );
}

function SidebarMenu2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[239px]">
        <SidebarMenuItem10 />
        <SidebarMenuItem11 />
        <SidebarMenuItem12 />
      </div>
    </div>
  );
}

function SidebarGroup2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[152px] items-start left-0 pl-[8px] pr-0 py-[8px] top-[464px] w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel2 />
      <SidebarMenu2 />
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[255px]" data-name="SidebarContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[255px]">
        <OverwatchSidebar1 />
        <SidebarGroup />
        <SidebarGroup1 />
        <SidebarGroup2 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 bg-neutral-900 grow h-[944px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[944px] items-start relative w-full">
        <SidebarHeader />
        <SidebarContent />
      </div>
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="absolute bg-[rgba(23,23,23,0.9)] box-border content-stretch flex h-[944px] items-start left-0 pl-0 pr-px py-0 top-0 w-[256px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-neutral-800 border-solid inset-0 pointer-events-none" />
      <Container21 />
    </div>
  );
}

export default function ErpSystemDevelopment() {
  return (
    <div className="bg-neutral-950 relative size-full" data-name="ERP System Development">
      <App />
      <SidebarTrigger />
      <Text16 />
      <Sidebar1 />
    </div>
  );
}