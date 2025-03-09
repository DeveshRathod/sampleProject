### Installing Node.js and Nodemon on Amazon Linux 2

Follow these steps to install Node.js and Nodemon globally on an Amazon Linux 2 EC2 instance:

#### **Step 1: Update the System**

Run the following command to update all installed packages:

```sh
sudo yum update -y
```

#### **Step 2: Install Node.js**

Enable the Amazon Linux Extras repository for Node.js 16 and install it:

```sh
sudo amazon-linux-extras enable nodejs16
sudo yum install -y nodejs
```

#### **Step 3: Verify Installation**

Check if Node.js and npm are installed correctly:

```sh
node -v
npm -v
```

This should display the installed versions of Node.js and npm.

#### **Step 4: Install Nodemon Globally**

To install Nodemon globally, run:

```sh
sudo npm install -g nodemon
```

#### **Step 5: Verify Nodemon Installation**

Check if Nodemon is installed:

```sh
nodemon -v
```
