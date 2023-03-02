import {
  UserLockSvg,
  CloudSvg,
  NetworkWiredSvg,
  FillToolSvg,
  SmartToySvg,
  DatabaseSvg,
  ManageAccountsSvg,
} from "./assets/icons/SvgIconEngine";
export const categories = [
  {
    Name: "Cloud",
    IconName: CloudSvg,
    Background: "rgba(75, 86, 210, 1)",
  },
  {
    Name: "Security",
    IconName: UserLockSvg,
    Background: "rgba(130, 195, 236, 1)",
  },
  {
    Name: "Networking",
    IconName: NetworkWiredSvg,
    Background: "rgba(234, 192, 79, 1)",
  },
  {
    Name: "Developer",
    IconName: FillToolSvg,
    Background: "rgba(235, 192, 171, 1)",
  },
  { Name: "AI/ML", IconName: SmartToySvg, Background: "rgba(75, 86, 210, 1)" },
  {
    Name: "Data engineering",
    IconName: DatabaseSvg,
    Background: "rgba(130, 195, 236, 1)",
  },
  {
    Name: "Project Management",
    IconName: ManageAccountsSvg,
    Background: "rgba(234, 192, 79, 1)",
  },
];
