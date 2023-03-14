# Angular CLI Workshop Exercise 5 - Additional Commands

We have completed our Todo List application. There are a few more Angular CLI commands that are useful while developing. We are going to explore them here.

## Linting
Code linting is important for maintining code quality, enforcing stylistic standards, and potentially finding bugs early. The Angular CLI provides built-in support for ESLint and makes it easy to run it against your code.

Run
```
ng lint
```

The first time you run this command in your project, you will see the following message:
```
Cannot find "lint" target for the specified project.
You can add a package that implements these capabilities.

For example:
  ESLint: ng add @angular-eslint/schematics

Would you like to add ESLint now? (Y/n) 
```

It seems like this will do what you want if you answer `Yes`, but unfortunately there appears to be a bug where the wrong version of `@angular-eslint/schematics` is attempted to be installed. Let's do it manually. Respond with `n` to terminate the plugin installation.

> **Note:** For the next command you will need to specify the version of Angular that you have installed. You can check which version you have by running `ng version` if you recall from the pre-workshop setup. Replace the `14` in the command below with the major version of Angular that you have installed. Otherwise, you will have dependency errors.

Run
```
ng add @angular-eslint/schematics@14
```

Once the command is complete, you will notice that your `package.json` file has been updated with a handful of depenencies and a new script, the `angular.json` file has been updated with configuration for linting, and a new `.eslintrc.json` file has been created to configure the rules you want to apply. Angular provides a default set of rules, but you can [configure your own](https://eslint.org/docs/latest/rules/).

A side effect of this process is that we get to see a new CLI command `ng add`. This is a helpful tool for adding dependencies to the project. You don't *have* to use it to add dependencies, but it can make things easier.

> **Why `ng add` and not `npm install`?** They both achieve the goal of adding dependiencies to your project, but with one noteable difference. While `npm install` will install the specified package and update your `package.json` file, `ng add` goes a step further and can perform project configuration and install additional dependencies if the package specifies any. If you were wondering about the term "schematics" from above, that's how Angular packages define these extra installation steps, in something called a "schematic". If you don't know whether the package you're installing has a schematic or not, it's best to stick with `ng add`.

Now, try running the linting process again.
```
ng lint
```

If everything looks good, you will see `All files pass linting.` If not, you will get a message like:
```
[...]\src\app\todo-list-item\todo-list-item.component.ts
  6:13  error  The selector should be kebab-case (https://angular.io/guide/styleguide#style-05-02)  @angular-eslint/component-selector

✖ 1 problem (1 error, 0 warnings)

Lint errors found in the listed files.
```

Correct the issues and try again.

## Updating packages

The `ng update` command provides a convenient way to update packages to their most recent or a specific version. It's most helpful with updates to Angular itself because it can perform refactors of code that has been removed or deprecated or if default settings or best practices have changed.

The syntax is: `ng update [list of package names]`. By default, it will update to the latest stable version. You can use the `--next` option to install beta or pre-releast versions.

As an example of upgrading to the latest patch version of Angular 15 ([or look for an even newer version here](https://www.npmjs.com/package/@angular/core?activeTab=versions)), run
```
ng update @angular/cli@^15 @angular/core@^15
```

You may get a message like this one
```
Package "@angular-eslint/schematics" has an incompatible peer dependency to "@angular/cli" (requires ">= 14.0.0 < 15.0.0", would install "15.2.2").
× Migration failed: Incompatible peer dependencies found.
Peer dependency warnings when installing dependencies means that those dependencies might not work correctly together.
You can use the '--force' option to ignore incompatible peer dependencies and instead address these warnings later.
  See "[...]angular-errors.log" for further details.
```

This specific message is saying that the `@angular-eslint/schematics` package that we just installed isn't compatible with the version of Angular we are trying to upgrade to. We'll have to perform that upgrade manually, so for now, you can re-run the previous command with the `--force` option as the message suggests.

```
ng update @angular/cli@^15 @angular/core@^15 --force   
```

When the update is complete, you should see several changes in your `package.json` file. If you made a jump in the major version, you might also see code changes. There are logs in the console describing all the changes that were made, if any. This is similar to using `ng add` in that packages updated with this command can perform additional actions so that you don't manually have to refactor your code in case the package deprecates or removes APIs.

This particular command we just ran only updated the core Angular dependencies. It is up to you to also upgrade any other dependencies you feel you should update (i.e. 3<sup>rd</sup> party packages).

Your project should still build and run just fine with `ng serve` as long as there were no breaking changes that need fixed.

## Documentation

The last command that we will cover is the `ng doc` command. This is just a shortcut to open the [Angular documentation](https://angular.io) site and search for an API keyword. Note that this is not a generic documentation search, but rather a search for a specific Class, Method, Module, etc so that you can find the full API for that item.

```
ng doc [keyword]
```

For example, you're working on implementing a form and you want to check all of the capabilities of a `FormControl`. You can use the following command to search the API documentation for that class:
```
ng doc FormControl
```

This will open your default browser to [the search results](https://angular.io/api?query=FormControl), and from there you can navigate to the page specifically for the [FormControl class](https://angular.io/api/forms/FormControl).

It's not much, but it can save a few seconds here and there, which can add up if you need to check the documentation frequently.

## Conclusion

We now have a fully working Angular application that makes use of components to reduce redundancy and encapsulate behavior, shares state through a service, has routing for multiple pages, and conforms to coding stylistic standards.

Hopefully it is clear how much work the Angular CLI does for you to make the barriers for starting a new project or enhancing an existing one quite low. There are many more things the Angular CLI is capable of that we didn't explore in this workshop that make it even more powerful.

### Bonus

If you have extra time, feel free to add styles to make the application more visually appealing, or if you're up to it, try filling out the `.spec.ts` files with some unit tests. Remember, you can run the test suite with `ng test`.

### CLI Command Review

Here's a summary of the commands we used in this workshop, in the order of appearance. The shorthand version of the command is listed in parenthesis:

```
ng version
(ng v)

ng new [application name]
(ng n)

ng serve
(ng s)

ng test
(ng t)

ng generate class [class name] --type=model
(ng g cl)

ng generate component [component name]
(ng g c)

ng generate service [service name]
(ng g s)

ng generate module [module name] --route=[route name]
(ng g m)

ng lint

ng add [package names]

ng update [package names]

ng doc [keyword]
(ng d)
```

### Links

* [CLI Overview and Command Reference](https://angular.io/cli)

* Dive deeper into Angular specifics with their [Tour of Heroes tutorial](https://angular.io/tutorial/tour-of-heroes)
