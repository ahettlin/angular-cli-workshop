# Angular CLI Workshop

During this workshop we will explore the Angular CLI (Command Line Interface) and how it can help you quickly and easily develop single-page web applications by creating a basic one from scratch. What we will learn includes how to:

* Scaffold a new Angular application and understand its basic structure
* Create reusable components
* Route between multiple "pages"
* Share data/state across the application with services
* Fetch data from a back-end / async stuff??

## Setup

Ahead of this workshop there is a small amount of setup required to install the necessary tooling. Some of the version numbers mentioned below are older, but are meant to be a reference for the minimum we have tested this training upon.

1. [Install](https://zoom.us/download) or [update Zoom](https://support.zoom.us/hc/en-us/articles/201362233-Upgrade-update-to-the-latest-version) if you plan on attending remotely.
1. Please download, install, and configure the following tools:
    * [Node.js 16.16.0 with NPM 8.11.0 or newer](https://nodejs.org/en/download/)
    * A terminal application. The Command Prompt on Windows or Terminal on OSX should be just fine unless you want something different.
    * A Git client. If you do not have one we recommend [GitHub Desktop](https://desktop.github.com/).
    * Your preferred text editor. Any basic editor will work, but if you are looking for a more complete environment we recommend [Visual Studio Code](https://code.visualstudio.com/).
		* If you choose to use VSCode, it integrates both the terminal and Git client for convenience. We recommend it.
1. Install the Angular CLI...
1. Please run the following command in your terminal to verify everything is installed and configured appropriately. You should have Angular CLI version 14 or newer, Node version 16.16.0 or newer, and NPM (package manager) version 8.11.0 or newer:

      ```
      $ ng version
      
          _                      _                 ____ _     ___
         / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
        / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
       / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
      /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                      |___/
    

      Angular CLI: 14.1.1
      Node: 16.16.0
      Package Manager: npm 8.11.0 
      OS: win32 x64

      Angular: 
      ... 

      Package                      Version
      ------------------------------------------------------
      @angular-devkit/architect    0.1401.1 (cli-only)
      @angular-devkit/core         14.1.1 (cli-only)
      @angular-devkit/schematics   14.1.1 (cli-only)
      @schematics/angular          14.1.1 (cli-only)
      ```
1. If you are not familiar with Docker images or you do not use them regularly you should consider doing the optional [Exercise 0](/kube-101/exercises/docker-image). It walks you through creating a Docker image which contains the application used for the exercises in this workshop.

**Please contact your trainer if you have any issues during the setup process.**