import svgPaths from "./svg-j8hqzkdakf";
import imgImageWithFallback from "figma:asset/57e98f4ab891889527270818600f25c01460be01.png";
import imgImageWithFallback1 from "figma:asset/25601bea57de09978e36384f75be3733c9a3a805.png";
import imgImageWithFallback2 from "figma:asset/ef1de2d394b8cd8dc9cb9cf5276c1f07a6bf014c.png";
import imgImageWithFallback3 from "figma:asset/c62ee00001b8f20e88a938d7c1e3ba073f3921bf.png";
import imgImageWithFallback4 from "figma:asset/1da7e84aa520c154edbe511fb00866cd1c7d508a.png";
import imgImageWithFallback5 from "figma:asset/9d9f172bca1de53caae9362dd2ab3c331a8167dd.png";
import imgImageWithFallback6 from "figma:asset/268988d9185d5e46dcf8fabf24bafe6a4388c055.png";
import imgImageWithFallback7 from "figma:asset/6100fb5bd141b5b79013ba8d4b41b605993d95ca.png";
import imgPrimitiveImg from "figma:asset/4342e09cd01f340e942ef66b435317f36b2be13d.png";

function Heading2() {
  return (
    <div className="content-stretch flex h-[24.5px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Arimo:Bold',_sans-serif] font-bold grow leading-[24.5px] min-h-px min-w-px relative shrink-0 text-[17.5px] text-white">Overwatch Strategic Training Modules</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">Strategic HR Foundations</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">From Cost Center to Command Center</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] left-0 text-[#c27aff] text-[10.5px] top-[-1px] w-[180px]">Recommandé par Overwatch Academy</p>
    </div>
  );
}

function ModuleCard() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[70px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading3 />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">8 leçons</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon1 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">4h 30min</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function ModuleCard1() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[317.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard1 />
      <Button />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container3() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1648)" id="Icon">
            <path d={svgPaths.p11e3e540} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1648" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1648" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1648" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container5() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container3 />
      <Icon2 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container2 />
      <Container6 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.pdd36f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function ModuleCard2() {
  return (
    <div className="h-[14px] relative shrink-0 w-[44.703px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[44.703px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">Unlocked</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#2b7fff] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[78.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[78.203px]">
        <Icon3 />
        <ModuleCard2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[rgba(106,114,130,0.2)] h-[19.5px] left-[85.2px] rounded-[6.75px] top-0 w-[58.719px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[58.719px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#99a1af] text-[10.5px] text-nowrap whitespace-pre">Beginner</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(106,114,130,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[143.922px]" data-name="Container">
      <Badge />
      <Badge1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[8px] size-[10.5px] top-[4.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1645)" id="Icon">
          <path d={svgPaths.p3cf66c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1645">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[19.5px] left-[704.11px] rounded-[6.75px] to-[#f6339a] top-[11.5px] w-[65.141px]" data-name="Badge">
      <div className="h-[19.5px] overflow-clip relative rounded-[inherit] w-[65.141px]">
        <Icon4 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] left-[25.5px] text-[10.5px] text-nowrap text-white top-[1.75px] whitespace-pre">Promu</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function ModuleCard3() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback />
      <Container1 />
      <Container7 />
      <Container8 />
      <Badge2 />
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard />
        <CardContent />
        <ModuleCard3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">Business Lifecycle Framework</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Strategic HCM Through Growth Stages</p>
    </div>
  );
}

function ModuleCard4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading6 />
      <Paragraph2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon5 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">6 leçons</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon6 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">3h 45min</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function ModuleCard5() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container9 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard5 />
      <Button1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container10() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container12() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1648)" id="Icon">
            <path d={svgPaths.p11e3e540} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1648" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1648" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1648" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container13() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container14() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container12 />
      <Icon7 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container11 />
      <Container15 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.pdd36f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function ModuleCard6() {
  return (
    <div className="h-[14px] relative shrink-0 w-[44.703px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[44.703px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">Unlocked</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#2b7fff] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[78.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[78.203px]">
        <Icon8 />
        <ModuleCard6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[rgba(106,114,130,0.2)] h-[19.5px] left-[85.2px] rounded-[6.75px] top-0 w-[77.125px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[77.125px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#99a1af] text-[10.5px] text-nowrap whitespace-pre">Intermediate</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(106,114,130,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[162.328px]" data-name="Container">
      <Badge3 />
      <Badge4 />
    </div>
  );
}

function ModuleCard7() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback1 />
      <Container10 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard4 />
        <CardContent1 />
        <ModuleCard7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">Industry-Specific HCM Challenges</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">{`Manufacturing, Engineering & Professional Services`}</p>
    </div>
  );
}

function ModuleCard8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading7 />
      <Paragraph3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon9 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[51px]">10 leçons</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[68.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[68.063px]">
        <Icon10 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">6h 20min</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[150.484px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function ModuleCard9() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container18 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard9 />
      <Button2 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container19() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container21() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon11() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1648)" id="Icon">
            <path d={svgPaths.p11e3e540} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1648" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1648" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1648" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container22() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container23() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container24() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container21 />
      <Icon11 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container20 />
      <Container24 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.pdd36f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function ModuleCard10() {
  return (
    <div className="h-[14px] relative shrink-0 w-[44.703px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[44.703px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">Unlocked</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[#2b7fff] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[78.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[78.203px]">
        <Icon12 />
        <ModuleCard10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[rgba(106,114,130,0.2)] h-[19.5px] left-[85.2px] rounded-[6.75px] top-0 w-[77.125px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[77.125px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#99a1af] text-[10.5px] text-nowrap whitespace-pre">Intermediate</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(106,114,130,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[162.328px]" data-name="Container">
      <Badge5 />
      <Badge6 />
    </div>
  );
}

function ModuleCard11() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback2 />
      <Container19 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard8 />
        <CardContent2 />
        <ModuleCard11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">Company Type Profiles</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">{`VC, PE, Family & Entrepreneur-Led Strategies`}</p>
    </div>
  );
}

function ModuleCard12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading8 />
      <Paragraph4 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon13 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">7 leçons</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon14 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">4h 15min</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function ModuleCard13() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container27 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard13 />
      <Button3 />
    </div>
  );
}

function ImageErrorLoadingImage() {
  return <div className="absolute left-[345.88px] size-[88px] top-[40px]" data-name="Image (Error loading image)" />;
}

function ImageWithFallback3() {
  return (
    <div className="absolute bg-gray-100 h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <ImageErrorLoadingImage />
    </div>
  );
}

