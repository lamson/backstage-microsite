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
            <h1>Background</h1>
          </header>
          <p>
            Backstage was developed and used internally at Spotify for 2 years
            before being released as Open Source.
          </p>
          <h2>Backstage @ Spotify</h2>
          <p>
            Over 280 engineering teams inside Spotify are using Backstage to
            manage 2000 backend services, 300+ websites, 4000+ data pipelines
            and 200+ mobile features. Any Spotifier can easily discover all the
            software in our ecosystem and access technical documentation in a
            centralised location.
          </p>
          <p>
            In 2019 more than 200 engineers inside Spotify contributed to Backstage.
            We now have 110+ Plugins developed by 50+ teams. 80% of contributions
            to Backstage comes from people outside the Backstage core team.
          </p>


          <h2>Why did we build Backstage?</h2>
          <pre>
            “As the number of infrastructure teams grew, and the tools they
            built grew with them, we saw that our ecosystem started to get really
            'complex. Fragmentation created a cognitive load on engineers and they
            started to slow down” … “We hit a tipping point”
          </pre>

          <h2>T-shapedness and autonomous teams</h2>
          <p>
            Inside Spotify, engineering teams are organized almost like small
            companies -- all with their own mission and the autonomy to make
            decisions on how to best fulfil that mission. Teams own and operate
            the end-2-end products they build. Teams have all the skills they
            need in their team. Mobile developers, backend engineers, data
            engineers, ML practitioners, designers and product managers etc all
            sit together and develop products together.
          </p>
          <p>
            We strongly believe that teams without silos -- and teams where
            engineers can easily jump between different domains and help each
            other out -- move faster and are more resilient. And quite frankly
            have more fun.
          </p>
          <p>
            Backstage helps engineers be T-shaped by providing a consistent
            experience across domains. You don’t need to learn a completely new
            set of tools, with their own different UX. The tools you use for
            troubleshooting a failing data pipeline are similar enough to
            deploying a website that a T-shaped web engineer is able to help
            out with basic data engineering tasks.
          </p>

          <h2>Fragmentation</h2>
          <p>
            If you are anything like us your infrastructure…


          Successful open source projects solve one problem and they solve it really well.

          This creates fragmented overall ecosystem.


          As the complexity of your software ecosystem growns, it gets harder for individual engineers to keep track of it all. Backstage helps make sense of it all. Not more jumping around between different systems -- all your tools and docs in one central location.
          </p>



        </div>
      </Container>
    </div>
  );
}

module.exports = Background;
