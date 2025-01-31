// "use client";
// import { useSession, signOut } from "next-auth/react";
// import Link from "next/link";
// import React from "react";
// // import { User } from "next-auth";
// import { Button } from "./ui/button";
// import InteractiveHoverButton from "./ui/interactive-hover-button";

// const Navbar = () => {
//   const { data: session } = useSession();
//   // const user: User = session?.user as User;

//   return (
//     <header className="w-full h-[5rem] bg-black/20 backdrop-blur-sm shadow-md sticky top-0 z-50 p-6">
//       <nav className="nav w-full h-full flex justify-between items-center p-4">
//         <div className="logo">
//           <Link href="/">
//             <div className="logo w-36 flex items-center ">
//               <svg
//                 width="429.00000000000006"
//                 height="96.32268378862142"
//                 viewBox="0 0 369.89473684210526 83.05187359421313"
//                 className="looka-1j8o68f"
//               >
//                 <defs id="SvgjsDefs1564">
//                   <linearGradient id="SvgjsLinearGradient1569">
//                     <stop
//                       id="SvgjsStop1570"
//                       stopColor="#00ff8f"
//                       offset="0"
//                     ></stop>
//                     <stop
//                       id="SvgjsStop1571"
//                       stopColor="#00a1ff"
//                       offset="1"
//                     ></stop>
//                   </linearGradient>
//                   <linearGradient id="SvgjsLinearGradient1572">
//                     <stop
//                       id="SvgjsStop1573"
//                       stopColor="#00ff8f"
//                       offset="0"
//                     ></stop>
//                     <stop
//                       id="SvgjsStop1574"
//                       stopColor="#00a1ff"
//                       offset="1"
//                     ></stop>
//                   </linearGradient>
//                 </defs>
//                 <g
//                   id="SvgjsG1565"
//                   feature-key="QMusi1-0"
//                   transform="matrix(0.31765870995044304,0,0,0.31765870995044304,-2.0882559067533086,-8.132063095908522)"
//                   fill="url(#SvgjsLinearGradient1569)"
//                 >
//                   <path
//                     xmlns="http://www.w3.org/2000/svg"
//                     d="M36.2,127.7l128.4,0.4c3.5,0,6.7-1.9,8.5-4.9l17.7-30.4c1.5-2.6-0.4-5.9-3.4-5.9L58.2,86.5c-3.5,0-6.7,1.9-8.5,4.9  L7.9,163.3c-1.7,3-1.8,6.8-0.1,9.8l64.2,112c1.5,2.6,5.3,2.6,6.8,0l17.7-30.4c1.7-3,1.8-6.8,0.1-9.8L32.8,133.6  C31.3,131,33.2,127.7,36.2,127.7z"
//                   ></path>
//                   <path
//                     xmlns="http://www.w3.org/2000/svg"
//                     d="M224.9,73.2l-64.6,110.9c-1.7,3-1.8,6.8-0.1,9.8l17.5,30.5c1.5,2.6,5.3,2.6,6.8,0l65.1-111.7c1.7-3,1.8-6.8,0.1-9.8  l-41.3-72.1c-1.7-3-5-5-8.5-4.9L70.7,25.6c-3,0-4.9,3.3-3.4,5.9L84.7,62c1.7,3,5,5,8.5,4.9l128.4,0.4  C224.6,67.4,226.4,70.7,224.9,73.2z"
//                   ></path>
//                   <g xmlns="http://www.w3.org/2000/svg">
//                     <path d="M292.6,148.2l-35.2-0.1c-3.5,0-6.7,1.9-8.5,4.9l-64.6,110.9c-1.5,2.6-5.3,2.6-6.8,0l-63.7-111.2c-1.7-3-5-5-8.5-4.9   l-35.2-0.1c-3,0-4.9,3.3-3.4,5.9l64.2,112c1.7,3,5,5,8.5,4.9l83.2,0.2c3.5,0,6.7-1.9,8.5-4.9L296,154.1   C297.5,151.5,295.6,148.3,292.6,148.2z"></path>
//                   </g>
//                 </g>
//                 <g
//                   id="SvgjsG1566"
//                   feature-key="UyNsn2-0"
//                   transform="matrix(3.954230034607012,0,0,3.954230034607012,106.85958222108721,-9.539110443050443)"
//                   fill="url(#SvgjsLinearGradient1572)"
//                 >
//                   <path d="M1.3 5.720000000000001 l8.42 -0.000019531 c-0.14666 0.53334 -0.28666 1.0067 -0.42 1.42 c-0.10666 0.34666 -0.20666 0.66666 -0.3 0.96 s-0.14668 0.44 -0.16002 0.44 l-4.32 0 l0.04 0.44 l0 2.46 l4.04 0 l0 2.86 l-4.04 0 l0 5.7 l-3.26 0 l0 -14.28 z M14.8 9.44 c0.69334 0 1.34 0.09668 1.94 0.29002 s1.1167 0.50334 1.55 0.93 s0.77334 0.98 1.02 1.66 s0.37 1.5 0.37 2.46 s-0.12334 1.78 -0.37 2.46 s-0.58666 1.2333 -1.02 1.66 s-0.95 0.73666 -1.55 0.93 s-1.2467 0.29 -1.94 0.29 c-0.70666 0 -1.3567 -0.09666 -1.95 -0.29 s-1.1067 -0.50334 -1.54 -0.93 s-0.77334 -0.98 -1.02 -1.66 s-0.37 -1.5 -0.37 -2.46 c0 -0.94666 0.12334 -1.7567 0.37 -2.43 s0.58666 -1.2267 1.02 -1.66 s0.94668 -0.75 1.54 -0.95 s1.2433 -0.3 1.95 -0.3 z M14.8 17.5 c0.6 0 1.07 -0.2 1.41 -0.6 s0.51 -1.1067 0.51 -2.12 s-0.17 -1.7233 -0.51 -2.13 s-0.81 -0.61 -1.41 -0.61 c-0.58666 0 -1.0567 0.21 -1.41 0.63 s-0.53 1.1233 -0.53 2.11 c0 1.0133 0.17334 1.72 0.52 2.12 s0.82 0.6 1.42 0.6 z M20.04 20 l3.24 -5.38 c-0.14666 -0.24 -0.3 -0.5 -0.46 -0.78 c-0.14666 -0.24 -0.30666 -0.51334 -0.48 -0.82 s-0.35334 -0.62 -0.54 -0.94 c-0.44 -0.73334 -0.94 -1.58 -1.5 -2.54 l3.4 0 l1.6 2.62 l1.52 -2.62 l3.54 0.02 l-3.1 5.06 l3.2 5.38 l-3.3 0 l-1.86 -3.24 l-2.04 3.24 l-3.22 0 z M34.14 8.54 l-3.42 0 l0 -2.84 l10.3 0 l-0.46 1.4 l-0.46 1.44 l-2.68 0 l0.06 0.56 l0 10.9 l-3.34 0 l0 -11.46 z M44.38 9.92 c0.16 -0.10666 0.38332 -0.21 0.66998 -0.31 s0.61 -0.15 0.97 -0.15 c0.30666 0 0.55666 0.01334 0.75 0.04 s0.29 0.03332 0.29 0.01998 l0 2.66 c-0.30666 -0.02666 -0.60666 -0.03332 -0.9 -0.01998 c-0.25334 0.02666 -0.51668 0.07 -0.79002 0.13 s-0.52334 0.17 -0.75 0.33 c-0.26666 0.18666 -0.45666 0.44 -0.57 0.76 s-0.17 0.76 -0.17 1.32 l0 5.32 l-3 0 l0 -7.94 l-1.62 0 l1.28 -2.54 l3.34 0 l0 0.78 c0.06666 -0.05334 0.12666 -0.10668 0.18 -0.16002 c0.05334 -0.04 0.10668 -0.08334 0.16002 -0.13 s0.10668 -0.08332 0.16002 -0.10998 z M53.64 15.42 c-0.13334 -0.02666 -0.2733 -0.04338 -0.41996 -0.050038 s-0.27332 -0.01 -0.37998 -0.01 c-0.56 0 -1.0133 0.08666 -1.36 0.26 s-0.52 0.47334 -0.52 0.9 c0 0.26666 0.06334 0.47666 0.19 0.63 s0.28332 0.26668 0.46998 0.34002 s0.38332 0.11668 0.58998 0.13002 s0.38332 0.02 0.52998 0.02 c0.26666 0 0.56666 -0.03334 0.9 -0.1 l0 -2.12 z M52.6 13.219999999999999 c0.10666 0 0.24996 0.0033594 0.42996 0.01002 s0.38334 0.01666 0.61 0.03 c-0.01334 -0.52 -0.19668 -0.85666 -0.55002 -1.01 s-0.81 -0.23 -1.37 -0.23 c-0.30666 0 -0.66 0.03666 -1.06 0.11 s-0.83334 0.18334 -1.3 0.33 l-0.32 -1.1 c-0.04 -0.14666 -0.09666 -0.36 -0.17 -0.64 s-0.12334 -0.5 -0.15 -0.66 c0.66666 -0.22666 1.2967 -0.39 1.89 -0.49 s1.13 -0.15 1.61 -0.15 c1.4133 0 2.5066 0.33666 3.28 1.01 s1.16 1.75 1.16 3.23 l0 5.86 c-0.52 0.14666 -1.12 0.29 -1.8 0.43 s-1.4133 0.21 -2.2 0.21 c-0.69334 0 -1.3233 -0.06 -1.89 -0.18 s-1.0533 -0.32 -1.46 -0.6 s-0.72 -0.64666 -0.94 -1.1 s-0.33 -1.0067 -0.33 -1.66 s0.13666 -1.2 0.41 -1.64 s0.62668 -0.79 1.06 -1.05 s0.92 -0.44334 1.46 -0.55 s1.0833 -0.16 1.63 -0.16 z M63.5 15.42 c-0.13334 -0.02666 -0.2733 -0.04338 -0.41996 -0.050038 s-0.27332 -0.01 -0.37998 -0.01 c-0.56 0 -1.0133 0.08666 -1.36 0.26 s-0.52 0.47334 -0.52 0.9 c0 0.26666 0.06334 0.47666 0.19 0.63 s0.28332 0.26668 0.46998 0.34002 s0.38332 0.11668 0.58998 0.13002 s0.38332 0.02 0.52998 0.02 c0.26666 0 0.56666 -0.03334 0.9 -0.1 l0 -2.12 z M62.46 13.219999999999999 c0.10666 0 0.24996 0.0033594 0.42996 0.01002 s0.38334 0.01666 0.61 0.03 c-0.01334 -0.52 -0.19668 -0.85666 -0.55002 -1.01 s-0.81 -0.23 -1.37 -0.23 c-0.30666 0 -0.66 0.03666 -1.06 0.11 s-0.83334 0.18334 -1.3 0.33 l-0.32 -1.1 c-0.04 -0.14666 -0.09666 -0.36 -0.17 -0.64 s-0.12334 -0.5 -0.15 -0.66 c0.66666 -0.22666 1.2967 -0.39 1.89 -0.49 s1.13 -0.15 1.61 -0.15 c1.4133 0 2.5066 0.33666 3.28 1.01 s1.16 1.75 1.16 3.23 l0 5.86 c-0.52 0.14666 -1.12 0.29 -1.8 0.43 s-1.4133 0.21 -2.2 0.21 c-0.69334 0 -1.3233 -0.06 -1.89 -0.18 s-1.0533 -0.32 -1.46 -0.6 s-0.72 -0.64666 -0.94 -1.1 s-0.33 -1.0067 -0.33 -1.66 s0.13666 -1.2 0.41 -1.64 s0.62668 -0.79 1.06 -1.05 s0.92 -0.44334 1.46 -0.55 s1.0833 -0.16 1.63 -0.16 z"></path>
//                 </g>
//               </svg>
//             </div>
//           </Link>
//         </div>
//         <div className="menu flex gap-5 ">
//           <ul className="flex gap-10 font-semibold items-center text-gray-200  tracking-wide text-base mr-3">
//             <li>
//               <Link href={"/six-charts"} className="hover:text-white">6 Charts</Link>
//             </li>
//             <li>
//               <Link href={"/chart-analyzer"} className="hover:text-white"> Chart Analyzer</Link>
//             </li>
//             <li>
//               <Link href={"/rsi"} className="hover:text-white">RSI</Link>
//             </li>
//             <li>
//               <Link href={"/sma"} className="hover:text-white">SMA</Link>
//             </li>
//             <li>
//               <Link href={"/atr"} className="hover:text-white">ATR</Link>
//             </li>
//           </ul>
//           <div className="btn">
//             {session ? (
//               <Button onClick={() => signOut()} className="sign-btn">
//                 Log out
//               </Button>
//             ) : (
//               <Link href={"/sign-in"}>
//                 <InteractiveHoverButton text="Get Started" className="w-44" />
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import InteractiveHoverButton from "./ui/interactive-hover-button";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <header className="w-full h-[5rem] bg-black/20 backdrop-blur-sm shadow-md sticky top-0 z-50 p-6">
      <nav className="nav w-full h-full flex justify-between items-center p-4">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <div className="logo w-36 flex items-center">
              <svg
                width="429.00000000000006"
                height="96.32268378862142"
                viewBox="0 0 369.89473684210526 83.05187359421313"
                className="looka-1j8o68f"
              >
                {/* SVG content remains unchanged */}
                <defs id="SvgjsDefs1564">
                  <linearGradient id="SvgjsLinearGradient1569">
                    <stop
                      id="SvgjsStop1570"
                      stopColor="#00ff8f"
                      offset="0"
                    ></stop>
                    <stop
                      id="SvgjsStop1571"
                      stopColor="#00a1ff"
                      offset="1"
                    ></stop>
                  </linearGradient>
                  <linearGradient id="SvgjsLinearGradient1572">
                    <stop
                      id="SvgjsStop1573"
                      stopColor="#00ff8f"
                      offset="0"
                    ></stop>
                    <stop
                      id="SvgjsStop1574"
                      stopColor="#00a1ff"
                      offset="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <g
                  id="SvgjsG1565"
                  feature-key="QMusi1-0"
                  transform="matrix(0.31765870995044304,0,0,0.31765870995044304,-2.0882559067533086,-8.132063095908522)"
                  fill="url(#SvgjsLinearGradient1569)"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M36.2,127.7l128.4,0.4c3.5,0,6.7-1.9,8.5-4.9l17.7-30.4c1.5-2.6-0.4-5.9-3.4-5.9L58.2,86.5c-3.5,0-6.7,1.9-8.5,4.9  L7.9,163.3c-1.7,3-1.8,6.8-0.1,9.8l64.2,112c1.5,2.6,5.3,2.6,6.8,0l17.7-30.4c1.7-3,1.8-6.8,0.1-9.8L32.8,133.6  C31.3,131,33.2,127.7,36.2,127.7z"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M224.9,73.2l-64.6,110.9c-1.7,3-1.8,6.8-0.1,9.8l17.5,30.5c1.5,2.6,5.3,2.6,6.8,0l65.1-111.7c1.7-3,1.8-6.8,0.1-9.8  l-41.3-72.1c-1.7-3-5-5-8.5-4.9L70.7,25.6c-3,0-4.9,3.3-3.4,5.9L84.7,62c1.7,3,5,5,8.5,4.9l128.4,0.4  C224.6,67.4,226.4,70.7,224.9,73.2z"
                  ></path>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M292.6,148.2l-35.2-0.1c-3.5,0-6.7,1.9-8.5,4.9l-64.6,110.9c-1.5,2.6-5.3,2.6-6.8,0l-63.7-111.2c-1.7-3-5-5-8.5-4.9   l-35.2-0.1c-3,0-4.9,3.3-3.4,5.9l64.2,112c1.7,3,5,5,8.5,4.9l83.2,0.2c3.5,0,6.7-1.9,8.5-4.9L296,154.1   C297.5,151.5,295.6,148.3,292.6,148.2z"></path>
                  </g>
                </g>
                <g
                  id="SvgjsG1566"
                  feature-key="UyNsn2-0"
                  transform="matrix(3.954230034607012,0,0,3.954230034607012,106.85958222108721,-9.539110443050443)"
                  fill="url(#SvgjsLinearGradient1572)"
                >
                  <path d="M1.3 5.720000000000001 l8.42 -0.000019531 c-0.14666 0.53334 -0.28666 1.0067 -0.42 1.42 c-0.10666 0.34666 -0.20666 0.66666 -0.3 0.96 s-0.14668 0.44 -0.16002 0.44 l-4.32 0 l0.04 0.44 l0 2.46 l4.04 0 l0 2.86 l-4.04 0 l0 5.7 l-3.26 0 l0 -14.28 z M14.8 9.44 c0.69334 0 1.34 0.09668 1.94 0.29002 s1.1167 0.50334 1.55 0.93 s0.77334 0.98 1.02 1.66 s0.37 1.5 0.37 2.46 s-0.12334 1.78 -0.37 2.46 s-0.58666 1.2333 -1.02 1.66 s-0.95 0.73666 -1.55 0.93 s-1.2467 0.29 -1.94 0.29 c-0.70666 0 -1.3567 -0.09666 -1.95 -0.29 s-1.1067 -0.50334 -1.54 -0.93 s-0.77334 -0.98 -1.02 -1.66 s-0.37 -1.5 -0.37 -2.46 c0 -0.94666 0.12334 -1.7567 0.37 -2.43 s0.58666 -1.2267 1.02 -1.66 s0.94668 -0.75 1.54 -0.95 s1.2433 -0.3 1.95 -0.3 z M14.8 17.5 c0.6 0 1.07 -0.2 1.41 -0.6 s0.51 -1.1067 0.51 -2.12 s-0.17 -1.7233 -0.51 -2.13 s-0.81 -0.61 -1.41 -0.61 c-0.58666 0 -1.0567 0.21 -1.41 0.63 s-0.53 1.1233 -0.53 2.11 c0 1.0133 0.17334 1.72 0.52 2.12 s0.82 0.6 1.42 0.6 z M20.04 20 l3.24 -5.38 c-0.14666 -0.24 -0.3 -0.5 -0.46 -0.78 c-0.14666 -0.24 -0.30666 -0.51334 -0.48 -0.82 s-0.35334 -0.62 -0.54 -0.94 c-0.44 -0.73334 -0.94 -1.58 -1.5 -2.54 l3.4 0 l1.6 2.62 l1.52 -2.62 l3.54 0.02 l-3.1 5.06 l3.2 5.38 l-3.3 0 l-1.86 -3.24 l-2.04 3.24 l-3.22 0 z M34.14 8.54 l-3.42 0 l0 -2.84 l10.3 0 l-0.46 1.4 l-0.46 1.44 l-2.68 0 l0.06 0.56 l0 10.9 l-3.34 0 l0 -11.46 z M44.38 9.92 c0.16 -0.10666 0.38332 -0.21 0.66998 -0.31 s0.61 -0.15 0.97 -0.15 c0.30666 0 0.55666 0.01334 0.75 0.04 s0.29 0.03332 0.29 0.01998 l0 2.66 c-0.30666 -0.02666 -0.60666 -0.03332 -0.9 -0.01998 c-0.25334 0.02666 -0.51668 0.07 -0.79002 0.13 s-0.52334 0.17 -0.75 0.33 c-0.26666 0.18666 -0.45666 0.44 -0.57 0.76 s-0.17 0.76 -0.17 1.32 l0 5.32 l-3 0 l0 -7.94 l-1.62 0 l1.28 -2.54 l3.34 0 l0 0.78 c0.06666 -0.05334 0.12666 -0.10668 0.18 -0.16002 c0.05334 -0.04 0.10668 -0.08334 0.16002 -0.13 s0.10668 -0.08332 0.16002 -0.10998 z M53.64 15.42 c-0.13334 -0.02666 -0.2733 -0.04338 -0.41996 -0.050038 s-0.27332 -0.01 -0.37998 -0.01 c-0.56 0 -1.0133 0.08666 -1.36 0.26 s-0.52 0.47334 -0.52 0.9 c0 0.26666 0.06334 0.47666 0.19 0.63 s0.28332 0.26668 0.46998 0.34002 s0.38332 0.11668 0.58998 0.13002 s0.38332 0.02 0.52998 0.02 c0.26666 0 0.56666 -0.03334 0.9 -0.1 l0 -2.12 z M52.6 13.219999999999999 c0.10666 0 0.24996 0.0033594 0.42996 0.01002 s0.38334 0.01666 0.61 0.03 c-0.01334 -0.52 -0.19668 -0.85666 -0.55002 -1.01 s-0.81 -0.23 -1.37 -0.23 c-0.30666 0 -0.66 0.03666 -1.06 0.11 s-0.83334 0.18334 -1.3 0.33 l-0.32 -1.1 c-0.04 -0.14666 -0.09666 -0.36 -0.17 -0.64 s-0.12334 -0.5 -0.15 -0.66 c0.66666 -0.22666 1.2967 -0.39 1.89 -0.49 s1.13 -0.15 1.61 -0.15 c1.4133 0 2.5066 0.33666 3.28 1.01 s1.16 1.75 1.16 3.23 l0 5.86 c-0.52 0.14666 -1.12 0.29 -1.8 0.43 s-1.4133 0.21 -2.2 0.21 c-0.69334 0 -1.3233 -0.06 -1.89 -0.18 s-1.0533 -0.32 -1.46 -0.6 s-0.72 -0.64666 -0.94 -1.1 s-0.33 -1.0067 -0.33 -1.66 s0.13666 -1.2 0.41 -1.64 s0.62668 -0.79 1.06 -1.05 s0.92 -0.44334 1.46 -0.55 s1.0833 -0.16 1.63 -0.16 z M63.5 15.42 c-0.13334 -0.02666 -0.2733 -0.04338 -0.41996 -0.050038 s-0.27332 -0.01 -0.37998 -0.01 c-0.56 0 -1.0133 0.08666 -1.36 0.26 s-0.52 0.47334 -0.52 0.9 c0 0.26666 0.06334 0.47666 0.19 0.63 s0.28332 0.26668 0.46998 0.34002 s0.38332 0.11668 0.58998 0.13002 s0.38332 0.02 0.52998 0.02 c0.26666 0 0.56666 -0.03334 0.9 -0.1 l0 -2.12 z M62.46 13.219999999999999 c0.10666 0 0.24996 0.0033594 0.42996 0.01002 s0.38334 0.01666 0.61 0.03 c-0.01334 -0.52 -0.19668 -0.85666 -0.55002 -1.01 s-0.81 -0.23 -1.37 -0.23 c-0.30666 0 -0.66 0.03666 -1.06 0.11 s-0.83334 0.18334 -1.3 0.33 l-0.32 -1.1 c-0.04 -0.14666 -0.09666 -0.36 -0.17 -0.64 s-0.12334 -0.5 -0.15 -0.66 c0.66666 -0.22666 1.2967 -0.39 1.89 -0.49 s1.13 -0.15 1.61 -0.15 c1.4133 0 2.5066 0.33666 3.28 1.01 s1.16 1.75 1.16 3.23 l0 5.86 c-0.52 0.14666 -1.12 0.29 -1.8 0.43 s-1.4133 0.21 -2.2 0.21 c-0.69334 0 -1.3233 -0.06 -1.89 -0.18 s-1.0533 -0.32 -1.46 -0.6 s-0.72 -0.64666 -0.94 -1.1 s-0.33 -1.0067 -0.33 -1.66 s0.13666 -1.2 0.41 -1.64 s0.62668 -0.79 1.06 -1.05 s0.92 -0.44334 1.46 -0.55 s1.0833 -0.16 1.63 -0.16 z"></path>
                </g>
              </svg>
            </div>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        {isMenuOpen ? (
          <div className="md:hidden cancel">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="md:hidden hamburger">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="menu hidden md:flex gap-5">
          <ul className="flex gap-10 font-semibold items-center text-gray-200 tracking-wide text-base mr-3">
            <li>
              <Link href={"/six-charts"} className="hover:text-white">
                6 Charts
              </Link>
            </li>
            <li>
              <Link href={"/chart-analyzer"} className="hover:text-white">
                Chart Analyzer
              </Link>
            </li>
            <li>
              <Link href={"/rsi"} className="hover:text-white">
                RSI
              </Link>
            </li>
            <li>
              <Link href={"/sma"} className="hover:text-white">
                SMA
              </Link>
            </li>
            <li>
              <Link href={"/atr"} className="hover:text-white">
                ATR
              </Link>
            </li>
          </ul>
          <div className="btn">
            {session ? (
              <Button onClick={() => signOut()} className="sign-btn">
                Log out
              </Button>
            ) : (
              <Link href={"/sign-in"}>
                <InteractiveHoverButton text="Get Started" className="w-44" />
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#010101] shadow-md p-4 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
          style={{ zIndex: 50 }}
        >
          <ul className="flex flex-col gap-4 font-semibold text-gray-200 tracking-wide text-base">
            <li>
              <Link href={"/six-charts"} className="hover:text-white">
                6 Charts
              </Link>
            </li>
            <li>
              <Link href={"/chart-analyzer"} className="hover:text-white">
                Chart Analyzer
              </Link>
            </li>
            <li>
              <Link href={"/rsi"} className="hover:text-white">
                RSI
              </Link>
            </li>
            <li>
              <Link href={"/sma"} className="hover:text-white">
                SMA
              </Link>
            </li>
            <li>
              <Link href={"/atr"} className="hover:text-white">
                ATR
              </Link>
            </li>
          </ul>
          <div className="btn mt-4">
            {session ? (
              <Button onClick={() => signOut()} className="sign-btn w-full">
                Log out
              </Button>
            ) : (
              <Link href={"/sign-in"}>
                <InteractiveHoverButton text="Get Started" className="w-full" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;