<script>
  import chevronRightIcon from "./assets/icons/vscode-icons-main/icons/dark/chevron-right.svg";
  import passIcon from "./assets/icons/vscode-icons-main/icons/dark/pass.svg";
  import langageIcon from "./assets/icons/vscode-icons-main/icons/dark/symbol-namespace.svg";
  import databaseIcon from "./assets/icons/vscode-icons-main/icons/dark/database.svg";
  import gearIcon from "./assets/icons/vscode-icons-main/icons/dark/gear.svg";
  import chevronIcon from "./assets/icons/vscode-icons-main/icons/dark/hubot.svg";
  import classIcon from "./assets/icons/vscode-icons-main/icons/dark/symbol-class.svg";
  import uxIcon from "./assets/icons/vscode-icons-main/icons/dark/vm-active.svg";
  import writeIcon from "./assets/icons/vscode-icons-main/icons/dark/edit.svg";
  import learnIcon from "./assets/icons/vscode-icons-main/icons/dark/mortar-board.svg";

  import Fa from "svelte-fa";
  import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
  import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

  import IconLabel from "./lib/IconLabel.svelte";
  import SideBarSection from "./lib/SideBarSection.svelte";
  import SideBarTree from "./lib/SideBarTree.svelte";
</script>

<div class="sidebar">
  <SideBarSection title="Informations">
    <div class="info">
      <Fa icon={faMapMarkerAlt} />
      <span>2, route de Kerjakez, 29800 La Forest-Landerneau</span>
      <Fa icon={faPhone} />
      <span>0650970542</span>
      <Fa icon={faEnvelope} />
      <span
        ><a href="mailto:benoit.rouxel@live.fr">benoit.rouxel@live.fr</a></span
      >
      <Fa icon={faLinkedin} />
      <span>
        <a
          href="https://www.linkedin.com/in/benoit-rouxel-a71a68119/"
          target="_blank">benoit-rouxel</a
        >
      </span>
      <img src={passIcon} alt="" />
      <span>Permis B</span>
      <img src={passIcon} alt="" />
      <span>TOEIC: 870</span>
    </div>
  </SideBarSection>

  <SideBarSection title="Compétences">
    <SideBarTree root="Techniques">
      <IconLabel
        iconPath={langageIcon}
        text="Javascript, Golang, Java, Python, C++"
      />
      <IconLabel
        iconPath={databaseIcon}
        text="Opensearch, SQlite, PostgreSQL, MongoDB, Chroma"
      />
      <IconLabel iconPath={gearIcon} text="DevOps, Agile, TDD" />
      <IconLabel iconPath={chevronIcon} text="IA (LLM, Speech2Text), Docker" />
    </SideBarTree>
    <SideBarTree root="Fonctionnelles">
      <IconLabel
        iconPath={classIcon}
        text="À l'écoute, moteur, enthousiaste, curieux, initiative"
      />
      <IconLabel iconPath={uxIcon} text="Rédaction de use case, UX" />
      <IconLabel
        iconPath={writeIcon}
        text="Contribution à réponses à appels d'offre"
      />
      <IconLabel iconPath={learnIcon} text="Mise en place de formations" />
    </SideBarTree>
  </SideBarSection>

  <SideBarSection title="Cursus">
    <SideBarTree icon={passIcon} root="Telecom Bretagne">
      <IconLabel iconPath={chevronRightIcon} text="2011 – 2014" />
    </SideBarTree>
    <SideBarTree
      icon={passIcon}
      root="École Nationale Supérieure d'Ingénieurs de Bretagne-Sud"
    >
      <IconLabel iconPath={chevronRightIcon} text="2008 – 2011" />
    </SideBarTree>
    <SideBarTree icon={passIcon} root="Classe préparatoire Math-Physique">
      <IconLabel iconPath={chevronRightIcon} text="2006 – 2008" />
    </SideBarTree>
  </SideBarSection>
</div>

<style>
  .sidebar {
    padding-top: 40px;
    flex-shrink: 0;
    width: 55mm;
    background-color: #1b1b1c;
    color: #ffffff;
    display: flex;
    flex-direction: column;

    & a {
      color: white;
      text-decoration: none;
    }
  }

  .info {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 5px;
    font-size: 0.9em;
  }
</style>
