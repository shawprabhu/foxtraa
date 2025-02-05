import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="w-full  justify-between p-20 h-[30rem] mt-4 hidden lg:flex ">
        <aside className="logo flex flex-col gap-4">
          <Link href="/">
            <div className="logo w-36 flex items-center ">
              <svg
                width="429.00000000000006"
                height="96.32268378862142"
                viewBox="0 0 369.89473684210526 83.05187359421313"
                className="looka-1j8o68f"
              >
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
          <p>Copyright &copy; All rights Reserved 2025 </p>
        </aside>
        <div className="menus flex gap-14">
          <nav className="tools">
            <ul className="flex flex-col gap-3 text-[1.25rem] text-gray-300 ">
              <li className="footer-title text-2xl font-semibold opacity-65 mb-2">
                Tools
              </li>
              <Link href={"/sma"}>
                <li className="hover:text-white">SMA Data Table</li>
              </Link>
              <Link href={"/six-charts"}>
                <li className="hover:text-white">6 Charts</li>
              </Link>
              <Link href={"/chart-analyzer"}>
                <li className="hover:text-white">Chart Analyzer</li>
              </Link>
            </ul>
          </nav>
          <nav className="company">
            <ul className="flex flex-col gap-3 text-[1.25rem] text-gray-300">
              <li className="footer-title text-2xl font-semibold opacity-65 mb-2">
                Company
              </li>
              <Link href={"/about"}>
                <li className="hover:text-white">About</li>
              </Link>
              <Link href={"/careers"}>
                <li className="hover:text-white">Careers</li>
              </Link>
              <Link href={"/blog"}>
                <li className="hover:text-white">Blog</li>
              </Link>
            </ul>
          </nav>
          <nav className="social">
            <ul className="flex flex-col gap-3 text-[1.25rem] text-gray-300">
              <li className="footer-title text-2xl font-semibold opacity-65 mb-2">
                Social
              </li>
              <a
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=61561195350359"}
              >
                <li className="hover:text-white flex gap-1 ml-[-0.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </li>
              </a>
              <a
                target="_blank"
                href={
                  "https://www.linkedin.com/company/foxtraa/?viewAsMember=true"
                }
              >
                <li className="hover:text-white flex gap-1 ml-[-0.5rem] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </li>
              </a>
              <a
                target="_blank"
                href={"https://www.instagram.com/foxtraaindia/"}
              >
                <li className="hover:text-white flex gap-1 ml-[-0.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </li>
              </a>
              <a target="_blank" href={"https://discord.gg/eVasw3D8GV"}>
                <li className="hover:text-white flex gap-1 ml-[-0.5rem]">
                  <svg
                    height="22"
                    width="22"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                  >
                    <path d="M19.1719 5.71094C21.4922 9.15625 22.6523 13.0234 22.2305 17.4883C22.2305 17.4883 22.2305 17.5234 22.1953 17.5234C20.6484 18.6836 18.8906 19.5625 17.0273 20.125C16.9922 20.125 16.957 20.125 16.957 20.125C16.5703 19.5625 16.2188 19 15.9023 18.4023V18.3672C15.9023 18.332 15.9023 18.332 15.9375 18.2969C16.5 18.0859 17.0273 17.8398 17.5547 17.5234C17.5898 17.5234 17.5898 17.5234 17.5898 17.4883C17.5898 17.4531 17.5898 17.4531 17.5547 17.418C17.4492 17.3477 17.3438 17.2773 17.2383 17.1719H17.2031H17.168C13.8281 18.7188 10.1719 18.7188 6.79688 17.1719C6.76172 17.1719 6.76172 17.1719 6.76172 17.1719C6.72656 17.1719 6.72656 17.1719 6.72656 17.1719C6.62109 17.2773 6.51562 17.3477 6.41016 17.418C6.375 17.4531 6.375 17.4531 6.375 17.4883C6.375 17.5234 6.375 17.5234 6.41016 17.5234C6.90234 17.8398 7.46484 18.0859 8.02734 18.2969C8.02734 18.332 8.0625 18.332 8.0625 18.3672V18.4023C7.74609 19 7.39453 19.5625 7.00781 20.125C6.97266 20.125 6.97266 20.125 6.9375 20.125C5.03906 19.5625 3.28125 18.6836 1.76953 17.5234C1.73438 17.5234 1.73438 17.4883 1.73438 17.4883C1.38281 13.6211 2.12109 9.71875 4.79297 5.71094C4.79297 5.71094 4.79297 5.71094 4.82812 5.71094C6.12891 5.11328 7.57031 4.65625 9.01172 4.41016C9.01172 4.41016 9.01172 4.41016 9.04688 4.41016H9.08203C9.29297 4.76172 9.46875 5.14844 9.60938 5.5C10.3828 5.39453 11.1562 5.32422 11.9648 5.32422C12.7734 5.32422 13.582 5.39453 14.3555 5.5C14.4961 5.14844 14.6719 4.76172 14.8828 4.41016L14.918 4.375C14.918 4.375 14.918 4.41016 14.9531 4.41016C16.3945 4.65625 17.8359 5.11328 19.1367 5.71094C19.1719 5.71094 19.1719 5.71094 19.1719 5.71094ZM8.55469 15.1328C9.57422 15.1328 10.418 14.1836 10.418 13.0586C10.418 11.8984 9.60938 10.9844 8.55469 10.9844C7.53516 10.9844 6.69141 11.8984 6.69141 13.0586C6.69141 14.1836 7.53516 15.1328 8.55469 15.1328ZM15.4102 15.1328C16.4648 15.1328 17.2734 14.1836 17.2734 13.0586C17.3086 11.8984 16.4648 10.9844 15.4102 10.9844C14.3906 10.9844 13.582 11.8984 13.582 13.0586C13.582 14.1836 14.3906 15.1328 15.4102 15.1328Z"></path>
                  </svg>
                  Discord
                </li>
              </a>
              <a target="_blank" href={"http://www.youtube.com/@foxtraaindia"}>
                <li className="hover:text-white flex gap-1 ml-[-0.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  Youtube
                </li>
              </a>
            </ul>
          </nav>
          <nav className="legal">
            <ul className="flex flex-col gap-3 text-[1.25rem] text-gray-300">
              <li className="footer-title text-2xl font-semibold opacity-65 mb-2">
                Legal
              </li>
              <Link href={"/terms-and-conditions"}>
                <li className="hover:text-white">Terms & Conditions</li>
              </Link>
              <Link href={"/privacy-policy"}>
                <li className="hover:text-white">Privacy Policy</li>
              </Link>
            </ul>
          </nav>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="bg-[#010101] text-white py-6 text-center sm:hidden">
        <div className="logo-container flex justify-center items-center mb-6">
          <Link href="/">
            <div className="logo w-36 flex items-center ">
              <svg
                width="429.00000000000006"
                height="96.32268378862142"
                viewBox="0 0 369.89473684210526 83.05187359421313"
                className="looka-1j8o68f"
              >
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

        {/* Copyright Section */}
        <div className="mb-4">
          <p className="text-sm text-white">
            Copyright &copy; All rights Reserved 2025
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* Tools Section */}
          <div className="tools mb-6">
            <h3 className="text-2xl font-bold text-gray-300 mb-2">Tools</h3>
            <ul className="space-y-1 text-gray-300">
              <Link href={"/sma"}>
                <li className="hover:text-white">SMA Data Table</li>
              </Link>
              <Link href={"/six-charts"}>
                <li className="hover:text-white">6 Charts</li>
              </Link>
              <Link href={"/chart-analyzer"}>
                <li className="hover:text-white">Chart Analyzer</li>
              </Link>
            </ul>
          </div>

          {/* Company Section */}
          <div className="company mb-6">
            <h3 className="text-2xl font-bold text-gray-300 mb-2">Company</h3>
            <ul className="space-y-1 text-gray-300">
              <Link href={"/about"}>
                <li className="hover:text-white">About</li>
              </Link>
              <Link href={"/careers"}>
                <li className="hover:text-white">Careers</li>
              </Link>
              <Link href={"/blog"}>
                <li className="hover:text-white">Blog</li>
              </Link>
            </ul>
          </div>

          {/* Social Section */}
          <div className="mb-6">
            <h3 className=" font-bold text-gray-300 mb-2 text-2xl">Social</h3>
            <ul className="space-y-1 text-gray-300 flex flex-col ">
              <a
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=61561195350359"}
              >
                <li className="hover:text-white  items-center cursor-pointer">
                  Facebook
                </li>
              </a>
              <a
                target="_blank"
                href={
                  "https://www.linkedin.com/company/foxtraa/?viewAsMember=true"
                }
              >
                <li className="hover:text-white  cursor-pointer">LinkedIn</li>
              </a>
              <a
                target="_blank"
                href={"https://www.instagram.com/foxtraaindia/"}
              >
                <li className="hover:text-white  cursor-pointer">Instagram</li>
              </a>
              <a target="_blank" href={"https://discord.gg/eVasw3D8GV"}>
                <li className="hover:text-white  cursor-pointer">Discord</li>
              </a>
              <a target="_blank" href={"http://www.youtube.com/@foxtraaindia"}>
                <li className="hover:text-white  cursor-pointer">Youtube</li>
              </a>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-300 mb-2 ">Legal</h3>
            <ul className="space-y-1 text-gray-300">
              <Link href={"/terms-and-conditions"}>
                <li className="hover:text-white  cursor-pointer">
                  Terms & Conditions
                </li>
              </Link>
              <Link href={"/privacy-policy"}>
                <li className="hover:text-white  cursor-pointer">
                  Privacy Policy
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
