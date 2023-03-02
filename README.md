# Angular CLI Workshop

During this workshop we will explore the Angular CLI (Command Line Interface) and how it can help you quickly and easily develop single-page web applications by creating a basic one from scratch. What we will learn includes how to:

* Scaffold a new Angular application and understand its basic structure
* Create reusable components
* Share data/state across the application with services
* Route between multiple "pages"
* Fetch data from a back-end / async stuff??

> **Note:** No prior knowledge of Angular is required. However, some basic knowledge of HTML/CSS/TypeScript would be helpful.

## Setup

Ahead of this workshop there is a small amount of setup required to install the necessary tooling. Some of the version numbers mentioned below are older, but are meant to be a reference for the minimum we have tested this training upon.

1. [Install](https://zoom.us/download) or [update Zoom](https://support.zoom.us/hc/en-us/articles/201362233-Upgrade-update-to-the-latest-version) if you plan on attending remotely.
1. Please download, install, and configure the following tools:
    * [Node.js 16.16.0 with NPM 8.11.0 or newer](https://nodejs.org/en/download/)
    * A terminal application. The Command Prompt on Windows or Terminal on OSX should be just fine unless you want something different.
    * A Git client. If you do not have one we recommend [GitHub Desktop](https://desktop.github.com/).
    * Your preferred text editor. Any basic editor will work, but we would highly recommend [Visual Studio Code](https://code.visualstudio.com/) to make things much easier.
		* VS Code integrates both the terminal and Git client, and has shortcuts for debugging and testing for convenience.
		* You can optionally install the `Angular Language Service` extension for VS Code to provide some helpful shortcuts and extra compilation error messages. (To install, select Extensions on the left-hand sidebar, which looks like four squares with one broken away, and then search for the extenstion at the top. Select it and click the Install button.)
1. In your terminal, run `npm install -g @angular/cli` to install the Angular CLI. This will make the `ng` command globally available. It's what will to most of the magic for us later.
1. Please run `ng version` in your terminal to verify everything is installed and configured appropriately. You should have `Angular CLI` version 14 or newer, `Node` version 16.16.0 or newer, and NPM (`Package Manager`) version 8.11.0 or newer:

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

That's it!

Since the application is going to be written from scratch, you can either follow the exercise instructions here on github, or you can clone the repository into a local directory so you can have the instructions open in your editor as you follow along. We would recommend cloning the repository. That way, if you fall behind during the workshop, you can quickly switch branches to catch back up. Each exercise branch has the result from the previous exercise.

**Please contact your trainer if you have any issues during the setup process.**