function Container28() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container29() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container30() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon15() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1648)" id="Icon">
            <path d={svgPaths.p11e3e540} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1648" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1648" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1648" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container31() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container32() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container33() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container30 />
      <Icon15 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container29 />
      <Container33 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.pdd36f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function ModuleCard14() {
  return (
    <div className="h-[14px] relative shrink-0 w-[44.703px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[44.703px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">Unlocked</p>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#2b7fff] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[78.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[78.203px]">
        <Icon16 />
        <ModuleCard14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[rgba(106,114,130,0.2)] h-[19.5px] left-[85.2px] rounded-[6.75px] top-0 w-[77.125px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[77.125px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#99a1af] text-[10.5px] text-nowrap whitespace-pre">Intermediate</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(106,114,130,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[162.328px]" data-name="Container">
      <Badge7 />
      <Badge8 />
    </div>
  );
}

function ModuleCard15() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback3 />
      <Container28 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Card3() {
  return (
    <div className="[grid-area:1_/_4] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard12 />
        <CardContent3 />
        <ModuleCard15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">{`Risk Management & Compliance`}</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Enterprise Risk to Strategic Protection</p>
    </div>
  );
}

function ModuleCard16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading9 />
      <Paragraph5 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon17 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">8 leçons</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon18 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">5h 10min</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function ModuleCard17() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container36 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard17 />
      <Button4 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container37() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container38() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container39() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon19() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1657)" id="Icon">
            <path d={svgPaths.p3f7a3800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1657" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1657" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1657" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container40() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container41() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container42() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container39 />
      <Icon19 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container38 />
      <Container42 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon">
          <path d={svgPaths.p36247a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function ModuleCard18() {
  return (
    <div className="h-[14px] relative shrink-0 w-[44.703px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[44.703px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">Unlocked</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[#2b7fff] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[78.203px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[78.203px]">
        <Icon20 />
        <ModuleCard18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-[rgba(106,114,130,0.2)] h-[19.5px] left-[85.2px] rounded-[6.75px] top-0 w-[62.984px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[62.984px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#99a1af] text-[10.5px] text-nowrap whitespace-pre">Advanced</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(106,114,130,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[148.188px]" data-name="Container">
      <Badge9 />
      <Badge10 />
    </div>
  );
}

function ModuleCard19() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback4 />
      <Container37 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Card4() {
  return (
    <div className="[grid-area:2_/_1] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard16 />
        <CardContent4 />
        <ModuleCard19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">Culture as Strategic Lever</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Design vs Default Culture Engineering</p>
    </div>
  );
}

function ModuleCard20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading10 />
      <Paragraph6 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon21 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">9 leçons</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon22 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">5h 30min</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function ModuleCard21() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container45 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard21 />
      <Button5 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Container46() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container47() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container48() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon23() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1657)" id="Icon">
            <path d={svgPaths.p3f7a3800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1657" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1657" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1657" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container49() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container50() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container48 />
      <Icon23 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container47 />
      <Container51 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1530)" id="Icon">
          <path d={svgPaths.p155b3880} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p61a180} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1530">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ModuleCard22() {
  return (
    <div className="h-[14px] relative shrink-0 w-[46.906px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[46.906px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">To Unlock</p>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[#4a5565] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[80.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[80.406px]">
        <Icon24 />
        <ModuleCard22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.2)] h-[19.5px] left-[87.41px] rounded-[6.75px] top-0 w-[46.594px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[46.594px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#ff6467] text-[10.5px] text-nowrap whitespace-pre">Expert</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[134px]" data-name="Container">
      <Badge11 />
      <Badge12 />
    </div>
  );
}

function ModuleCard23() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback5 />
      <Container46 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Card5() {
  return (
    <div className="[grid-area:2_/_2] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard20 />
        <CardContent5 />
        <ModuleCard23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">{`Stakeholder Psychology & Engagement`}</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Understanding Decision-Making Archetypes</p>
    </div>
  );
}

function ModuleCard24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading11 />
      <Paragraph7 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon25 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">7 leçons</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon26 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">4h 20min</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function ModuleCard25() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container54 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard25 />
      <Button6 />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Container55() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container56() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container57() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon27() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1657)" id="Icon">
            <path d={svgPaths.p3f7a3800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1657" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1657" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1657" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container58() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container59() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container60() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container57 />
      <Icon27 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container56 />
      <Container60 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1530)" id="Icon">
          <path d={svgPaths.p155b3880} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p61a180} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1530">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ModuleCard26() {
  return (
    <div className="h-[14px] relative shrink-0 w-[46.906px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[46.906px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">To Unlock</p>
      </div>
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-[#4a5565] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[80.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[80.406px]">
        <Icon28 />
        <ModuleCard26 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge14() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.2)] h-[19.5px] left-[87.41px] rounded-[6.75px] top-0 w-[46.594px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[46.594px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#ff6467] text-[10.5px] text-nowrap whitespace-pre">Expert</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[134px]" data-name="Container">
      <Badge13 />
      <Badge14 />
    </div>
  );
}

function ModuleCard27() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback6 />
      <Container55 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Card6() {
  return (
    <div className="[grid-area:2_/_3] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard24 />
        <CardContent6 />
        <ModuleCard27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">{`HCM Technology & AI Integration`}</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Technology as Strategy Amplifier</p>
    </div>
  );
}

function ModuleCard28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading12 />
      <Paragraph8 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon29 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">8 leçons</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon30 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">5h 45min</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function ModuleCard29() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container63 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard29 />
      <Button7 />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container64() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container65() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container66() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon31() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1657)" id="Icon">
            <path d={svgPaths.p3f7a3800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1657" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1657" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1657" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container67() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container68() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container69() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container66 />
      <Icon31 />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container65 />
      <Container69 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1530)" id="Icon">
          <path d={svgPaths.p155b3880} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p61a180} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1530">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ModuleCard30() {
  return (
    <div className="h-[14px] relative shrink-0 w-[46.906px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[46.906px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">To Unlock</p>
      </div>
    </div>
  );
}

function Badge15() {
  return (
    <div className="absolute bg-[#4a5565] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[80.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[80.406px]">
        <Icon32 />
        <ModuleCard30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge16() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.2)] h-[19.5px] left-[87.41px] rounded-[6.75px] top-0 w-[46.594px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[46.594px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#ff6467] text-[10.5px] text-nowrap whitespace-pre">Expert</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[134px]" data-name="Container">
      <Badge15 />
      <Badge16 />
    </div>
  );
}

function ModuleCard31() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback7 />
      <Container64 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Card7() {
  return (
    <div className="[grid-area:2_/_4] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard28 />
        <CardContent7 />
        <ModuleCard31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">{`ROI & Financial Impact`}</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Demonstrating Human Capital Value</p>
    </div>
  );
}

function ModuleCard32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading13 />
      <Paragraph9 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon33 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">6 leçons</p>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon34 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">4h 20min</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function ModuleCard33() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container72 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard33 />
      <Button8 />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Container73() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container74() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container75() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon35() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1657)" id="Icon">
            <path d={svgPaths.p3f7a3800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1657" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1657" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1657" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container76() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container77() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container78() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container75 />
      <Icon35 />
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container74 />
      <Container78 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1530)" id="Icon">
          <path d={svgPaths.p155b3880} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p61a180} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1530">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ModuleCard34() {
  return (
    <div className="h-[14px] relative shrink-0 w-[46.906px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[46.906px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">To Unlock</p>
      </div>
    </div>
  );
}

function Badge17() {
  return (
    <div className="absolute bg-[#4a5565] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[80.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[80.406px]">
        <Icon36 />
        <ModuleCard34 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge18() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.2)] h-[19.5px] left-[87.41px] rounded-[6.75px] top-0 w-[46.594px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[46.594px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#ff6467] text-[10.5px] text-nowrap whitespace-pre">Expert</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[134px]" data-name="Container">
      <Badge17 />
      <Badge18 />
    </div>
  );
}

function ModuleCard35() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback8 />
      <Container73 />
      <Container79 />
      <Container80 />
    </div>
  );
}

