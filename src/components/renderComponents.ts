import { html, render, TemplateResult } from "lit-html";
import { Navbar } from "../navigation";
import {
  arrowContainer,
  BackHomeArrow,
  LeftArrow,
  RightArrow,
} from "./NavArrows";
import {
  CodepenIcon,
  ExternalLinkIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  TodoSvg,
} from "./Icons";
import {
  CSS3Svg,
  ExpressJsSvg,
  GitSvg,
  MySqlSvg,
  HTML5Svg,
  JavaScriptSvg,
  MongoDBSvg,
  NodeJsSvg,
  JavaSvg,
  ReactSvg,
  ReduxSvg,
  TypeScriptSvg,
} from "./techSkillsIcons";
import { NavBox, NavContent } from "./NavBox";
import { addProjectInfoListeners } from "../Workpage/WorkPage";
import { ProfilePhoto } from "./profilePhoto";

export class Components {
  navbar: Navbar;
  constructor(navbar: Navbar) {
    this.navbar = navbar;
  }

  appendAboutPageComponents() {
    render(
      arrowContainer([
        LeftArrow(() => this.navbar.intro()),
        RightArrow(() => this.navbar.work()),
      ]),
      document.getElementById("about-components")!
    );
  }

  appendWorkPageComponents() {
    render(
      arrowContainer([
        LeftArrow(() => this.navbar.about()),
        RightArrow(() => this.navbar.contact()),
      ]),
      document.getElementById("work-components")!
    );
    addProjectInfoListeners();
  }

  appendContactPageComponents() {
    this.addNavBox();
    render(
      arrowContainer([LeftArrow(() => this.navbar.work())]),
      document.getElementById("contact-components")!
    );
    render(
      BackHomeArrow(() => this.navbar.intro()),
      document.getElementById("backhome-container")!
    );
  }

  addNavBox() {
    render(NavBox(), document.getElementById("contact-nav-box-container")!);
    render(
      NavContent(),
      document.getElementById("contact-nav-content-container")!
    );
  }

  addIcons() {
    this.appendIcons("github-icon", () => GitHubIcon("text-white"));
    this.appendIcons("external-link", ExternalLinkIcon);
    this.appendIcons("facebook-icon", FacebookIcon);
    this.appendIcons("linkedin-icon", LinkedinIcon);
    this.appendIcons("codepen-icon", CodepenIcon);
    this.appendIcons("instagram-icon", InstagramIcon);
    this.addTodoSvg();
  }

  appendIcons(className: string, icon: () => TemplateResult) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      render(icon(), elements.item(i)!);
    }
  }

  addTodoSvg() {
    render(TodoSvg(), document.getElementById("todo-svg-container")!);
  }

  render() {
    this.appendAboutPageComponents();
    this.appendWorkPageComponents();
    this.appendContactPageComponents();
    this.addIcons();
  }

  reRender() {
    this.addNavBox();
  }
}

export const renderDynamicComponents = () => {
  TechSlider();
  render(ProfilePhoto, document.getElementById("profile-photo-container")!);
};

const TechSlider = () => {
  const techItems = html`
    <div id="tech-slider-inner" class="my-2 relative flex items-center">
      ${tech.map((t, i) => {
    return html`
          <div
            class="flex items-center justify-center"
            style="width: 33.3333%; min-width: 33.3333%;"
          >
            ${techIcons[i]}
            <span class="flex justify-center ml-2 text-gray-600">${t}</span>
          </div>
        `;
  })}
    </div>
  `;
  render(techItems, document.getElementById("tech-slider")!);
};

const techIcons = [
  HTML5Svg,
  CSS3Svg,
  JavaScriptSvg,
  TypeScriptSvg,
  JavaSvg,
  ReactSvg,
  ReduxSvg,
  ReactSvg,
  NodeJsSvg,
  ExpressJsSvg,
  MySqlSvg,
  MongoDBSvg,
  GitSvg,
  HTML5Svg,
  CSS3Svg,
  JavaScriptSvg,
];

const tech = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Redux",
  "React Native",
  "Node.js",
  "Express",
  "MySql",
  "MongoDB",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
];
