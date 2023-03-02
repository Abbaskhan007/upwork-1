import { FaUserLock } from "react-icons/fa";
import {
  CloudMiniSvg,
  NetworkWiredMiniColoredSvg,
  NetworkWiredMiniSvg,
  SignalMiniSvg,
  GoogleMiniSvg,
  AmazonMiniSvg,
  MicrosoftMiniSvg,
  DollarMiniSvg,
  ToolBlackSvg,
  ToolPinkSvg,
  DatabaseBlueMiniSvg,
  DatabaseMiniSvg,
} from "./assets/icons/SvgIconEngine";
export const certifications = [
  {
    Company: "Google",
    Certification: "Prof. Cloud",
    Designation: "Security Engineer",
    CategoryIcon: FaUserLock,
    Category: "Security",
    Title: " Professional Cloud Security Engineer",
    Background: "linear-gradient(179.97deg, #4B56D2 30.69%, #82C3EC 99.97%)",
    CategoryDetails: [
      {
        Icon: CloudMiniSvg,
        IconTitle: "Cloud",
      },
      {
        Icon: FaUserLock,
        IconTitle: "Security",
      },
      {
        Icon: SignalMiniSvg,
        IconTitle: "Professional",
      },
      {
        Icon: GoogleMiniSvg,
        IconTitle: "Google",
      },
    ],
  },
  {
    Company: "Google",
    Certification: "Prof. Cloud",
    Designation: "Network Engineer",
    Category: "Networking",
    CategoryIcon: NetworkWiredMiniColoredSvg,
    Title: "Professional Cloud Network Engineer",
    Background: "linear-gradient(179.32deg, #4B56D2 41.16%, #EAC04F 99.41%)",
    CategoryDetails: [
      {
        Icon: CloudMiniSvg,
        IconTitle: "Cloud",
      },
      {
        Icon: NetworkWiredMiniSvg,
        IconTitle: "Network",
      },
      {
        Icon: SignalMiniSvg,
        IconTitle: "Professional",
      },
      {
        Icon: GoogleMiniSvg,
        IconTitle: "Google",
      },
    ],
  },
  {
    Company: "AWS",
    Certification: "AWS Cert. Dev -",
    Designation: "Associate",
    CategoryIcon: ToolPinkSvg,
    Category: "Developer",
    Title: "AWS Certified Developer - Associate",
    Background: "linear-gradient(179.97deg, #4B56D2 13.54%, #F5C7A9 99.98%)",
    CategoryDetails: [
      {
        Icon: CloudMiniSvg,
        IconTitle: "Cloud",
      },
      {
        Icon: ToolBlackSvg,
        IconTitle: "Developer",
      },
      {
        Icon: SignalMiniSvg,
        IconTitle: "Associate",
      },
      {
        Icon: AmazonMiniSvg,
        IconTitle: "Amazon",
      },
    ],
  },
  {
    Company: "Google",
    Certification: "Cloud Cert.",
    Designation: "Data Engineer",
    CategoryIcon: DatabaseBlueMiniSvg,
    Category: "Data Engineer",
    Title: "Cloud Certified Data Engineer",
    Background: "linear-gradient(179.97deg, #4B56D2 30.69%, #82C3EC 99.97%)",
    CategoryDetails: [
      {
        Icon: CloudMiniSvg,
        IconTitle: "Cloud",
      },
      {
        Icon: DatabaseMiniSvg,
        IconTitle: "Data Eng.",
      },
      {
        Icon: GoogleMiniSvg,
        IconTitle: "Google",
      },
      {
        Icon: DollarMiniSvg,
        IconTitle: "200",
      },
    ],
  },
  {
    Company: "Microsoft",
    Certification: "Azure Security",
    Designation: "Eng. Associate",
    CategoryIcon: FaUserLock,
    Category: "Security",
    Title: "Azure Security Engineer Associate",
    Background: "linear-gradient(179.97deg, #4B56D2 30.69%, #82C3EC 99.97%)",
    CategoryDetails: [
      {
        Icon: CloudMiniSvg,
        IconTitle: "Cloud",
      },
      {
        Icon: FaUserLock,
        IconTitle: "Security",
      },
      {
        Icon: SignalMiniSvg,
        IconTitle: "Associate",
      },
      {
        Icon: MicrosoftMiniSvg,
        IconTitle: "Microsoft",
      },
      ,
    ],
  },
  {
    Company: "AWS",
    Certification: "AWS Cert. Sol.",
    Designation: "Arch. - Associate",
    CategoryIcon: null,
    Category: "Proj. Management",
    Title: "AWS Certified Solutions Architect - Associate",
    Background: "#4B56D2",
    CategoryDetails: [
      {
        Icon: CloudMiniSvg,
        IconTitle: "Cloud",
      },

      {
        Icon: SignalMiniSvg,
        IconTitle: "Associate",
      },
      {
        Icon: AmazonMiniSvg,
        IconTitle: "Amazon",
      },
      {
        Icon: DollarMiniSvg,
        IconTitle: "200",
      },
    ],
  },
];

export const categoriesList = [
  {
    title: "Cloud",
  },
];