function Card8() {
  return (
    <div className="[grid-area:3_/_1] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard32 />
        <CardContent8 />
        <ModuleCard35 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">{`M&A Human Capital Strategy`}</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Value Creation Through Transactions</p>
    </div>
  );
}

function ModuleCard36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading14 />
      <Paragraph10 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon37 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">8 leçons</p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon38 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">5h 15min</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function ModuleCard37() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container81 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard37 />
      <Button9 />
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container82() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container83() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container84() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon39() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1657)" id="Icon">
            <path d={svgPaths.p3f7a3800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1657" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1657" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1657" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container85() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container86() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container87() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container84 />
      <Icon39 />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container83 />
      <Container87 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1530)" id="Icon">
          <path d={svgPaths.p155b3880} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p61a180} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1530">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ModuleCard38() {
  return (
    <div className="h-[14px] relative shrink-0 w-[46.906px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[46.906px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">To Unlock</p>
      </div>
    </div>
  );
}

function Badge19() {
  return (
    <div className="absolute bg-[#4a5565] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[80.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[80.406px]">
        <Icon40 />
        <ModuleCard38 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge20() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.2)] h-[19.5px] left-[87.41px] rounded-[6.75px] top-0 w-[46.594px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[46.594px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#ff6467] text-[10.5px] text-nowrap whitespace-pre">Expert</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[134px]" data-name="Container">
      <Badge19 />
      <Badge20 />
    </div>
  );
}

function ModuleCard39() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback9 />
      <Container82 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function Card9() {
  return (
    <div className="[grid-area:3_/_2] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard36 />
        <CardContent9 />
        <ModuleCard39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">{`Future of Work & Adaptability`}</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Building Organizational Resilience</p>
    </div>
  );
}

function ModuleCard40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading15 />
      <Paragraph11 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[61.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[61.813px]">
        <Icon41 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[45px]">7 leçons</p>
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon42 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">4h 45min</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[143.875px]" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function ModuleCard41() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container90 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard41 />
      <Button10 />
    </div>
  );
}

function ImageWithFallback10() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
    </div>
  );
}

function Container91() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container92() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container93() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon43() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1657)" id="Icon">
            <path d={svgPaths.p3f7a3800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1657" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1657" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1657" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container94() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container95() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container96() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container93 />
      <Icon43 />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container92 />
      <Container96 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1530)" id="Icon">
          <path d={svgPaths.p155b3880} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p61a180} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1530">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ModuleCard42() {
  return (
    <div className="h-[14px] relative shrink-0 w-[46.906px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[46.906px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">To Unlock</p>
      </div>
    </div>
  );
}

function Badge21() {
  return (
    <div className="absolute bg-[#4a5565] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[80.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[80.406px]">
        <Icon44 />
        <ModuleCard42 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge22() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.2)] h-[19.5px] left-[87.41px] rounded-[6.75px] top-0 w-[46.594px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[46.594px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#ff6467] text-[10.5px] text-nowrap whitespace-pre">Expert</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[134px]" data-name="Container">
      <Badge21 />
      <Badge22 />
    </div>
  );
}

function ModuleCard43() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback10 />
      <Container91 />
      <Container97 />
      <Container98 />
    </div>
  );
}

function Card10() {
  return (
    <div className="[grid-area:3_/_3] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard40 />
        <CardContent10 />
        <ModuleCard43 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">Implementation Roadmap</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">24-Month Strategic Transformation</p>
    </div>
  );
}

function ModuleCard44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[49px] items-start left-[22px] top-[211px] w-[737.75px]" data-name="ModuleCard">
      <Heading16 />
      <Paragraph12 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ac5b180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2e981000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-full">
        <Icon45 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] top-[-2px] w-[51px]">12 leçons</p>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1575)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pc012c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1575">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[68.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[68.063px]">
        <Icon46 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[17.5px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">8h 30min</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[17.5px] items-center left-0 top-0 w-[150.484px]" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function ModuleCard45() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="ModuleCard">
      <Container99 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[731.14px] text-[#99a1af] text-[12.25px] text-nowrap top-[-2px] whitespace-pre">0</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#e79c1c] h-[31.5px] relative rounded-[6.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[12.25px] text-black">Unlock - €250</p>
        </div>
      </div>
    </div>
  );
}

function CardContent11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[84px] items-start left-px px-[21px] py-0 top-[296.75px] w-[779.75px]" data-name="CardContent">
      <ModuleCard45 />
      <Button11 />
    </div>
  );
}

function ImageWithFallback11() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container100() {
  return <div className="absolute h-[168px] left-0 top-0 w-[779.75px]" data-name="Container" />;
}

function Container101() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur filter left-0 opacity-[0.998] rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container" />;
}

function Container102() {
  return <div className="absolute left-[4.5px] rounded-[3.35544e+07px] size-[61px] top-[4.5px]" data-name="Container" />;
}

function Icon47() {
  return (
    <div className="absolute left-[22.75px] size-[28px] top-[21px]" data-name="Icon">
      <div className="absolute inset-[-5.95%_-20.24%_-34.53%_-11.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 40">
          <g filter="url(#filter0_d_242_1657)" id="Icon">
            <path d={svgPaths.p3f7a3800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_d_242_1657" width="44" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_242_1657" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_242_1657" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container103() {
  return <div className="absolute left-px opacity-60 rounded-[3.35544e+07px] size-[68px] top-px" data-name="Container" />;
}

function Container104() {
  return <div className="absolute bg-[rgba(255,255,255,0)] left-px rounded-[3.35544e+07px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] size-[68px] top-px" data-name="Container" />;
}

function Container105() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[3.35544e+07px] size-[70px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container102 />
      <Icon47 />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute left-[354.88px] size-[70px] top-[49px]" data-name="Container">
      <Container101 />
      <Container105 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1530)" id="Icon">
          <path d={svgPaths.p155b3880} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p61a180} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1530">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ModuleCard46() {
  return (
    <div className="h-[14px] relative shrink-0 w-[46.906px]" data-name="ModuleCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start relative w-[46.906px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">To Unlock</p>
      </div>
    </div>
  );
}

function Badge23() {
  return (
    <div className="absolute bg-[#4a5565] h-[19.5px] left-0 rounded-[6.75px] top-0 w-[80.406px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[7px] h-[19.5px] items-center justify-center overflow-clip p-px relative rounded-[inherit] w-[80.406px]">
        <Icon48 />
        <ModuleCard46 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Badge24() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.2)] h-[19.5px] left-[87.41px] rounded-[6.75px] top-0 w-[46.594px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[46.594px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#ff6467] text-[10.5px] text-nowrap whitespace-pre">Expert</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[19.5px] left-[10.5px] top-[10.5px] w-[134px]" data-name="Container">
      <Badge23 />
      <Badge24 />
    </div>
  );
}

function ModuleCard47() {
  return (
    <div className="absolute h-[168px] left-px overflow-clip top-px w-[779.75px]" data-name="ModuleCard">
      <ImageWithFallback11 />
      <Container100 />
      <Container106 />
      <Container107 />
    </div>
  );
}

