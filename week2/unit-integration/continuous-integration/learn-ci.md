# Continuous Integration

## What is it?
Continuous integration (CI) is the practice of "merging" all developer repositories of a project on a regular basis, typically several times a day. CI was initially introduced as a way to avoid integration problems when integrating features or parts of the code base that had been developed independently, but different CI platforms have introduced various features that also make it an effective tool for quality control.

#### Example Workflow

A typical CI setup would have a CI platform installed on a server that listens to one or more repositories. Commits to a repository would trigger a response by the CI, e.g. running a test suite or a build process. The results of this would be logged and made available for inspection to the developers.

With just one developer, this is basically just automated testing. However, if we introduce a second developer, who commits some conflicting changes, then conflicts may be isolated to consecutive runs of the test suite. For example:

1. Dev A and Dev B are working on different features
2. Dev A runs tests locally, all pass, and then pushes
3. CI service detects Dev A's commits and runs test suite, **passes**
4. Dev B runs tests locally, all pass, and then pushes
5. CI service detects Dev B's commits and runs test suite, **fails**

On simple projects, this problem can be avoided by frequently pulling and merging the master branch manually. However, on larger projects with many developers, with complicated dependencies and extensive test and build suites, using a CI can save a lot of time for the developers and introduce a degree of traceability that would otherwise be unavailable.

## Services
There are a large number of available CI services, a non-exhaustive list of which may be [found here](http://www.infoq.com/research/ci-server). For open source projects, you will most likely be using [Travis CI](https://travis-ci.org/), since its *free*.

## Features
The features available vary with the particular CI platform, but common features are likely to include:
* Log of test runs
    * These can be inspected to find which tests passed and which failed, see the failure message and stack trace, which commits are included in the run.
* Customisable build trigger conditions
    * Trigger a build on every commit, or just on pull requests, or on every Nth commit, or all commits in the last 5 minutes, etc.
* Log artifacts of builds
    * If the build produces executables or some other useful files these can be saved along with the log of each build.
* Statistics
    * Code coverage, code duplication, linter warnings, complexity
* Integration with issues tracking systems
* Auto-deployment
    * Some CI platforms have tools to aid deployment of a build (subject to tests passing)
* Build pipelines
    * Hook together several build processes, with each successive process only running if the previous one completed successfully.
* Lots more...


## Screenshots
This is Atlassian's Bamboo CI software, which integrates with all their other services, including JIRA issue tracking. You can see the build is split up into stages, where the repository is variously built, tested, packaged. Various build statistics are accessible via the tabs.

![oops](https://www.atlassian.com/wac/software/bamboo/overviewHero/imageBinary/build-results.png)

This is TeamCity's view of a builds history, showing the runs that have resulted in failing tests and which commits are included in those runs.

![oops](http://blog.jetbrains.com/teamcity/files/2012/03/image02.png)

This is another view of TeamCity showing several running builds, one of which is failing.

![oops](http://screenshots.s32cdn.com/41/406599/multiplatform.png)


## Useful Links
A brief breakdown of the CI breakdown can be found at [ThoughtWorks](https://www.thoughtworks.com/continuous-integration). Anyone looking for a dissenting opinion can [look here](http://www.yegor256.com/2014/10/08/continuous-integration-is-dead.html).
