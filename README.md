# Application Framework for Developers

![Home Image](https://github.com/chrisjohn727/sample/blob/master/Kognifai.png)

__Welcome to Kognifai Application Framework__. This repository guides you to create your first Poseidon Module, Widget, a Kognifai (Yeoman) application and samples for each of them.

## Create Your First Module 
Creating Kognifai applications has its specifics, as is the case with any other platform. In order to ease the burden on developers we provide a Visual Studio project template to give them a useful starting point and create the basic artefacts required by Kognifai. 

This guide assumes that you are running a development instance of Kognifai and have completed the necessary steps to successfully do so.

To know how to install and configure Kognifai Application Framework, refer to  
* [Install and Configure Application Framework](https://github.com/chrisjohn727/sample/wiki).

## QuickStart
#### Step 1. Set up the Development Environment
To install the Poseidon Tools extension for Visual Studio download Kognifai template extensions.vsix from 

https://github.com/kognifai/GST-Intruments/tree/master/Visual%20Studio%20Extensions 
and start it.

#### Step 2. Create a new project

After that you can simply create a new Poseidon Application from Visual Studio (version 2017) which will provide us with basic necessary files required by a Kognifai application. 
To create a new application project, choose the **New Project** option and select the **Poseidon Application template** in the **TypeScript** section. Enter the name of the project. For example **SamplePoseidonApp**:

#### Step 3: Start the application

Now we need to build our new project. 

When the build finishes right-click on the project from the source in the solution explorer. Choose Properties and then Web from the left navigation menu:
Select Local IIS from the dropdown and enter the correct path to Poseidon local IIS instance + the base path to application files **Server/Modules/SamplePoseidonApp**. 
We need to use the Poseidon Module Installer tool in order to register our new application. In the generated project there is already a cmd script that invokes the installer. First we need to ensure that the path to Poseidon.Module.Installer.exe is correct in the install-module.cmd file located in the newly created project:

```
@ECHO OFF
SET moduleInstaller="Disk:\%PoseidonSourceDir%\Platform\DEV\Poseidon.Module.Installer\bin\Debug\Poseidon.Module.Installer.exe"
SET manifest=SamplePoseidonApp.manifest.json
CALL %moduleInstaller% install %manifest%
PAUSE

```
Then simply run install-module.cmd and “Module installed successfully” message should be shown.

In order to open the new application, just browse your local Kognifai Application Framework instance using your favorite browser. Depending on the installation steps the Kognifai Application Framework instance is typically on http://localhost or http://localhost:8080. Log in with the username admin and password poseidon. You can see the application in the main menu. It contains a single page with some text.

### Building your First Kognifai App
You can start building your first Koginifai App by using Yeoman, a scaffolding app. Yeoman app will help you create the template for your application. This article provides simple steps of using Yeoman app and the sample codes that you can use to jump-start your application development.

#### Getting Started with Yeoman App

To get started with the Yeoman app, you will need nodejs version 8 or above to run the app. The Yeoman application is based on generators that allows users to generate their own files or generators to run the application. 

#### Step 1. The first step is to install Yeoman. Use the following code for installation:
```
npm install -g yo
```
#### Step 2. Install latest version of the yeoman Poseidon module template
```
npm install -g generator-kognifai-poseidon-module
```
#### Step 3. Install the slim local Poseidon hosting app
```
npm install -g poseidon-local
```
#### Step 4.  Create a folder where you have your modules.  See the example below
```
C:\modules
```
This is how you create a test folder and have your modules there:
```
mkdir test-module
cd test-module
yo kognifai-poseidon-module
```
> NOTE Enter the details in the yeoman “wizard”

#### Step 5.  Build the module
```
gulp build
```
> NOTE You can also open it in vs code and make your changes there.

#### Step 6.  Start the host and scan the folder of your modules
```
poseidon-local --port 8080 c:\modules
```
> NOTE It is recommended to use only 8080 port.  Using other ports may not work at the moment. 

### What will you get
After creating an empty kognifai application framework App based on the Yeoman template, you will get the following solution structure:
* [HelloPoseidon.manifest.json](https://github.com/chrisjohn727/sample/blob//Sample%20Poseidon%20Instrument/master/HelloPoseidon.manifest.json)
* [HelloPoseidon.module.ts](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/HelloPoseidon.module.ts)
* [mainView.html](https://github.com/chrisjohn727/sample/blob/master/mainView.html)
* [Web.config](https://github.com/chrisjohn727/sample/blob/master/Web.config)
* Locale-en.ts

  This file is responsible to store localization of the application. If localization is not a requirement it can be removed
* install-module.cmd

  This file simplifies the registration of the module in kognifai Application Framework.
* uninstall-module.cmd

  This file simplifies the uninstallation of the module in kognifai Application Framework.
  
 ### Create Sample Poseidon Instrument 
When creating an empty Poseidon Instruments Package the result is a sample instrument package structure that can be populated with instruments such as dashboard instruments. This article provides a sample code for a platform instrument that you can use to jumpstart your development. 

### Sample Widget Package
The newly created sample Widgets Package project is the developer’s entry point for creating a widget. User defined widgets will be placed in the “widgets” project folder.
* [app > localization > Locale-en.ts](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20localization%20%3E%20Locale-en.ts)
* [styles > instruments > _newInstrument.scss](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/styles%20%3E%20instruments%20%3E%20_newInstrument.scss)
* [app > instruments > newInstrument > newInstrument.html](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrument.html)
* [app > instruments > newInstrument > newInstrumentConfig.ts](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentConfig.ts)
* [app >  instruments > newInstrument > newInstrumentController.ts](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentController.ts
)
* [app > instruments > newInstrument > newInstrumentEdit.html](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/app%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentEdit.html)
* [App > instruments > newInstrument > newInstrumentDataController.ts](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/App%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentDataController.ts
)
* [App > instruments > newInstrument > newInstrumentDirective.ts](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/App%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentDirective.ts
)
* [App > instruments > newInstrument > newInstrumentRegister.ts](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/App%20%3E%20instruments%20%3E%20newInstrument%20%3E%20newInstrumentRegister.ts
)
* [Application.manifest.json](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/Application.manifest.json)
* [package.json](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/package.json)
* [Web.config](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/Web.config_1)
