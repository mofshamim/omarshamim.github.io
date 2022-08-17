### GitHub vs Git

## GitHub
1. Service
2. Host git repository/folder/source code
3. Provides GUI
4. Maintain on cloud/web
5. Founded in 2008

## Git
1. Tool/software
2. Change control, version control
3. Provides CLI (Command line Interface Tool)
4. Installed and maintained locally.
5. Released 2005



### Why we need Git

1. Version Control System: 
git, GitLab, Beanstalk, PerForce, Bitbucket
2. Keep track of changes
3. Collaboration on project


## Step 1: 
Remote Folder/ Repository
-- Shamim
-- Rubel
-- Kawser

## step 2:
Local clone of Repository from github using git.


### Environment Setup and Install

1. Go to https://git-scm.com/download/win 


### Configure 
git --version
ctrl + L = for clear cli

## to set user name & mail 
git config --global user.name "omar-shamim"

git config --global user.email "omarfaruque94bd@gmail.com"

Note: you can change user name & email any time using same command


## to see user name & email 
git config user.name
git config user.email



### How to create Folder

Step 1: Working directory/workspace
Step 2: Stagging area/index
Step 3: Local repository

Command:

1. For creating directory
mkdir easypos

2. For invoke into folder
cd easypos

3. To see all the documents 
ls -a

4. For creating/initializing git repository
git init

5. For creating a file
process 1: touch day1.txt
process 2: > day1.txt
process 3: echo "" > day1.txt

6. For opening a file

Windows : start day1.txt
Linux   : xdg-open day1.txt
OSX     : open day1.txt


7. displays the state of the working directory and staging area. statuse 2 types 
-- tracking (stagging)
-- untracking

git status

9. present woking directory
pwd


### Git staging and unstaging

1. to add stagging area
git add day1.txt

2. to add stage area, from current directory and subdirectories.
git add -a

3. to add stage area, from current directory
git add .

4. to add stagging area : all JS files from current directory. 
git add *.js

4. to add stagging area : all JS files from current directory. 
git add *.js