function Card11() {
  return (
    <div className="[grid-area:3_/_4] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ModuleCard44 />
        <CardContent11 />
        <ModuleCard47 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Container108() {
  return (
    <div className="gap-[21px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[402.75px_381.75px_minmax(0px,_1fr)] h-[1208.25px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[1246.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container108 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex h-[24.5px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Arimo:Bold',_sans-serif] font-bold grow leading-[24.5px] min-h-px min-w-px relative shrink-0 text-[17.5px] text-white">Mon espace membre</p>
    </div>
  );
}

function Icon49() {
  return (
    <div className="absolute left-[375.88px] size-[28px] top-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p275e0300} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3997a780} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function MemberSpace() {
  return (
    <div className="absolute h-[28px] left-[21px] top-[56px] w-[737.75px]" data-name="MemberSpace">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-[368.95px] text-[21px] text-center text-white top-[-2px] translate-x-[-50%] w-[40px]">25%</p>
    </div>
  );
}

function MemberSpace1() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[21px] top-[87.5px] w-[737.75px]" data-name="MemberSpace">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12.25px] text-center">Progression globale</p>
    </div>
  );
}

function CardContent12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[779.75px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[779.75px]">
        <Icon49 />
        <MemberSpace />
        <MemberSpace1 />
      </div>
    </div>
  );
}

function Card12() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start p-px relative rounded-[12.75px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(43,127,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent12 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="absolute left-[375.88px] size-[28px] top-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p16ff480} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3c16f780} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function MemberSpace2() {
  return (
    <div className="absolute h-[28px] left-[21px] top-[56px] w-[737.75px]" data-name="MemberSpace">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-[369.3px] text-[21px] text-center text-white top-[-2px] translate-x-[-50%] w-[43px]">8/32</p>
    </div>
  );
}

function MemberSpace3() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[21px] top-[87.5px] w-[737.75px]" data-name="MemberSpace">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12.25px] text-center">Modules completed</p>
    </div>
  );
}

function CardContent13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[779.75px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[779.75px]">
        <Icon50 />
        <MemberSpace2 />
        <MemberSpace3 />
      </div>
    </div>
  );
}

function Card13() {
  return (
    <div className="[grid-area:1_/_2] box-border content-stretch flex flex-col items-start p-px relative rounded-[12.75px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,211,242,0.3)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent13 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="absolute left-[375.88px] size-[28px] top-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 7V14L18.6667 16.3333" id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1fa66600} id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function MemberSpace4() {
  return (
    <div className="absolute h-[28px] left-[21px] top-[56px] w-[737.75px]" data-name="MemberSpace">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[28px] left-[369.11px] text-[21px] text-center text-white top-[-2px] translate-x-[-50%] w-[35px]">45h</p>
    </div>
  );
}

function MemberSpace5() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[21px] top-[87.5px] w-[737.75px]" data-name="MemberSpace">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12.25px] text-center">{`Temps d'apprentissage`}</p>
    </div>
  );
}

function CardContent14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[779.75px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[779.75px]">
        <Icon51 />
        <MemberSpace4 />
        <MemberSpace5 />
      </div>
    </div>
  );
}

function Card14() {
  return (
    <div className="[grid-area:1_/_3] box-border content-stretch flex flex-col items-start p-px relative rounded-[12.75px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(173,70,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent14 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="absolute left-[375.88px] size-[28px] top-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1c8f0d00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p4cb2400} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function MemberSpace6() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[21px] top-[56px] w-[737.75px]" data-name="MemberSpace">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-center text-white">3</p>
    </div>
  );
}

function MemberSpace7() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[21px] top-[87.5px] w-[737.75px]" data-name="MemberSpace">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#d1d5dc] text-[12.25px] text-center">Certificats obtenus</p>
    </div>
  );
}

function CardContent15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[779.75px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[779.75px]">
        <Icon52 />
        <MemberSpace6 />
        <MemberSpace7 />
      </div>
    </div>
  );
}

function Card15() {
  return (
    <div className="[grid-area:1_/_4] box-border content-stretch flex flex-col items-start p-px relative rounded-[12.75px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,201,80,0.3)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardContent15 />
    </div>
  );
}

