import { html } from "lit-html";

export const NavBox = () => {
  const halfWidth = window.innerWidth / 2;
  const quarterHeight = window.innerHeight / 3;
  return html`
    <style>
      #nav-box {
        width: 0;
        height: 0;
        border-left: ${halfWidth}px solid transparent;
        border-right: ${halfWidth}px solid transparent;
        border-bottom: ${quarterHeight}px solid;
        transform: translateY(${quarterHeight}px);
        transition: transform 1s ease-in-out;
      }
    </style>
    <div id="nav-box" class="border-gray-600"></div>
  `;
};

export const NavContent = () => {
  return html`
    <style>
      #middle-row {
        margin-left: 30%;
        margin-right: 30%;
      }
      @media (max-width: 450px) {
        #middle-row {
          margin-left: 29%;
          margin-right: 29%;
        }
      }
    </style>
    <div
      id="nav-box-content"
      class="text-white flex flex-col justify-between item-center w-full"
      style="height: ${window.innerHeight / 3}px;"
    >
      <a
        href="https://www.linkedin.com/in/pratik-raj-543527214/"
        target="_blank"
        class="linkedin-icon mx-auto mt-5 sm:mt-3 w-min"
      ></a>
      <div id="middle-row" class="flex justify-between relative top-3">
        <a
          href="https://github.com/kPratik07"
          target="_blank"
          class="github-icon"
        ></a>
        <div id="backhome-container"></div>
      </div>
      <div
        class="flex justify-between mb-2"
        style="margin-left: 10%; margin-right: 10%;"
      >
        <a
          href="https://www.facebook.com/pratik.raj.140"
          target="_blank"
          class="facebook-icon"
        ></a>
        <a
          href="https://www.instagram.com/pratikraj5656/"
          target="_blank"
          class="instagram-icon"
        ></a>
      </div>
    </div>
  `;
};
