/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Background(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'doc1.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project',
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project",
      title: 'Stay up to date',
    },
  ];

  // <GridBlock contents={supportLinks} layout="threeColumn" />
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>The Spotify story</h1>
          </header>
          <h2>Spotify’s Engineering Community</h2>
          <p>
          Within Spotify, engineering teams are organized almost like small, separate companies -- each with their own mission and the freedom to make decisions on how to best fulfil that mission. Teams own and operate the end-2-end products they build. Teams have all the skills they need in their team -- mobile developers, backend engineers, data engineers, ML practitioners, designers and product managers etc all sit together and develop products together.
          </p>
          <p>
          We strongly believe that teams without silos -- and teams where engineers can easily jump between different domains and help each other out -- move faster and are more resilient. And quite frankly have more fun.
          </p>


          <h2>Why did we build Backstage?</h2>
          <p>
            “As the number of infrastructure teams grew, and the tools they
            built grew with them, we saw that our ecosystem started to get really
            'complex. Fragmentation created a cognitive load on engineers and they
            started to slow down” … “We hit a tipping point”
          </p>
          <p>
          We also knew that teams that want to provide new infrastructure tools and services did not want to be blocked by a central policing function. In order for this centralisation strategy to work out, we needed to build a platform that was really easy to extend, and provided a fantastic contributor experience.
          </p>
          <p>
          A central team was tasked with building the platform that became Backstage -- a platform that allowed platform- and infrastructure teams to extend, while also creating a consistent developer experience towards the end-users.
          </p>

          <h2>Backstage @ Spotify</h2>
          <p>
            In 2019 more than 200 engineers inside Spotify contributed to Backstage. We now have 110+ plugins developed by 50+ teams. 80% of contributions to Backstage came from people outside the Backstage core team.
          </p>
          <p>
            Over 280 engineering teams inside Spotify are using Backstage to manage 2000+ backend services, 300+ websites, 4000+ data pipelines and 200+ mobile features. Any Spotifier, not just engineers but also compliance and security, can easily discover all the software in our ecosystem, see who owns it, and access technical documentation in a centralised location.
          </p>
          <p>
            Backstage helps engineers be T-shaped by providing a consistent experience across domains. You don’t need to learn a completely new set of tools, with their own different UX when switching between domains. The tools you use for troubleshooting a failing data pipeline are similar enough to deploying a website that a T-shaped web engineer is able to help out with basic data engineering tasks.
          </p>
          <p>
          Another way of putting it is that a consistent and unified developer experience reduces the cognitive on engineers.
          </p>

          <h2>Golden Paths at Spotify</h2>
          <p>
          One of Spotify’s core engineering beliefs is that “the fewer technologies we are world leading in, the faster we go”. But as described above we also favour autonomous teams that are empowered to figure out not only what problems to solve, but also how. This means that we typically don’t force teams to adopt certain technologies, but instead encourage them to adopt the recommended tools because they are the best trade-off between local speed and global consistency.
          </p>
          <p>
          The way we do this is through our Golden Paths. Every major engineering discipline at Spotify (mobile, web, backend, machine learning, data, etc) has a Golden Path tutorial that explains “how we do X” at Spotify. For example, follow the Backend Golden Path and you will have a service running in production, with all the recommended practices set up.
          </p>
          <p>
          Golden Paths are not static -- they evolve as we introduce new technologies and best practices. Anyone at Spotify can suggest edits through simple Pull Request.
          </p>
          <p>
          Backstage is the starting point, and where most of the steps in the various Golden Paths are executed. We know that all companies have their own best practices and “Golden Paths”. Therefore the Open Source version of Backstage provides you with the flexibility to define your paths, and sets you up for starting to drive a light-weight standardisation in your company.
          </p>

          <h2>Reducing onboarding time with 55%</h2>
          <p>
          As software ecosystems scale, it gets harder to keep track of it all, especially while onboarding. Backstage helps new (and not-so-new) engineers find what they need quickly. Since the launch and expansion of Backstage, we have actually seen a massive 55% decrease in onboarding time, as measured by time-until-10th-pull-request. For a company that grows the engineering workforce as quickly as we do at Spotify, this is a game changer.
          </p>

        </div>
      </Container>
    </div>
  );
}

module.exports = Background;