function Container110() {
  return (
    <div className="gap-[21px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[128px] relative shrink-0 w-full" data-name="Container">
      <Card12 />
      <Card13 />
      <Card14 />
      <Card15 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[14px] relative shrink-0 w-[131.172px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[131.172px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] left-0 text-[14px] text-nowrap text-white top-[-2px] whitespace-pre">Mes modules récents</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[28px] relative rounded-[6.75px] shrink-0 w-[69.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.25px] h-[28px] items-center justify-center px-[10.5px] py-0 relative w-[69.75px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Voir tout</p>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[49px] relative shrink-0 w-[1582.5px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[49px] items-center justify-between px-[21px] py-0 relative w-[1582.5px]">
        <CardTitle />
        <Button12 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[14px] text-nowrap text-white top-[-1px] whitespace-pre">SEO Technique Avancé</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">SEO</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[139.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-[139.531px]">
        <Heading4 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Badge25() {
  return (
    <div className="bg-[#00c950] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[68.391px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[68.391px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">Completed</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex h-[38.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container111 />
      <Badge25 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[63.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[63.656px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Progression</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[29.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[29.844px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[12.25px] text-white top-[-2px] w-[30px]">100%</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[#e79c1c] h-[7px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[31.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container113 />
      <PrimitiveDiv />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[50.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[50.563px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">3h 30min</p>
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="absolute left-[9.75px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1571)" id="Icon">
          <path d={svgPaths.p65b1540} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1571">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[rgba(26,26,26,0.3)] h-[28px] relative rounded-[6.75px] shrink-0 w-[77.234px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[77.234px]">
        <Icon53 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[32.5px] text-[#d1d5dc] text-[12.25px] text-nowrap top-[3.25px] whitespace-pre">Revoir</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Button13 />
    </div>
  );
}

function MemberSpace8() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[147px] relative rounded-[8.75px] shrink-0 w-full" data-name="MemberSpace">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[147px] items-start pb-0 pt-[14px] px-[14px] relative w-full">
          <Container112 />
          <Container114 />
          <Container115 />
        </div>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[14px] text-nowrap text-white top-[-1px] whitespace-pre">Copywriting Émotionnel</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Copywriting</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[148.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-[148.641px]">
        <Heading18 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Badge26() {
  return (
    <div className="bg-[#00d3f3] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[69.031px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[69.031px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">In Progress</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex h-[38.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Badge26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[63.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[63.656px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Progression</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[23.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[23.25px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[12.25px] text-white top-[-2px] w-[24px]">65%</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text27 />
      <Text28 />
    </div>
  );
}

function Container119() {
  return <div className="bg-[#e79c1c] h-[7px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv1() {
  return (
    <div className="bg-[#4a5565] box-border content-stretch flex flex-col h-[7px] items-start overflow-clip pr-[529.375px] py-0 relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container119 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[31.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container118 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[50.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[50.563px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">2h 45min</p>
      </div>
    </div>
  );
}

function Icon54() {
  return (
    <div className="absolute left-[9.75px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1d100f00} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[rgba(26,26,26,0.3)] h-[28px] relative rounded-[6.75px] shrink-0 w-[97.297px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[97.297px]">
        <Icon54 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[32.5px] text-[#d1d5dc] text-[12.25px] text-nowrap top-[3.25px] whitespace-pre">Continuer</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text29 />
      <Button14 />
    </div>
  );
}

function MemberSpace9() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[147px] relative rounded-[8.75px] shrink-0 w-full" data-name="MemberSpace">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[147px] items-start pb-0 pt-[14px] px-[14px] relative w-full">
          <Container117 />
          <Container120 />
          <Container121 />
        </div>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[14px] text-nowrap text-white top-[-1px] whitespace-pre">Branding Personnel</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Branding</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[119.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-[119.797px]">
        <Heading19 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Badge27() {
  return (
    <div className="bg-[#00c950] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[68.391px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[68.391px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">Completed</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex h-[38.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container122 />
      <Badge27 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[63.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[63.656px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Progression</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[29.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[29.844px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[12.25px] text-white top-[-2px] w-[30px]">100%</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="bg-[#e79c1c] h-[7px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[31.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container124 />
      <PrimitiveDiv2 />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[50.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[50.563px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">4h 15min</p>
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="absolute left-[9.75px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_242_1571)" id="Icon">
          <path d={svgPaths.p65b1540} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_242_1571">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[rgba(26,26,26,0.3)] h-[28px] relative rounded-[6.75px] shrink-0 w-[77.234px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[77.234px]">
        <Icon55 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[32.5px] text-[#d1d5dc] text-[12.25px] text-nowrap top-[3.25px] whitespace-pre">Revoir</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text32 />
      <Button15 />
    </div>
  );
}

function MemberSpace10() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[147px] relative rounded-[8.75px] shrink-0 w-full" data-name="MemberSpace">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[147px] items-start pb-0 pt-[14px] px-[14px] relative w-full">
          <Container123 />
          <Container125 />
          <Container126 />
        </div>
      </div>
    </div>
  );
}

function CardContent16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1582.5px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[14px] h-full items-start px-[21px] py-0 relative w-[1582.5px]">
        <MemberSpace8 />
        <MemberSpace9 />
        <MemberSpace10 />
      </div>
    </div>
  );
}

function Card16() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1e2939] box-border content-stretch flex flex-col gap-[21px] items-start p-px relative rounded-[12.75px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardHeader />
      <CardContent16 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="absolute left-0 size-[17.5px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p9232d80} id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p7d19b00} id="Vector_2" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p5aeb700} id="Vector_3" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M2.91667 16.0417H14.5833" id="Vector_4" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p10e8ec00} id="Vector_5" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p2e21c280} id="Vector_6" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[17.5px] left-[22px] top-[22px] w-[1540.5px]" data-name="CardTitle">
      <Icon56 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] left-[24.5px] text-[14px] text-nowrap text-white top-[-0.25px] whitespace-pre">Mes certificats</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[28px] relative shrink-0 w-[28.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[28.844px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">🏆</p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[14px] text-nowrap text-white top-[-1px] whitespace-pre">Expert E-commerce</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[#99a1af] text-[12.25px] top-[-2px] w-[131px]">6 modules • 2025-01-15</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Heading20 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[170.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[38.5px] items-center relative w-[170.094px]">
        <Container127 />
        <Container128 />
      </div>
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 8.75V1.75" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p34aacb00} id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p27169580} id="Vector_3" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[rgba(26,26,26,0.3)] h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <Icon57 />
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex h-[38.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container129 />
      <Button16 />
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-gradient-to-r from-[rgba(240,177,0,0.1)] h-[68.5px] relative rounded-[8.75px] shrink-0 to-[rgba(0,211,242,0.1)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(240,177,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[68.5px] items-start pb-px pt-[15px] px-[15px] relative w-full">
          <Container130 />
        </div>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[28px] relative shrink-0 w-[28.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[28.844px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">🎯</p>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[14px] text-nowrap text-white top-[-1px] whitespace-pre">Maître SEO</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[#99a1af] text-[12.25px] top-[-2px] w-[131px]">4 modules • 2025-01-10</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Heading21 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[170.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[38.5px] items-center relative w-[170.094px]">
        <Container132 />
        <Container133 />
      </div>
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 8.75V1.75" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p34aacb00} id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p27169580} id="Vector_3" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[rgba(26,26,26,0.3)] h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <Icon58 />
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex h-[38.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container134 />
      <Button17 />
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-gradient-to-r from-[rgba(240,177,0,0.1)] h-[68.5px] relative rounded-[8.75px] shrink-0 to-[rgba(0,211,242,0.1)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(240,177,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[68.5px] items-start pb-px pt-[15px] px-[15px] relative w-full">
          <Container135 />
        </div>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[28px] relative shrink-0 w-[28.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[28.844px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">✍️</p>
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[14px] text-nowrap text-white top-[-1px] whitespace-pre">Copywriter Certifié</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[#99a1af] text-[12.25px] top-[-2px] w-[131px]">5 modules • 2025-01-05</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Heading22 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[170.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[38.5px] items-center relative w-[170.094px]">
        <Container137 />
        <Container138 />
      </div>
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 8.75V1.75" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p34aacb00} id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p27169580} id="Vector_3" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[rgba(26,26,26,0.3)] h-[28px] relative rounded-[6.75px] shrink-0 w-[33.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center justify-center p-px relative w-[33.5px]">
        <Icon59 />
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex h-[38.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container139 />
      <Button18 />
    </div>
  );
}

function Container141() {
  return (
    <div className="bg-gradient-to-r from-[rgba(240,177,0,0.1)] h-[68.5px] relative rounded-[8.75px] shrink-0 to-[rgba(0,211,242,0.1)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(240,177,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[68.5px] items-start pb-px pt-[15px] px-[15px] relative w-full">
          <Container140 />
        </div>
      </div>
    </div>
  );
}

function MemberSpace11() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] h-[226.5px] items-start relative shrink-0 w-full" data-name="MemberSpace">
      <Container131 />
      <Container136 />
      <Container141 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#d1d5dc] text-[14px] text-nowrap top-[-1px] whitespace-pre">To unlock</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[28px] opacity-50 relative shrink-0 w-[28.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[28.844px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">🤖</p>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#d1d5dc] text-[14px] text-nowrap top-[-1px] whitespace-pre">IA Marketing Expert</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[#6a7282] text-[12.25px] top-[-2px] w-[127px]">3/8 modules complétés</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[126.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-[126.875px]">
        <Heading23 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[38.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container142 />
      <Container143 />
    </div>
  );
}

function Container145() {
  return <div className="bg-[#e79c1c] h-[7px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv3() {
  return (
    <div className="bg-[#4a5565] box-border content-stretch flex flex-col h-[7px] items-start overflow-clip pr-[945.313px] py-0 relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container145 />
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[84px] relative rounded-[8.75px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[84px] items-start pb-0 pt-[14px] px-[14px] relative w-full">
          <Container144 />
          <PrimitiveDiv3 />
        </div>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[28px] opacity-50 relative shrink-0 w-[28.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[28.844px]">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[21px] text-white">🎨</p>
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#d1d5dc] text-[14px] text-nowrap top-[-1px] whitespace-pre">Branding Specialist</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[#6a7282] text-[12.25px] top-[-2px] w-[127px]">2/6 modules complétés</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[126.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-[126.875px]">
        <Heading24 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[38.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container147 />
      <Container148 />
    </div>
  );
}

function Container150() {
  return <div className="bg-[#e79c1c] h-[7px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv4() {
  return (
    <div className="bg-[#4a5565] box-border content-stretch flex flex-col h-[7px] items-start overflow-clip pr-[1008.33px] py-0 relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container150 />
    </div>
  );
}

function Container151() {
  return (
    <div className="bg-[rgba(54,65,83,0.5)] h-[84px] relative rounded-[8.75px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[84px] items-start pb-0 pt-[14px] px-[14px] relative w-full">
          <Container149 />
          <PrimitiveDiv4 />
        </div>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] h-[178.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container146 />
      <Container151 />
    </div>
  );
}

function MemberSpace12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[225px] items-start pb-0 pt-[15px] px-0 relative shrink-0 w-full" data-name="MemberSpace">
      <div aria-hidden="true" className="absolute border-[#364153] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Heading5 />
      <Container152 />
    </div>
  );
}

function CardContent17() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[14px] h-[486.5px] items-start left-px px-[21px] py-0 top-[65.75px] w-[1582.5px]" data-name="CardContent">
      <MemberSpace11 />
      <MemberSpace12 />
    </div>
  );
}

function Card17() {
  return (
    <div className="[grid-area:1_/_2] bg-[#1e2939] relative rounded-[12.75px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <CardTitle1 />
      <CardContent17 />
    </div>
  );
}

function Container153() {
  return (
    <div className="gap-[21px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[562px] relative shrink-0 w-full" data-name="Container">
      <Card16 />
      <Card17 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fa66600} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p190dabf0} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2a9abe70} id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[23.625px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[23.625px] left-0 text-[15.75px] text-nowrap text-white top-[-2px] whitespace-pre">Next objective</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#d1d5dc] text-[14px] top-[-1px] w-[420px]">{`Only 5 more modules to unlock the "IA Marketing Expert" certificate`}</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="basis-0 grow h-[44.625px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44.625px] items-start relative w-full">
        <Heading25 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[44.625px] relative shrink-0 w-[461.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[14px] h-[44.625px] items-center relative w-[461.656px]">
        <Icon60 />
        <Container154 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-gradient-to-r from-[#2b7fff] h-[31.5px] relative rounded-[6.75px] shrink-0 to-[#00d3f2] w-[119.547px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[31.5px] items-center justify-center px-[14px] py-[7px] relative w-[119.547px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[12.25px] text-nowrap text-white whitespace-pre">Voir les modules</p>
      </div>
    </div>
  );
}

function MemberSpace13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[3146px]" data-name="MemberSpace">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-between relative w-[3146px]">
        <Container155 />
        <Button19 />
      </div>
    </div>
  );
}

function Card18() {
  return (
    <div className="bg-gradient-to-r from-[rgba(43,127,255,0.1)] h-[88.625px] relative rounded-[12.75px] shrink-0 to-[rgba(0,211,242,0.1)] w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(43,127,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[88.625px] items-start pl-[22px] pr-px py-[22px] relative w-full">
          <MemberSpace13 />
        </div>
      </div>
    </div>
  );
}

function MemberSpace14() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[820.625px] items-start relative shrink-0 w-full" data-name="MemberSpace">
      <Container110 />
      <Container153 />
      <Card18 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[859.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <MemberSpace14 />
    </div>
  );
}

function UserDashboard() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] h-[2133.88px] items-start relative shrink-0 w-full" data-name="UserDashboard">
      <Container109 />
      <Container156 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[2175.88px] items-start left-[224px] overflow-clip pb-0 pt-[21px] px-[21px] top-[230.5px] w-[3232px]" data-name="Main Content">
      <UserDashboard />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',_sans-serif] font-bold leading-[24.5px] left-0 text-[15.75px] text-nowrap text-white top-[-3px] whitespace-pre">OVERWATCH</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">by Luis Dominguez</p>
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[45.5px] top-0 w-[103.016px]" data-name="Container">
      <Heading1 />
      <Paragraph22 />
    </div>
  );
}

function Container158() {
  return <div className="absolute blur filter left-0 opacity-20 size-[35px] top-0" data-name="Container" />;
}

function Text33() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[11.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.5px] relative w-[11.953px]">
        <p className="absolute font-['Arimo:Bold',_sans-serif] font-bold leading-[24.5px] left-0 text-[#ff6900] text-[15.75px] text-nowrap top-[-3px] whitespace-pre">O</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex items-center justify-center left-0 pl-px pr-[1.016px] py-px rounded-[8.75px] size-[35px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,105,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <Text33 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[8.75px] size-[35px] top-[3.5px]" data-name="Container">
      <Container158 />
      <Container159 />
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Container157 />
      <Container160 />
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[85px] items-start left-0 pb-px pt-[21px] px-[21px] top-0 w-[223px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container161 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2c9da500} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p15ee5dc0} id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[12.25px] text-nowrap text-white whitespace-pre">Mission Control</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[115.562px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[115.562px]">
        <Icon61 />
        <Text34 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,105,0,0.2)] h-[40.5px] relative rounded-[8.75px] shrink-0 to-[rgba(255,137,4,0.1)] w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,105,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8.75px] shadow-[0px_0px_20px_0px_rgba(231,156,28,0.3)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between pl-[11.5px] pr-[67.938px] py-px relative w-full">
          <Container163 />
        </div>
      </div>
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p32dd8c80} id="Vector" stroke="var(--stroke-0, #E79C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p3ab04900} id="Vector_2" stroke="var(--stroke-0, #E79C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M7.29167 6.5625H5.83333" id="Vector_3" stroke="var(--stroke-0, #E79C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M11.6667 9.47917H5.83333" id="Vector_4" stroke="var(--stroke-0, #E79C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M11.6667 12.3958H5.83333" id="Vector_5" stroke="var(--stroke-0, #E79C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text35() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#e79c1c] text-[12.25px] text-nowrap whitespace-pre">Strategy Manual</p>
      </div>
    </div>
  );
}

function Badge28() {
  return (
    <div className="bg-gradient-to-b from-[#e79c1c] h-[19.5px] relative rounded-[6.75px] shrink-0 to-[#6be1df] w-[39.813px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[39.813px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-black text-nowrap whitespace-pre">NEW</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[169.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[19.5px] items-center relative w-[169.438px]">
        <Icon62 />
        <Text35 />
        <Badge28 />
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-gradient-to-r from-[rgba(231,156,28,0.1)] h-[42.5px] relative rounded-[8.75px] shrink-0 to-[rgba(107,225,223,0.1)] w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(231,156,28,0.2)] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[42.5px] items-center justify-between pl-[11.5px] pr-[14.063px] py-px relative w-full">
          <Container164 />
        </div>
      </div>
    </div>
  );
}

function Icon63() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p106b6a40} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p2bac4500} id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p44ace00} id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.pa46d280} id="Vector_4" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p3eb5d380} id="Vector_5" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text36() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Live Training</p>
      </div>
    </div>
  );
}

function Badge29() {
  return (
    <div className="bg-[#fb2c36] h-[19.5px] opacity-[0.998] relative rounded-[6.75px] shrink-0 w-[36.375px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[36.375px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-nowrap text-white whitespace-pre">LIVE</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container165() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[144.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[19.5px] items-center relative w-[144.828px]">
        <Icon63 />
        <Text36 />
        <Badge29 />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between pl-[10.5px] pr-[39.672px] py-0 relative w-full">
          <Container165 />
        </div>
      </div>
    </div>
  );
}

function Icon64() {
  return (
    <div className="relative shrink-0 size-[15.891px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_242_1627)" id="Icon">
          <path d={svgPaths.p3f936000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.32422" />
        </g>
        <defs>
          <clipPath id="clip0_242_1627">
            <rect fill="white" height="15.8906" width="15.8906" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text37() {
  return (
    <div className="basis-0 grow h-[35px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35px] relative w-full">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[#99a1af] text-[12.25px] top-[-2px] w-[51px]">Team Channels</p>
      </div>
    </div>
  );
}

function Badge30() {
  return (
    <div className="bg-[#ff6900] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[39.813px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[39.813px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-black text-nowrap whitespace-pre">NEW</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[35px] relative shrink-0 w-[152.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[35px] items-center relative w-[152.156px]">
        <Icon64 />
        <Text37 />
        <Badge30 />
      </div>
    </div>
  );
}

function Badge31() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[21.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[21.844px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">3</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[56px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[56px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container166 />
          <Badge31 />
        </div>
      </div>
    </div>
  );
}

function Icon65() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p252f3700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p31d85e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p19eb5080} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M7.29167 4.375H10.2083" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M7.29167 7.29167H10.2083" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M7.29167 10.2083H10.2083" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M7.29167 13.125H10.2083" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">HR Foundations</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[116.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[116.922px]">
        <Icon65 />
        <Text38 />
      </div>
    </div>
  );
}

function Badge32() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container167 />
          <Badge32 />
        </div>
      </div>
    </div>
  );
}

function Icon66() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p116d0080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p2a6d1550} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Strategic Planning</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[129.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[129.031px]">
        <Icon66 />
        <Text39 />
      </div>
    </div>
  );
}

function Badge33() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container168 />
          <Badge33 />
        </div>
      </div>
    </div>
  );
}

function Icon67() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M8.75 11.6667H8.75729" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M11.6667 11.6667H11.674" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p38f22780} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M5.83333 11.6667H5.84063" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Industry Focus</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[109.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[109.234px]">
        <Icon67 />
        <Text40 />
      </div>
    </div>
  );
}

function Badge34() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container169 />
          <Badge34 />
        </div>
      </div>
    </div>
  );
}

function Icon68() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1968dd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p20d6b2e0} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p39d7a960} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p31bf6a00} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text41() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Ownership Models</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[132.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[132.172px]">
        <Icon68 />
        <Text41 />
      </div>
    </div>
  );
}

