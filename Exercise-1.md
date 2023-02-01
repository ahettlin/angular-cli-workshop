# Angular CLI Workshop Exercise 1 - Generating a new application

In this exercise, we will generate a new project and explore everything that the Angular CLI gives us to start with. It takes care of a lot of boilerplate setup so that you can dive right into working on the important parts of your app and not get bogged down in setup and configuration.

## Generate the application

Run the following command in your terminal. Make sure you run it in the root directory for this project.

  ```
  ng new angular-todo-list --directory ./ --style scss --routing true
  ```

A couple of notes:

* You would typically start out a new project without already having an existing folder for it like we do here. In that case you could run just `ng new [app-name]` in the desired parent directory. Angular would create the directory for the project and put all of the project files in there. In our case, `--directory ./` tells the Angular CLI to put the files in the directory where the command was run because we don't want it generated in a nested directory.
* We have included `--style scss --routing true` to answer a couple of questions that we would have otherwise been prompted to answer. This is to ensure no one accidentally chooses a different option for the workshop.
* To see all available options for the `new` command, you can find them in [the documentation](https://angular.io/cli/new)

## Run the application

The `ng new` command has generated a fully-functional single-page applicaiton for us, rady to be customized to our needs. For now, let's run it and see what it's given us. In your terminal, run:

```
ng serve
```

the output should look something like

```
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.11 MB |
polyfills.js          | polyfills     | 318.06 kB |
styles.css, styles.js | styles        | 210.56 kB |
main.js               | main          |  50.18 kB |
runtime.js            | runtime       |   6.52 kB |

                      | Initial Total |   2.68 MB

Build at: 2023-01-31T21:27:17.608Z - Hash: b27fe04d93b98a2c - Time: 16846ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
```

Open http://localhost:4200/ in your browser as the output suggests.

You should see a smple page with some links to Angular documentation and some buttons to show some example CLI commands.

When you're done looking at this page, you can close the browser window/tab and then cancel the `ng serve` command by pressing `ctrl-c` in your terminal if you're on Windows, or `cmd-c` if you're on OSX. 

## Examine the application structure

Now that we've seen the output of our starting point, lets take a look at the structure of the directories and files it created for us so we know what we can change from here.