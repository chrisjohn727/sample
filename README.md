![Home Image](https://github.com/chrisjohn727/sample/blob/master/images/Kognifai.png)
__Welcome to Kognifai Application Framework__. This repository guides you to create your first Poseidon Module, Widget, a Kognifai (Yeoman) application and samples for each of them.

## Create Your First Module 
Creating Kognifai application has its own specifications as it is the  same case with any other platforms. Application Framework provides a Visual Studio project template to create the basic artefacts required by Kognifai. 

Also, we assume that you are currently running a development instance of Kognifai and have already completed the neccessary steps to run this instance.

## Install

To install and configure Kognifai Application Framework, refer to: 
* [Install and Configure Application Framework](https://github.com/chrisjohn727/sample/wiki).
* [Sample](https://github.com/chrisjohn727/sample/blob/master/sample.md)

## QuickStart
* [Step 1. Set up the Development Environment](https://github.com/chrisjohn727/sample/wiki/Set-up-the-Development-Environment)
* [Step 2. Create a new project](https://github.com/chrisjohn727/sample/wiki/Step-2.-Create-a-new-project)
* [Step 3: Start the application](https://github.com/chrisjohn727/sample/wiki/Step-3:-Start-the-application)


## Building your First Kognifai App
You can start building your first Koginifai App by using Yeoman, a scaffolding app. Yeoman app helps you to create the templates for your application. This article provides simple steps on how to use the Yeoman app and the sample codes to jump-start your application development.
* [Getting Started with Yeoman App](https://github.com/chrisjohn727/sample/wiki/Getting-Started-with-Yeoman-App)

## What will you get
After creating an empty kognifai application framework App based on the Yeoman template, you will get the following solution structure:
* HelloPoseidon.manifest.json

  The manifest file is used by the Poseidon Module Installer to register the new module in the DB.
  
   [Sample HelloPoseidon.manifest.json code](https://github.com/chrisjohn727/sample/blob/master/Sample%20Poseidon%20Instrument/HelloPoseidon.module.ts)
   
 * HelloPoseidon.module.ts
 
   In this file the root Angular module for the application is registered. Also some additional configuration can be performed, e.g.  creating a state, registering the app in the ‘navigationService’, etc.
   
    [Sample HelloPoseidon.module.ts code](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/HelloPoseidon.module.ts)
 
 * mainView.html
 
     This is the main view of the new application. You can compose your content inside.
     
     [sample mainView.html code](https://github.com/chrisjohn727/sample/blob/master/HelloPoseidon/mainView.html)
     
* [Web.config](https://github.com/chrisjohn727/sample/blob/master/HelloPoseidon/Web.config)
* [Locale-en.ts]

    This file is responsible to store localization of the application. If localization is not a requirement it can be removed. 
* [install-module.cmd]

    This file simplifies the registration of the module in kognifai Application Framework.

* [uninstall-module.cmd](https://github.com/chrisjohn727/sample/blob/master/HelloPoseidon/uninstall-module.cmd)
  
 ## Create Sample Poseidon Instrument 
The successfull creation of an empty Poseidon Instruments Package results a sample instrument package structure that can be populated with instruments such as dashboard instruments. This article provides a sample code for a platform instrument that you can use to jump-start your development. 

## Sample Widget Package
The newly created sample Widgets Package project is the developer’s entry point for creating a new widget. User defined widgets are stored in the “widgets” project folder.
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
* [package.json](https://github.com/chrisjohn727/sample/blob/master/Sample%20Poseidon%20Instrument/package.json)
* [Web.config](https://github.com/chrisjohn727/sample/blob/master/Sample%20Poseidon%20Instrument/Web.config_1)

## Kognifai instrument

#### Quick Start
* [Step 1. Set up the Development Environment](https://github.com/chrisjohn727/sample/wiki/Set-up-the-Development-Environment)
* [Step 2. Create a new project](https://github.com/chrisjohn727/sample/wiki/Kognifai-Instrument_Step-2.-Create-a-new-project)
* [Step 3. Run the instrument in the platform](https://github.com/chrisjohn727/sample/wiki/Step-3:-Run-the-instrument-in-the-platform)

### Basic use
* [Application Files](https://github.com/chrisjohn727/sample/wiki/Application-Files)
* [Build Process](https://github.com/chrisjohn727/sample/wiki/Build-Process)

## License
