---
title: Announcing Backstage
author: Stefan Ålund
authorURL: http://twitter.com/stalund
authorImageURL: https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg
---

## What is Backstage?

Simply put, Backstage is an open source platform for building developer portals.

It’s the first open source infrastructure platform that puts developer experience first. With an elegant, unified UI for all your tooling, Backstage gets your developers up and running faster, which makes them happier. And a happier developer is a more productive developer.

![img](assets/blog_1.png)

<!--truncate-->

## As simple as writing a plugin.

Backstage makes it easy to unify all of your infrastructure tooling, services, and documentation under a single, easy-to-use interface. So your engineers will always know where to find the right tool for the job. And they’ll already know how to use it — because everything uses the same, familiar UI.

<illustration: aggregation play>

Everyone loves open source and the infrastructure [landscape](https://landscape.cncf.io/) is exploding. As these projects are maturing, companies are adopting them at an increasing rate. What we have found is that when the number of tools grows, it becomes increasingly hard for engineers to use all of these discrete tools (or even discover what tools are available!). Most of these tools have been built to solve one specific problem. Oftentimes there is no connecting tissue between them. This context switching takes engineers out of their flow and adds a significant cognitive load.

This is where Backstage comes in. Building one central developer portal that integrates all your tools takes more work. But we think it is worth it.

## The Spotify story

A best-in-class developer portal — from a music company? Since the very beginning, Spotify has been known for its agile, autonomous engineering culture. More than music, we’re a tech company that has always put engineers first, empowering our developers with the ability to innovate quickly and at scale. Backstage is the natural result of that focus.

Since adopting Backstage internally at Spotify, we’ve seen a 55% decrease in onboarding time for our engineers (as measured by time until 10th pull request). Over 280 engineering teams inside Spotify are using Backstage to manage 2,000+ backend services, 300+ websites, 4,000+ data pipelines, and 200+ mobile features.

## Project roadmap

We created Backstage about 4 years ago, and today, we’ve decided to share the goodness with the greater engineering community. While our version of Backstage has had the benefit of time to mature and evolve, the first iteration of our open source version is still nascent. I wanted to take a moment to share with you what our vision for Backstage OSS is so that 1. users and our community gain a better understanding of where we’re envisioning the product to go and more importantly, 2. you can provide input and feedback so that together, we can create a better infrastructure experience for developers everywhere.

We are envisioning three phases of the project and we have already begun work on various aspects of these phases:

- **Phase 1:** Extensible frontend platform (now) - You will be able to easily create a single consistent UI layer for your internal infrastructure and tools. A set of reusable UX patterns and components help ensure a consistent experience between tools.

- **Phase 2:** Manage your stuff (next 2-3 months) - Manage anything from microservices to software components to infrastructure and your service catalog. Regardless of whether you want to create a new library, view service deployment status in Kubernetes, or check the test coverage for a website -- Backstage will provide all of those tools - and many more - in a single developer portal.

- **Phase 3:** Ecosystem (later) - Everyone's infrastructure stack is different. By fostering a vibrant community of contributors we hope to provide an ecosystem of Open Source plugins/integrations that allows you to pick the tools that match your stack.

Our vision for Backstage is for it to become the trusted standard toolbox (read: UI layer) for the open source infrastructure landscape. Think of it like Kubernetes for developer experience. We realize this is an ambitious goal. We can’t do it alone. If this sounds interesting or you'd like to help us shape our product vision, we'd love to talk. You can email me directly: [alund@spotify.com](mailto:alund@spotify.com).
