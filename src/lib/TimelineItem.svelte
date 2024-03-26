<script>
    import gitIcon from "../assets/icons/vscode-icons-main/icons/light/source-control.svg";
    import lightIcon from "../assets/icons/vscode-icons-main/icons/light/lightbulb.svg";

    export let company;
    export let job;
    export let date;
    export let location;
    export let content = {};
    export let techList = "";
</script>

<div class="exp-title">
    <div class="tag">
        <img src={gitIcon} alt="" />
        <div class="name">
            <span>{company}</span>
        </div>
    </div>
    <div class="job-title">
        <span class="job-position">{job}</span>
        <span class="job-date">{date}</span>
        <span class="job-location">{location}</span>
    </div>
</div>
{#if Object.keys(content).length !== 0}
    <ul>
        {#each Object.entries(content) as [key, value]}
            <li><b>{key} :</b> {value}</li>
        {/each}
    </ul>
    <div class="tech">
        <img src={lightIcon} alt="" />
        <span>{techList}</span>
    </div>
{/if}

<style>
    .job-title {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }

    .job-position {
        font-weight: bold;
    }

    .job-date {
        font-style: italic;
    }

    .job-location {
        font-size: smaller;
    }

    li {
        font-size: 0.9em;
    }

    ul {
        margin-block: 10px;
    }

    .tech {
        font-size: 0.9em;
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .exp-title {
        height: 26px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }

    .tag {
        display: flex;
        gap: 3px;
        align-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #007acc;
        padding: 1px 1px 1px 5px;
    }

    .tag > :first-child {
        height: 14px;
    }

    .tag .name {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 0 3px;
        min-height: 20px;
        background-color: #252526;
        font-weight: bold;
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>