function Badge35() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container170 />
          <Badge35 />
        </div>
      </div>
    </div>
  );
}

function Icon69() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1e2ee900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text42() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">{`Risk & Compliance`}</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[131.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[131.406px]">
        <Icon69 />
        <Text42 />
      </div>
    </div>
  );
}

function Badge36() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button28() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container171 />
          <Badge36 />
        </div>
      </div>
    </div>
  );
}

function Icon70() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p12a0bdf0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text43() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Culture Design</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[110.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[110.141px]">
        <Icon70 />
        <Text43 />
      </div>
    </div>
  );
}

function Badge37() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button29() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container172 />
          <Badge37 />
        </div>
      </div>
    </div>
  );
}

function Icon71() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p11d29600} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M3.64583 15.3125H13.8542" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text44() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Leadership</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[88.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[88.391px]">
        <Icon71 />
        <Text44 />
      </div>
    </div>
  );
}

function Badge38() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container173 />
          <Badge38 />
        </div>
      </div>
    </div>
  );
}

function Icon72() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M8.75 13.125V3.64583" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p229af00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p3a7b7700} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p67eab60} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p10228800} id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p1e3c6f00} id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p34fcba40} id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p369686c0} id="Vector_8" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text45() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">HCM Technology</p>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[122.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[122.875px]">
        <Icon72 />
        <Text45 />
      </div>
    </div>
  );
}

