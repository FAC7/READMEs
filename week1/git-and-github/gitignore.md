# **What is Gitignore?**

## Definition
A gitignore file is a file that you want Git to ignore hence git-ignore.
A .gitignore file should be committed into your repository, in order to share
the ignore rules with any other users that clone the repository. Git will uses this to determine which files and directories to ignore, before you make a commit.

## Why would you use one?
 * The purpose of gitignore files is to ensure that certain files not tracked by Git, remain untracked.

 * Occasionally there are files which you would want Git to ignore, such as: transient files, compilation products, temporary files, IDEs, .DS files if you are working on Mac, etc.

### There are two ways to create a gitignore file.

## 1. Create a local .gitignore

Create a Local file in your repository named .gitignore

GitHub maintains an [official list](https://github.com/github/gitignore) of recommended .gitignore files for many popular operating systems, environments, and languages in the github/gitignore public repository.

Find your Git repository using the Terminal.
Enter: **touch .gitignore** to create a .gitignore file.

**If you already have a file checked in, and you want to ignore it, Git will not ignore the file if you add a rule later. In those cases, you must untrack the file first, by running the following command in your terminal:**

**$ git rm --cached**

Here is a Gist with some [good rules](https://gist.github.com/octocat/9257657) for files from Octocat.

## 2. Create a Global .gitnore

A global .gitignore file, which is a list of rules for ignoring files in every Git repositories on your computer. For example, you might create the file at ~/.gitignore_global and add some rules to it.

To do that open your Terminal and run the following command:

**$git config --global core.excludesfile ~/.gitignore_global**


## Explicit repository excludes inclusion/exclusion

If you don't want to create a .gitignore file to share with others, you can create rules that are not committed with the repository. You can use this technique for locally-generated files that you don't expect other users to generate, such as files created by your editor.

Use your favorite text editor to open the file called .git/info/exclude within the root of your Git repository. Any rule you add here will not be checked in, and will only ignore files for your local repository.

To re-include files or directories when their parent directory is excluded, the following conditions must be met:

The rules to exclude a directory and re-include a subset back must be in the same .gitignore file.

The directory part in the re-include rules must be literal (i.e. no wildcards)

The rules to exclude the parent directory must not end with a trailing slash.
  UNFINSIHED!!!
 * [Gitignore](https://git-scm.com/docs/gitignore)
 * [ignoring files](https://help.github.com/articles/ignoring-files/)
 * [What is .gitignore exactly?](http://stackoverflow.com/questions/27850222/what-is-gitignore-exactly)
