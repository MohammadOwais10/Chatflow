import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ExploreIcon from "@mui/icons-material/Explore";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@material-ui/core";
import Horse from "../../assets/Horse.jpg";
import Sunset from "../../assets/Sunset.jpg";
import Sicon from "../../assets/Sicon.jpg";
import Space from "../../assets/Space.jpg";

/**************** Data collection for Popup Sidebar ****************************/
export const SidePopup = [
  {
    icon: (
      <SportsEsportsIcon
        style={{
          color: "white",
          background: "#005EB8",
          borderRadius: "50px",
          padding: "0.5rem",
        }}
      />
    ),
  },
  {
    icon: (
      <PeopleAltIcon
        style={{
          color: "white",
          background: "#50C878",
          borderRadius: "50%",
          padding: "0.5rem",
        }}
      />
    ),
  },
  {
    icon: (
      <MarkEmailUnreadIcon
        style={{
          color: "white",
          background: "#C70039",
          borderRadius: "50%",
          padding: "0.5rem",
        }}
      />
    ),
  },
  {
    icon: (
      <Avatar
        src={Space}
        style={{
          borderRadius: "50%",
          width: "5.5vw",
          height: "8vh",
        }}
      />
    ),
  },
  {
    icon: (
      <AddIcon
        style={{
          color: "white",
          background: "#C70039",
          borderRadius: "50%",
          padding: "0.5rem",
        }}
      />
    ),
  },

  {
    icon: (
      <Avatar
        src={Sunset}
        style={{
          borderRadius: "50%",
          width: "5.5vw",
          height: "8vh",
        }}
      />
    ),
  },
  {
    icon: (
      <Avatar
        src={Sicon}
        style={{
          borderRadius: "50%",
          width: "5.5vw",
          height: "8vh",
        }}
      />
    ),
  },
  {
    icon: (
      <Avatar
        src={Horse}
        style={{
          borderRadius: "50%",
          width: "5.5vw",
          height: "8vh",
        }}
      />
    ),
  },
  {
    icon: (
      <AddIcon
        style={{
          color: "#4CBB17",
          background: "#525252",
          borderRadius: "50%",
          padding: "0.5rem",
        }}
      />
    ),
  },
  {
    icon: (
      <ExploreIcon
        style={{
          color: "#4CBB17",
          background: "#525252",
          borderRadius: "50%",
          padding: "0.5rem",
        }}
      />
    ),
  },
  {
    icon: (
      <DownloadIcon
        style={{
          color: "#4CBB17",
          background: "#525252",
          borderRadius: "50%",
          padding: "0.5rem",
        }}
      />
    ),
  },
];

/**************** Data collection of Section Part ****************************/
export const SectionLink = [
  {
    title: "Friends",
    path: "/",
    icon: <SupervisedUserCircleIcon />,
  },
  {
    title: "Nitro",
    path: "/Nitro",
    icon: <AcUnitIcon />,
  },
  {
    title: "Message Request",
    path: "/Message",
    icon: <EmailIcon />,
  },
];

/**************** Data collection of Members ********************************/
export const MemberList = [
  {
    name: "Crypserve, BeardedBro",
    member: "3 Members",
    online: true,
    pending: false,
    blocked: false,
    message: false,
    icon: (
      <PeopleAltIcon
        style={{
          background: "#50C878",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "BeardedBro",
    member: "",
    online: true,
    pending: false,
    blocked: false,
    message: true,
    icon: (
      <Avatar
        src={Horse}
        style={{
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "NFT",
    member: "6 Members",
    online: true,
    blocked: false,
    pending: false,
    message: true,
    icon: (
      <PeopleAltIcon
        style={{
          background: "#C70039",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "Cilnarix Support",
    member: "",
    online: false,
    pending: true,
    blocked: false,
    message: true,
    icon: (
      <SettingsSuggestIcon
        style={{
          color: "yellow",
          background: "black",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "BLOCKCHAIN BOYS",
    member: "1 Member",
    online: false,
    pending: false,
    blocked: false,
    message: false,
    icon: (
      <PeopleAltIcon
        style={{
          background: "#F4BB44",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "Immy8285, Lilithty",
    member: "4 Members",
    online: false,
    pending: false,
    blocked: false,
    message: false,
    icon: (
      <PeopleAltIcon
        style={{
          background: "orange",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "Sad clown collection",
    member: "5 Members",
    online: false,
    pending: false,
    blocked: false,
    message: false,
    icon: (
      <PeopleAltIcon
        style={{
          background: "green",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "RockPalsNFT",
    member: "2 Members",
    online: false,
    pending: false,
    blocked: true,
    message: false,
    icon: (
      <PeopleAltIcon
        style={{
          background: "lightGreen",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "Investmentjoy NFT",
    member: "4 Members",
    online: false,
    pending: true,
    blocked: false,
    message: true,
    icon: (
      <PeopleAltIcon
        style={{
          background: "darkBlue",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "Silver Coding ",
    member: "",
    online: false,
    pending: true,
    blocked: false,
    message: true,
    icon: (
      <Avatar
        src={Sicon}
        style={{
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "RockstarNFT",
    member: "3 Members",
    online: true,
    pending: true,
    blocked: false,
    message: false,
    icon: (
      <PersonIcon
        style={{
          background: "violet",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "Badbola",
    member: "",
    online: false,
    pending: false,
    blocked: true,
    message: false,
    icon: (
      <PersonIcon
        style={{
          background: "grey",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "SpaceNFT",
    member: "",
    online: true,
    pending: true,
    blocked: true,
    message: true,
    icon: (
      <Avatar
        src={Space}
        style={{
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "Horse Rider",
    member: "3 Members",
    online: false,
    pending: false,
    blocked: true,
    message: true,
    icon: (
      <PersonIcon
        style={{
          background: "#b31217",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
  {
    name: "GodFather",
    member: "9 Members",
    online: false,
    pending: true,
    blocked: false,
    message: true,
    icon: (
      <PersonIcon
        style={{
          background: "#2c3e50",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
  },
];