function Badge39() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button31() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container174 />
          <Badge39 />
        </div>
      </div>
    </div>
  );
}

function Icon73() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1e0e7340} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M13.125 12.3958V6.5625" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M9.47917 12.3958V3.64583" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M5.83333 12.3958V10.2083" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text46() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">{`ROI & Analytics`}</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[113.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[113.734px]">
        <Icon73 />
        <Text46 />
      </div>
    </div>
  );
}

function Badge40() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button32() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container175 />
          <Badge40 />
        </div>
      </div>
    </div>
  );
}

function Icon74() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2c37ce00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p249f9480} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p69b1470} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.pc8f2080} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M2.1875 2.91667H8.02083" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">{`M&A Strategy`}</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[105.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[105.828px]">
        <Icon74 />
        <Text47 />
      </div>
    </div>
  );
}

function Badge41() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button33() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container176 />
          <Badge41 />
        </div>
      </div>
    </div>
  );
}

function Icon75() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p307f6380} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Future of Work</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[111.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[111.688px]">
        <Icon75 />
        <Text48 />
      </div>
    </div>
  );
}

function Badge42() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container177 />
          <Badge42 />
        </div>
      </div>
    </div>
  );
}

function Icon76() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3924400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p1af1b780} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p3eb5d380} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text49() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="basis-0 font-['Arimo:Regular',_sans-serif] font-normal grow leading-[17.5px] min-h-px min-w-px relative shrink-0 text-[#99a1af] text-[12.25px]">Implementation</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[116.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[116.938px]">
        <Icon76 />
        <Text49 />
      </div>
    </div>
  );
}

function Badge43() {
  return (
    <div className="bg-[#1e2939] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[20.234px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[20.234px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d1d5dc] text-[10.5px] text-nowrap whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Button35() {
  return (
    <div className="h-[40.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40.5px] items-center justify-between px-[10.5px] py-0 relative w-full">
          <Container178 />
          <Badge43 />
        </div>
      </div>
    </div>
  );
}

function Icon77() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p12e95980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p3ffd8f0} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text50() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Advisory Services</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[125.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[125.406px]">
        <Icon77 />
        <Text50 />
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="h-[38.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[38.5px] items-center justify-between pl-[10.5px] pr-[59.094px] py-0 relative w-full">
          <Container179 />
        </div>
      </div>
    </div>
  );
}

function Icon78() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p193c1200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p27000e00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text51() {
  return (
    <div className="basis-0 grow h-[17.5px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-full">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#99a1af] text-[12.25px] text-nowrap whitespace-pre">Certifications</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[101.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[17.5px] items-center relative w-[101.578px]">
        <Icon78 />
        <Text51 />
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[38.5px] relative rounded-[8.75px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[38.5px] items-center justify-between pl-[10.5px] pr-[82.922px] py-0 relative w-full">
          <Container180 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3.5px] h-[2225.88px] items-start left-0 overflow-clip pb-0 pt-[14px] px-[14px] top-[85px] w-[223px]" data-name="Navigation">
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
      <Button37 />
    </div>
  );
}

function Container181() {
  return <div className="absolute blur-[200px] filter left-[111px] opacity-30 size-[112px] top-0" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 112 112\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -13.073 -13.073 0 95.2 89.6)\\\'><stop stop-color=\\\'rgba(231,156,28,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(216,165,52,1)\\\' offset=\\\'0.125\\\'/><stop stop-color=\\\'rgba(200,173,77,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(169,191,126,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(138,208,174,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(107,225,223,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function Icon79() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p265b35c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="h-[31.5px] relative rounded-[6.75px] shrink-0 w-full" data-name="Button">
      <Icon79 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[42px] text-[#99a1af] text-[12.25px] text-nowrap top-[5px] whitespace-pre">Settings</p>
    </div>
  );
}

