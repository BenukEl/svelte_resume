<script>
    import TimelineItem from "./lib/TimelineItem.svelte";

    const experiences = [
        {
            company: "thales",
            job: "Développeur",
            date: "Janv. 2023 - Aujourd'hui",
            location: "Brest",
            techList:
                "devops, architecture, user story, golang, LLM, react, notejs, opensearch, python",
            detail: {
                "Développement de POCs": `Conception et réalisation de prototypes, incluant une visualisation 3D,
                l'exploitation de données sur une plateforme Big Data et de l'IA générative.`,
                "Application Web": `Responsable de l'architecture, de l'intégration continue (CI/CD), la qualité
                du code, la sécurité et la scalabilité. Création des user story et discussion avec les utilisateurs.`,
                "Leadership Technique": `Création et animation d'un groupe d'échange entre développeurs pour
                partager les connaissances sur les nouvelles technologies.`,
            },
        },
        {
            company: "fortuneo",
            job: "Développeur",
            date: "Sept. 2022 - Janv. 2023",
            location: "Brest",
            techList: "react, spring boot, web extension, mongodb",
            detail: {
                "Développement Full Stack": `Développement d'applications full stack utilisant React et Spring.`,
                "Innovation et automatisation": `Conception d'un addon navigateur pour intégrer les résultats de
                SonarQube dans les MR GitLab et réalisation d'un script pour automatiser la configuration des postes de
                travail des nouveaux arrivants, optimisant les processus de développement.`,
            },
        },
        {
            company: "geomod",
            job: "Tech Lead",
            date: "Janv. 2018 - Avr. 2022",
            location: "Brest",
            techList:
                "User story, Maquette UX, architecture, build, Javascript, Java, nodejs, SQLite, Géomatique",
            detail: {
                "Plateforme web de Géomatiques marine": `Lead de l'équipe de développement de la solutions,
                de la définition des besoins clients à la mise en production, en passant par la conception UX et
                l'architecture de solutions.`,
                "Gestion d'équipe et mentorat": `Attribution des tâches et mentorat des membres de l'équipe de
                développement, favorisant le développement professionnel et la réussite du projet.`,
            },
        },
        {
            company: "silicom",
            job: "Développeur R&D",
            date: "Sept. 2016 - Janv. 2018",
            location: "Brest",
            techList:
                "angularjs, spring, nodejs, mongodb, biométrie comportementale, web extension",
            detail: {
                "R&D et innovation": `Contribution à la recherche et au développement dans le service R&D
                d'Arkéa, avec un focus sur la biométrie comportementale, la reconnaissance du locuteur et le
                développement d'extentions web.`,
                "Développement Full Stack et IA": `Développement d'une plateforme de démonstration full stack et
                d'un service de consultation de comptes via Google Home, utilisant des technologies d'intelligence
                artificielle pour la reconnaissance vocale.`,
            },
        },
        {
            company: "agriwatcher",
            job: "CTO",
            date: "Févr. 2016 - Juin 2016",
            location: "Saint-Gouëno",
        },
        {
            company: "sopra steria",
            job: "Développeur",
            date: "Oct. 2015 - Févr. 2016",
            location: "Rennes",
        },
        {
            company: "télécom bretagne",
            job: "Thésard",
            date: "Oct. 2011 - Oct. 2014",
            location: "Plouzané",
        },
    ];
</script>

<div class="timeline">
    {#each experiences as exp}
        <div class="job">
            <TimelineItem
                company={exp.company}
                job={exp.job}
                date={exp.date}
                location={exp.location}
                techList={exp.techList}
                content={exp.detail}
            />
        </div>
    {/each}
</div>

<style>
    .timeline {
        list-style: none;
        padding-left: 0;
        position: relative;
        padding: 5px 20px 20px 0;
        color: #c5c5c5;
        text-align: justify;
    }

    .timeline::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 14px;
        /* Ajustement pour aligner avec le point central */
        width: 4px;
        background: #007acc;
        /* Couleur de la ligne bleue */
    }

    .timeline .job {
        margin-bottom: 20px;
        /* Ajustez selon l'espace nécessaire entre les points */
        padding-left: 40px;
        /* Espace pour la ligne et le point */
        position: relative;
    }

    .timeline .job::before {
        content: "";
        position: absolute;
        left: 8px;
        /* Ajustement pour que la bordure externe soit alignée avec la ligne */
        top: 13px;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid #1b1b1c;
        /* Couleur du cercle bleu */
        z-index: 3;
        /* Pour s'assurer que le cercle soit au-dessus de la ligne */
    }

    .timeline .job::after {
        content: "";
        position: absolute;
        left: 10px;
        /* Ajustement pour aligner le point central avec la ligne */
        top: 13px;
        transform: translateY(-50%);
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: #007acc;
        /* Couleur du point central */
        z-index: 2;
        /* Pour s'assurer que le point central soit au-dessus du cercle */
    }
</style>
