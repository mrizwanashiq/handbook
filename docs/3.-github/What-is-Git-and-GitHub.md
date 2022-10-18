---
sidebar_position: 1
id: github
title: GitHub
description: What is Git, GitHub, and important commands
slug: github
---

If you are someone who doesn't know GitHub (or you only know a little about GitHub). Then this blog is for you. GitHub is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects. Team members can work on files and easily merge their changes with the master branch of the project. Git & GitHub skill has slowly made its way from preferred skills to must have skills in multiple job roles. In this blog, I will take you through the various functions and capabilities of GitHub.

## Step 1: Install git and create a GitHub account 

The first two things you'll want to do are install git and create a free GitHub account.

Follow the instructions (here)[https://git-scm.com/book/en/v2/Getting-Started-Installing-Git] to install git (if it's not already installed). Note that for this tutorial we will be using git on the command line only. While there are some great git GUIs (graphical user interfaces), I think it's easier to learn git using git-specific commands first and then to try out a git GUI once you're more comfortable with the command. A note: 95% of other online git resources and discussions will also be for the command-line interface. 

Once you've done that, create a GitHub account (here)[https://github.com/join] if you don't already have one.


> ### Git and GitHub
> A quick aside: git and GitHub are not the same thing. Git is an open-source, version control tool created in 2005 by developers working on the Linux operating system; GitHub is a company founded in 2008 that makes tools which integrate with git. You do not need GitHub to use git, but you cannot use GitHub without using git. There are many other alternatives to GitHub, such as GitLab, BitBucket, and “host-your-own” solutions such as gogs and gittea. All of these are referred to in git-speak as “remotes”, and all are completely optional. You do not need to use a remote to use git, but it will make sharing your code with others easier.

## Step 1: Create a local git repository 
When creating a new project on your local machine using git, you'll first create a new repository (or often, 'repo', for short). 

To use git we'll be using the terminal. To begin, open up a terminal and move to where you want to place the project on your local machine using the cd (change directory) command. For example, if you have a 'projects' folder on your desktop, you'd do something like:
```bash
cd ~/projects
mkdir my-project
cd my-project
```
To create a new repository, you'll need to use the git command. For example, if you have a 'my-project' folder, you'd do something like:
```bash
git init
```
This will create a new repository in the current directory.

## Add a file to the repository
Go ahead and add a new file to the project, using any text editor. After creating the new file, you can use the git status command to see which files git knows exist.
```bash
git status

# This will show you the files that are staged for commit.
# The 'A' indicates that the file is staged for addition.
# The 'M' indicates that the file is staged for modification.
# The 'D' indicates that the file is staged for deletion.
# The '??' indicates that the file is not staged for commit.
# The '!!' indicates that the file is untracked.
```
> ## An interlude: 
> The staging environment, the commit, and you. One of the most confusing parts when you're first learning git is the concept of the staging environment and how it relates to a commit.

> A commit is a record of what changes you have made since the last time you made a commit. Essentially, you make changes to your repo (for example, adding a file or modifying one) and then tell git to put those changes into a commit.

> Commits make up the essence of your project and allow you to jump to the state of a project at any other commit.

> So, how do you tell git which files to put into a commit? This is where the staging environment or index come in. As seen in Step 2, when you make changes to your repo, git notices that a file has changed but won't do anything with it (like adding it in a commit).

> To add a file to a commit, you first need to add it to the staging environment. To do this, you can use the `git add <filename>` command (see Step 3 below).

> Once you've used the git add command to add all the files you want to the staging environment, you can then tell git to package them into a commit using the git commit command. 

> Note: The staging environment, also called 'staging', is the new preferred term for this, but you can also see it referred to as the 'index'.

## Step 3: Add a file to the staging environment
To add a file to the staging environment, use the `git add <filename>` command. For example, if you have a 'my-project' folder, you'd do something like:
```bash
git add .
```
This will add all files in the current directory to the staging environment.
```bash
git add README.md
```
This will add the only file README.md to the staging environment.
```bash
git add ./*.md
```
This will add all .md files in the current directory to the staging environment.
```bash
git add ./*.md ./*.txt
```
This will add all .md and .txt files in the current directory to the staging environment.

## Step 4: Commit your changes
To commit your changes, use the git commit command. For example, if you have a 'my-project' folder, you'd do something like:
```bash
git commit -m "Initial commit"
```
This will commit all files in the staging environment to the repository with a `message` of 'Initial commit'.

## Step 5: Create a new branch
To create a new branch, use the `git branch` command. For example, if you have a 'my-project' folder, you'd do something like:
```bash
git branch my-branch
```
This will create a new branch called `my-branch`.

## Step 6: Create a new repository on GitHub
If you only want to keep track of your code locally, you don't need to use GitHub. But if you want to work with a team, you can use GitHub to collaboratively modify the project's code.

To create a new repo on GitHub, log in and go to the GitHub home page. You can find the “New repository” option under the “+” sign next to your profile picture, in the top right corner of the navbar:

![image](https://user-images.githubusercontent.com/27571455/181419190-0d0367fd-0120-42e5-af43-1f94120db61f.png)

After clicking the button, GitHub will ask you to name your repo and provide a brief description:

![image](https://user-images.githubusercontent.com/27571455/181419328-4a62c37c-4e84-48dc-a656-3cefbdcf7de1.png)

When you're done filling out the information, press the 'Create repository' button to make your new repo.

GitHub will ask if you want to create a new repo from scratch or if you want to add a repo you have created locally. In this case, since we've already created a new repo locally, we want to push that onto GitHub so follow the '....or push an existing repository from the command line' section: 
```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
```
This will add a remote named 'origin' to the repository. The 'origin' remote is where you'll push your code to. In short now your repo is connected to GitHub and you can push your code to GitHub.

## Step 7: Push a branch (code) to GitHub
Now we'll push the commit in your branch to your new GitHub repo. This allows other people to see the changes you've made. If they're approved by the repository's owner, the changes can then be merged into the primary branch.

To push changes onto a new branch on GitHub, you'll want to run git push origin yourbranchname. GitHub will automatically create the branch for you on the remote repository:
```bash
git push origin my-branch
```
This will push your code to the 'my-branch' branch on GitHub. And if there is no branch called 'my-branch' on GitHub, it will create it.
```bash
git push origin my-branch:my-branch-name
```
This will push your code to the remote 'my-branch-name' branch on GitHub.

You might be wondering what that "origin" word means in the command above. What happens is that when you clone a remote repository to your local machine, git creates an alias for you. In nearly all cases this alias is called "(origin)[https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes]". It's essentially shorthand for the remote repository's URL. So, to push your changes to the remote repository, you could've used either the command: `git push git@github.com:git/git.git yourbranchname` or `git push origin yourbranchname`

(If this is your first time using GitHub locally, it might prompt you to log in with your GitHub username and password.)

If you refresh the GitHub page, you'll see note saying a branch with your name has just been pushed into the repository. You can also click the 'branches' link to see your branch listed there.

![image](https://user-images.githubusercontent.com/27571455/181419928-7b48cc65-4b62-4bdc-b356-295a2e1d7094.png)

> What is difference between 'origin' and 'upstream'?

> The 'origin' is the remote repository that you want to push to. The 'upstream' is the remote repository that you want to pull from.

> What is difference between 'local' and 'remote' branches?

> The 'local' branch is the branch that you are working on locally, and we create it using the 'git branch' command. The 'remote' branch is the branch that is on GitHub, and we create it using the 'git push' command.

## Step 8: Create a pull request (PR)
A pull request (or PR) is a way to alert a repo's owners that you want to make some changes to their code. It allows them to review the code and make sure it looks good before putting your changes on the primary branch.

This is what the PR page looks like before you've submitted it:

![image](https://user-images.githubusercontent.com/27571455/181420100-6780df90-b1cb-4045-a389-e0db0abcd16d.png)

And this is what it looks like once you've submitted the PR request:

![image](https://user-images.githubusercontent.com/27571455/181420212-ab2bd9e9-0a03-4b7c-8288-ec14a5e88b8b.png)

You might see a big green button at the bottom that says 'Merge pull request'. Clicking this means you'll merge your changes into the primary branch.

Sometimes you'll be a co-owner or the sole owner of a repo, in which case you may not need to create a PR to merge your changes. However, it's still a good idea to make one, so you can keep a more complete history of your updates and to make sure you always create a new branch when making changes.


## Step 9: Merge a PR
Go ahead and click the green 'Merge pull request' button. This will merge your changes into the primary branch.

![image](https://user-images.githubusercontent.com/27571455/181420353-44da5f86-5dc8-48db-8ca1-4fb04c1b7d5b.png)

When you're done, I recommend deleting your branch (too many branches can become messy), so hit that grey 'Delete branch' button as well.

You can double-check that your commits were merged by clicking on the 'Commits' link on the first page of your new repo.

![image](https://user-images.githubusercontent.com/27571455/181420535-a93e611d-73cc-4de0-b628-3b5d29b7ae71.png)

This will show you a list of all the commits in that branch. You can see the one I just merged right up top (Merge pull request #1).

![image](https://user-images.githubusercontent.com/27571455/181420652-37eb27a7-bace-4172-ad09-43f627f8a569.png)

You can also see the hash code of the commit on the right hand side. A hash code is a unique identifier for that specific commit. It's useful for referring to specific commits and when undoing changes (use the `git revert <hash code number>` command to backtrack).

## Step 10: Get changes on GitHub back to your computer
Right now, the repo on GitHub looks a little different from what you have on your local machine. For example, the commit you made in your branch and merged into the primary branch doesn't exist in the primary branch on your local machine.

In order to get the most recent changes that you or others have merged on GitHub, use the `git pull origin master` command (when working on the primary branch). In most cases, this can be shortened to `git pull`.
```bash
git pull origin master
```
This shows you all the files that have changed and how they've changed.

## Step 11: Switch to a different branch
You can switch to a different branch by using the `git checkout` command. For example, if you have a 'my-project' folder, you'd do something like:
```bash
git checkout my-branch
```
If you want to create and switch to a new branch, you can use the `git checkout -b` command. For example, if you have a 'my-project' folder, you'd do something like:

```bash
git checkout -b my-branch
```

## Step 12: Delete a branch
You can delete a branch by using the `git branch -d` command. For example, if you have a 'my-project' folder, you'd do something like:
```bash
git branch -d my-branch
```

## Step 13: Delete a repo
You can delete a repo by using the `git rm -rf` command. For example, if you have a 'my-project' folder, you'd do something like:
```bash
git rm -rf my-project
```

## Step 14: Clone a repo
You can clone a repo by using the `git clone` command. For example, if you have a 'my-project' folder, you'd do something like:
```bash
git clone <repo-url>
```

## Conclusion
This is the end of the tutorial. I hope you've enjoyed it! I hope you've learned a lot about Git and GitHub.