function Icon80() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p17395980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 7H5.25" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2be9bb00} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div className="h-[31.5px] relative rounded-[6.75px] shrink-0 w-full" data-name="Button">
      <Icon80 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[42px] text-[#99a1af] text-[12.25px] text-nowrap top-[5px] whitespace-pre">Logout</p>
    </div>
  );
}

function Container182() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3.5px] h-[95.5px] items-start left-0 pb-0 pt-[15px] px-[14px] top-[2310.88px] w-[223px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button38 />
      <Button39 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-black h-[2406.38px] left-0 top-0 w-[224px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container162 />
      <Navigation />
      <Container181 />
      <Container182 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-black h-[2406.38px] left-0 top-0 w-[3456px]" data-name="App">
      <MainContent />
      <Sidebar />
    </div>
  );
}

function App1() {
  return <div className="absolute blur-[200px] filter left-[3120px] opacity-30 size-[336px] top-0" data-name="App" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 336 336\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -39.22 -39.22 0 285.6 268.8)\\\'><stop stop-color=\\\'rgba(231,156,28,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(216,165,52,1)\\\' offset=\\\'0.125\\\'/><stop stop-color=\\\'rgba(200,173,77,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(169,191,126,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(138,208,174,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(107,225,223,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function Text52() {
  return (
    <div className="absolute h-[21px] left-0 top-[-20000px] w-[7.547px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[14px] text-nowrap text-white top-[-1px] whitespace-pre">0</p>
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex h-[24.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Arimo:Bold',_sans-serif] font-bold grow leading-[24.5px] min-h-px min-w-px relative shrink-0 text-[17.5px] text-white">Welcome back, Luis Dominguez</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[21px] relative shrink-0 w-[225.094px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] overflow-clip relative rounded-[inherit] w-[225.094px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#99a1af] text-[14px] top-[-1px] w-[226px]">{`Founder & CEO • OVERWATCH HCM`}</p>
      </div>
    </div>
  );
}

function Badge44() {
  return (
    <div className="bg-gradient-to-b from-[#e79c1c] h-[19.5px] relative rounded-[6.75px] shrink-0 to-[#6be1df] w-[55.594px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[55.594px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-black text-nowrap whitespace-pre">Founder</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex gap-[7px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph23 />
      <Badge44 />
    </div>
  );
}

function Container184() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45.5px] items-start left-[52.5px] top-0 w-[2739.84px]" data-name="Container">
      <Heading26 />
      <Container183 />
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="basis-0 grow h-[42px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] w-full" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[3.35544e+07px] size-[42px] top-[1.75px]" data-name="Primitive.span">
      <PrimitiveImg />
    </div>
  );
}

function Container185() {
  return (
    <div className="basis-0 grow h-[45.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.5px] relative w-full">
        <Container184 />
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function Icon81() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3b7ec180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p33c82000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[78.38px] rounded-[6.75px] size-[31.5px] top-0" data-name="Button">
      <Icon81 />
    </div>
  );
}

function Icon82() {
  return (
    <div className="absolute left-[11.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p121d3600} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute bg-[rgba(26,26,26,0.3)] h-[31.5px] left-[123.88px] rounded-[6.75px] top-0 w-[116.781px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <Icon82 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[39.5px] text-[#d1d5dc] text-[12.25px] text-nowrap top-[5px] whitespace-pre">Access Staff</p>
    </div>
  );
}

function Icon83() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1aca3780} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2c4a2a20} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute bg-[#e79c1c] h-[31.5px] left-[254.66px] rounded-[6.75px] top-0 w-[143px]" data-name="Button">
      <Icon83 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-[38.5px] text-[12.25px] text-black text-nowrap top-[5px] whitespace-pre">Unlock a module</p>
    </div>
  );
}

function Icon84() {
  return (
    <div className="absolute left-[11.5px] size-[10.5px] top-[6.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_242_1471)" id="Icon">
          <path d={svgPaths.p35164f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p370cef00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p162c4500} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p18c0db80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p3909b470} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_242_1471">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Header() {
  return <div className="absolute bg-[#ff6467] left-[-3.58px] opacity-[0.795] rounded-[3.35544e+07px] size-[12.656px] top-[-3.58px]" data-name="Header" />;
}

function Badge45() {
  return (
    <div className="absolute bg-[#fb2c36] h-[23px] left-0 opacity-[0.998] rounded-[6.75px] top-[4.25px] w-[64.375px]" data-name="Badge">
      <div className="h-[23px] overflow-clip relative rounded-[inherit] w-[64.375px]">
        <Icon84 />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] left-[32.5px] text-[10.5px] text-nowrap text-white top-[3.5px] whitespace-pre">LIVE</p>
        <Header />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container186() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[397.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.5px] relative w-[397.656px]">
        <Button40 />
        <Button41 />
        <Button42 />
        <Badge45 />
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex h-[45.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container185 />
      <Container186 />
    </div>
  );
}

function Icon85() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Icon">
          <path d={svgPaths.p30eb2900} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d="M10.5 7V18.375" id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p14974200} id="Vector_3" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p13302800} id="Vector_4" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[14px] text-nowrap text-white top-[-1px] whitespace-pre">Nouveau module disponible !</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#d1d5dc] text-[12.25px] text-nowrap whitespace-pre">IA Marketing - Étape 3 maintenant accessible</p>
    </div>
  );
}

function Container188() {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.5px] items-start relative w-full">
        <Heading27 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-[275.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10.5px] h-[38.5px] items-center relative w-[275.125px]">
        <Icon85 />
        <Container188 />
      </div>
    </div>
  );
}

function Badge46() {
  return (
    <div className="bg-[#ff6900] h-[19.5px] relative rounded-[6.75px] shrink-0 w-[58.891px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.5px] h-[19.5px] items-center justify-center overflow-clip px-[8px] py-[2.75px] relative rounded-[inherit] w-[58.891px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[10.5px] text-black text-nowrap whitespace-pre">Nouveau</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex h-[38.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container189 />
      <Badge46 />
    </div>
  );
}

function Container191() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,105,0,0.1)] h-[68.5px] relative rounded-[8.75px] shrink-0 to-[rgba(255,137,4,0.1)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,105,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[68.5px] items-start pb-px pt-[15px] px-[15px] relative w-full">
          <Container190 />
        </div>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[107.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[17.5px] items-start relative w-[107.172px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] relative shrink-0 text-[#d1d5dc] text-[12.25px] text-nowrap whitespace-pre">Progression globale</p>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[23.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[23.938px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[17.5px] left-0 text-[12.25px] text-white top-[-2px] w-[24px]">95%</p>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex h-[17.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text53 />
      <Text54 />
    </div>
  );
}

function Container193() {
  return <div className="bg-[#e79c1c] h-[7px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv5() {
  return (
    <div className="bg-[#1e2939] box-border content-stretch flex flex-col h-[7px] items-start overflow-clip pr-[159.5px] py-0 relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container193 />
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[31.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container192 />
      <PrimitiveDiv5 />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute bg-black box-border content-stretch flex flex-col gap-[21px] h-[230.5px] items-start left-[224px] pb-px pt-[21px] px-[21px] top-0 w-[3232px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container187 />
      <Container191 />
      <Container194 />
    </div>
  );
}

export default function PlateformeSaaSStartModulesCommunity() {
  return (
    <div className="bg-black relative size-full" data-name="Plateforme SaaS START Modules (Community)">
      <App />
      <App1 />
      <Text52 />
      <Header1 />
    </div>
  );
}