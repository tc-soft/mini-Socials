import React from "react";
import "./styles.scss";

export default function App() {
  return (
    <React.Fragment>
      <footer>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <g className="iconLinkedinFill">
                    <rect
                      className="iconLinkedinFill1"
                      width="256"
                      height="256"
                      rx="20"
                    />
                    <path
                      className="iconLinkedinFill2"
                      d="M17.194 0C7.64179 0.955224 0.477612 8.59701 0 18.1493V237.373C0.477612 247.403 8.59701 256 19.1045 256H236.896C247.403 256 256 247.403 256 237.373V18.1493C256 8.59701 248.358 0.955224 239.284 0H17.194ZM75.9403 217.791H38.209V96H75.9403V217.791ZM57.3134 79.2836C44.8955 79.2836 34.8657 69.2537 34.8657 57.3134C34.8657 44.8955 44.8955 35.3433 56.8358 35.3433C69.2537 35.3433 79.2836 44.8955 79.2836 57.3134C79.2836 69.2537 69.2537 79.2836 57.3134 79.2836ZM218.269 217.791H180.06V158.567C180.06 144.239 180.06 126.09 160.478 126.09C140.896 126.09 137.552 141.373 137.552 157.612V217.791H99.8209V96H136.119V112.716H136.597C144.239 99.8209 158.09 92.1791 172.896 92.6567C211.104 92.6567 218.269 117.97 218.269 150.925V217.791Z"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 496 512"
                >
                  <g className="iconGitHUBFill">
                    <path
                      className="iconGitHUBFill1"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6
                                    0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2
                                    1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2
                                    2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6
                                    4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8
                                    205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70
                                    15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9
                                    2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1
                                    16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3
                                    2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9
                                    62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7
                                    25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9
                                    17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8
                                    496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1
                                    3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7
                                    1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4
                                    35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6
                                    1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <g className="iconFacebookFill">
                    <path
                      className="iconFacebookFill1"
                      d="M256 128c0,-71 -57,-128 -128,-128 -71,0 -128,57 -128,128 0,64 47,117 108,126l0 -89 -32 0 0 -37 32 0 0 -28c0,-32 19,-50 48,-50 14,0 29,2 29,2l0 32 -16 0c-16,0 -21,10 -21,20l0 24 36 0 -6 37 -30 0 0 89c61,-9 108,-62 108,-126z"
                    />
                    <path
                      className="iconFacebookFill2"
                      d="M178 165l6 -37 -36 0 0 -24c0,-10 5,-20 21,-20l16 0 0 -32c0,0 -15,-2 -29,-2 -29,0 -48,18 -48,50l0 28 -32 0 0 37 32 0 0 89c7,1 13,2 20,2 7,0 13,-1 20,-2l0 -89 30 0z"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 363 256"
                >
                  <g className="iconYoutubeFill">
                    <path
                      className="iconYoutubeFill1"
                      d="M355 40c-4,-16 -16,-28 -32,-32 -28,-8 -141,-8 -141,-8 0,0 -114,0 -142,8 -16,4 -28,16 -32,32 -8,28 -8,88 -8,88 0,0 0,59 8,88 4,16 16,28 32,32 28,8 142,8 142,8 0,0 113,0 141,-8 16,-4 28,-16 32,-32 8,-29 8,-88 8,-88 0,0 0,-60 -8,-88z"
                    />
                    <polygon
                      className="iconYoutubeFill2"
                      points="144,182 239,128 144,74 "
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="mailto:test@test.pl?subject=Kontakt%20WEB&body=Napisz%20coś"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 363 256"
                >
                  <g className="iconMailFill">
                    <rect
                      className="iconMailFill1"
                      y="39"
                      width="363"
                      height="164"
                    />
                    <path
                      className="iconMailFill2"
                      d="M356.123 84.5333C358.888 82.4667 363 84.4 363 87.6667V224C363 241.667 347.757 256 328.969 256H34.0312C15.2432 256 0 241.667 0 224V87.7333C0 84.4 4.04121 82.5333 6.87715 84.6C22.7584 96.2 43.8152 110.933 116.132 160.333C131.091 170.6 156.331 192.2 181.5 192.067C206.811 192.267 232.547 170.2 246.939 160.333C319.256 110.933 340.242 96.1333 356.123 84.5333ZM181.5 170.667C197.948 170.933 221.629 151.2 233.539 143.067C327.622 78.8667 334.782 73.2667 356.477 57.2667C360.589 54.2667 363 49.6 363 44.6667V32C363 14.3333 347.757 0 328.969 0H34.0312C15.2432 0 0 14.3333 0 32V44.6667C0 49.6 2.41055 54.2 6.52266 57.2667C28.2176 73.2 35.3783 78.8667 129.461 143.067C141.371 151.2 165.052 170.933 181.5 170.667Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="legal">
          <ul>
            <li>
              <a href="#top">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#top">Privacy Policy</a>
            </li>
            <li>&copy; 2020.10 TC-Soft</li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}
