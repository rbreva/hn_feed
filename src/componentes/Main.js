import React, {useState} from 'react';
import ListPosts from './ListPosts';

const Main = () =>{

      
    const [posts] = useState(
      [{
        "_id": {
          "$oid": "6161960ef10bf8f4d7d8265b"
        },
        "objectID": "28803570",
        "title": null,
        "story_title": "Ping the world (2015)",
        "author": "CompuHacker",
        "story_url": "https://erikbern.com/2015/04/26/ping-the-world.html",
        "url": null,
        "created_at": "2021-10-08T20:04:03.000Z"
      },{
        "_id": {
          "$oid": "6161960ef10bf8f4d7d8265c"
        },
        "objectID": "28803414",
        "title": null,
        "story_title": "1 Year of Coinbase as a mission focused company – Brian Armstrong",
        "author": "niyazpk",
        "story_url": "https://twitter.com/brian_armstrong/status/1443727729476530178",
        "url": null,
        "created_at": "2021-10-08T19:52:06.000Z"
      },{
        "_id": {
          "$oid": "6161960ef10bf8f4d7d8265f"
        },
        "objectID": "28802181",
        "title": null,
        "story_title": "Cloudflare doesn’t have to cut off copyright-infringing websites, judge rules",
        "author": "mintplant",
        "story_url": "https://arstechnica.com/tech-policy/2021/10/cloudflare-doesnt-have-to-cut-off-copyright-infringing-websites-judge-rules/",
        "url": null,
        "created_at": "2021-10-08T18:02:28.000Z"
      },{
        "_id": {
          "$oid": "6161960ef10bf8f4d7d82660"
        },
        "objectID": "28801257",
        "title": null,
        "story_title": "Why Multitasking Doesn't Work",
        "author": "toss1",
        "story_url": "https://health.clevelandclinic.org/science-clear-multitasking-doesnt-work/",
        "url": null,
        "created_at": "2021-10-08T16:46:23.000Z"
      },{
        "_id": {
          "$oid": "6161960ef10bf8f4d7d82661"
        },
        "objectID": "28800504",
        "title": null,
        "story_title": "ETL Pipelines with Airflow: The Good, the Bad and the Ugly",
        "author": "0x500x79",
        "story_url": "https://airbyte.io/blog/airflow-etl-pipelines",
        "url": null,
        "created_at": "2021-10-08T15:43:31.000Z"
      },{
        "_id": {
          "$oid": "6161960ef10bf8f4d7d82664"
        },
        "objectID": "28799229",
        "title": null,
        "story_title": "Ask HN: Practically accepting cryptocurrency for businesses without middlemen?",
        "author": "arcticbull",
        "story_url": null,
        "url": null,
        "created_at": "2021-10-08T13:45:37.000Z"
      },{
        "_id": {
          "$oid": "6161960ef10bf8f4d7d82663"
        },
        "objectID": "28799262",
        "title": null,
        "story_title": null,
        "author": "kylelee99",
        "story_url": null,
        "url": null,
        "created_at": "2021-10-08T13:48:42.000Z"
      },{
        "_id": {
          "$oid": "6161960ef10bf8f4d7d82662"
        },
        "objectID": "28800006",
        "title": null,
        "story_title": "Ask HN: Practically accepting cryptocurrency for businesses without middlemen?",
        "author": "PretzelPirate",
        "story_url": null,
        "url": null,
        "created_at": "2021-10-08T14:54:33.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9cf"
        },
        "objectID": "28808871",
        "title": null,
        "story_title": "Git as a Storage",
        "author": "eternalban",
        "story_url": "https://bronevichok.ru/posts/git-as-a-storage.html",
        "url": null,
        "created_at": "2021-10-09T11:20:47.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d1"
        },
        "objectID": "28807832",
        "title": null,
        "story_title": "El Salvador's Bitcoin use grows but headaches persist",
        "author": "jakopo87",
        "story_url": "https://www.reuters.com/technology/one-month-el-salvadors-bitcoin-use-grows-headaches-persist-2021-10-07/",
        "url": null,
        "created_at": "2021-10-09T07:41:27.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d2"
        },
        "objectID": "28807315",
        "title": null,
        "story_title": "ETL Pipelines with Airflow: The Good, the Bad and the Ugly",
        "author": "thundergolfer",
        "story_url": "https://airbyte.io/blog/airflow-etl-pipelines",
        "url": null,
        "created_at": "2021-10-09T05:34:15.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d3"
        },
        "objectID": "28806720",
        "title": null,
        "story_title": "The Uncertain Future of Ham Radio",
        "author": "gpsx",
        "story_url": "https://spectrum.ieee.org/ham-radio",
        "url": null,
        "created_at": "2021-10-09T03:17:26.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d4"
        },
        "objectID": "28806275",
        "title": null,
        "story_title": "1 Year of Coinbase as a mission focused company",
        "author": "AgentME",
        "story_url": "https://twitter.com/brian_armstrong/status/1443727729476530178",
        "url": null,
        "created_at": "2021-10-09T01:45:44.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d5"
        },
        "objectID": "28805817",
        "title": null,
        "story_title": "The Uncertain Future of Ham Radio",
        "author": "tlrobinson",
        "story_url": "https://spectrum.ieee.org/ham-radio",
        "url": null,
        "created_at": "2021-10-09T00:28:10.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d0"
        },
        "objectID": "28807951",
        "title": null,
        "story_title": "El Salvador's Bitcoin use grows but headaches persist",
        "author": "jakopo87",
        "story_url": "https://www.reuters.com/technology/one-month-el-salvadors-bitcoin-use-grows-headaches-persist-2021-10-07/",
        "url": null,
        "created_at": "2021-10-09T08:09:56.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d6"
        },
        "objectID": "28804641",
        "title": null,
        "story_title": "GPU.js",
        "author": "worldsayshi",
        "story_url": "https://gpu.rocks/#/",
        "url": null,
        "created_at": "2021-10-08T22:02:20.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d8"
        },
        "objectID": "28803311",
        "title": null,
        "story_title": "Show HN: Rimgu – Self-hosted free and ad/trackless front end for imgur",
        "author": "3np",
        "story_url": "https://codeberg.org/3np/rimgu",
        "url": null,
        "created_at": "2021-10-08T19:42:23.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d9"
        },
        "objectID": "28802953",
        "title": "Node.js – v16.11.0",
        "story_title": null,
        "author": "bricss",
        "story_url": null,
        "url": "https://nodejs.org/en/blog/release/v16.11.0/",
        "created_at": "2021-10-08T19:13:23.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9da"
        },
        "objectID": "28798302",
        "title": "Retiring the Node.js Community Committee",
        "story_title": null,
        "author": "el_duderino",
        "story_url": null,
        "url": "https://nodejs.org/en/blog/announcements/retiring-the-node-js-community-committee/",
        "created_at": "2021-10-08T12:10:28.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9db"
        },
        "objectID": "28797246",
        "title": null,
        "story_title": "How the .NET Foundation kerfuffle became a brouhaha",
        "author": "oaiey",
        "story_url": "https://robmensching.com/blog/posts/2021/10/6/how-the-.net-foundation-kerfuffle-became-a-brouhaha/",
        "url": null,
        "created_at": "2021-10-08T09:22:04.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9d7"
        },
        "objectID": "28804220",
        "title": null,
        "story_title": "GPU.js",
        "author": "manomanomano",
        "story_url": "https://gpu.rocks/#/",
        "url": null,
        "created_at": "2021-10-08T21:08:32.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9dc"
        },
        "objectID": "28791785",
        "title": null,
        "story_title": "Steve Jobs tried to convince Dell to license Mac software",
        "author": "nodejs_rulez_1",
        "story_url": "https://www.cnet.com/tech/computing/the-steve-jobs-deal-with-dell-that-could-have-changed-apple-and-tech-history/",
        "url": null,
        "created_at": "2021-10-07T20:43:04.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9dd"
        },
        "objectID": "28791734",
        "title": null,
        "story_title": "Steve Jobs tried to convince Dell to license Mac software",
        "author": "nodejs_rulez_1",
        "story_url": "https://www.cnet.com/tech/computing/the-steve-jobs-deal-with-dell-that-could-have-changed-apple-and-tech-history/",
        "url": null,
        "created_at": "2021-10-07T20:38:35.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9de"
        },
        "objectID": "28791244",
        "title": null,
        "story_title": "Ask HN: Why is Node.js hated so much?",
        "author": "loginx",
        "story_url": null,
        "url": null,
        "created_at": "2021-10-07T19:51:08.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9e0"
        },
        "objectID": "28787422",
        "title": null,
        "story_title": "Terraform vs. AWS CloudFormation",
        "author": "vesuvianvenus",
        "story_url": "https://gswallow.medium.com/do-not-use-aws-cloudformation-7cf61f58bd5f",
        "url": null,
        "created_at": "2021-10-07T15:16:28.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9e1"
        },
        "objectID": "28783073",
        "title": null,
        "story_title": "Terraform vs. AWS CloudFormation",
        "author": "__turbobrew__",
        "story_url": "https://gswallow.medium.com/do-not-use-aws-cloudformation-7cf61f58bd5f",
        "url": null,
        "created_at": "2021-10-07T06:56:31.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9df"
        },
        "objectID": "28790372",
        "title": null,
        "story_title": "Ask HN: Why is Node.js hated so much?",
        "author": "synergy20",
        "story_url": null,
        "url": null,
        "created_at": "2021-10-07T18:32:41.000Z"
      },{
        "_id": {
          "$oid": "6161983003906f57bce9e9e2"
        },
        "objectID": "28782579",
        "title": null,
        "story_title": "Terraform vs. AWS CloudFormation",
        "author": "__turbobrew__",
        "story_url": "https://gswallow.medium.com/do-not-use-aws-cloudformation-7cf61f58bd5f",
        "url": null,
        "created_at": "2021-10-07T05:49:06.000Z"
      }]
    );

    return(
        <main>
        <section>
            <ListPosts posts={posts} />
        </section>
    </main>  
    )
}

export default Main;