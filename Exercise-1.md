# Angular CLI Workshop Exercise 1 - Generating a new application

In this exercise, we will generate a new project and explore everything that the Angular CLI gives us to start with. It takes care of a lot of boilerplate setup so that you can dive right into working on the important parts of your app and not getting bogged down in setup and configuration.

## Generate the application

Run the following command in your terminal. Make sure you run it in the root directory for this project.

  ```
  ng new angular-todo-list --directory ./ --style scss --routing true
  ```

A couple of notes:

* You would typically start out a new project without already having an existing folder for it like we do here. In that case you could run just `ng new [app-name]` in the parent directory. Angular would create the directory for the project and put all of the project files in there. In our case, `--directory ./` tells the Angular CLI to put the files in the directory where the command was run because we don't want it generated in a nested directory.
* We have included `--style scss --routing true` to answer a couple of questions that we would have otherwise been prompted to answer. This is to ensure no one accidentally chooses a different option for the workshop.