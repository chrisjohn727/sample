![Home Image](https://github.com/chrisjohn727/sample/blob/master/images/Kognifai.png)
__Welcome to Kognifai Application Framework__. This repository guides you to create your first Poseidon Module, Widget, a Kognifai (Yeoman) application and samples for each of them.

## Create Your First Module 
Creating Kognifai applications has its specifics, as is the case with any other platform. In order to ease the burden on developers we provide a Visual Studio project template to give them a useful starting point and create the basic artefacts required by Kognifai. 

This guide assumes that you are running a development instance of Kognifai and have completed the necessary steps to successfully do so.

To know how to install and configure Kognifai Application Framework, refer to  
* [Install and Configure Application Framework](https://github.com/chrisjohn727/sample/wiki).

## QuickStart
* [Step 1. Set up the Development Environment](https://github.com/chrisjohn727/sample/wiki/Set-up-the-Development-Environment)
* [Step 2. Create a new project](https://github.com/chrisjohn727/sample/wiki/Step-2.-Create-a-new-project)
* [Step 3: Start the application](https://github.com/chrisjohn727/sample/wiki/Step-3:-Start-the-application)

### Building your First Kognifai App
You can start building your first Koginifai App by using Yeoman, a scaffolding app. Yeoman app will help you create the template for your application. This article provides simple steps of using Yeoman app and the sample codes that you can use to jump-start your application development.


### What will you get
After creating an empty kognifai application framework App based on the Yeoman template, you will get the following solution structure:
* [HelloPoseidon.manifest.json](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/HelloPoseidon.manifest.json)
* [HelloPoseidon.module.ts](https://github.com/chrisjohn727/sample/blob/master//Sample%20Poseidon%20Instrument/HelloPoseidon.module.ts)
* [mainView.html](https://github.com/chrisjohn727/sample/blob/master/HelloPoseidon/mainView.html)
* [Web.config](https://github.com/chrisjohn727/sample/blob/master/HelloPoseidon/Web.config)
* [Locale-en.ts](https://github.com/chrisjohn727/sample/blob/master/HelloPoseidon/Locale-en.ts)
* [install-module.cmd](https://github.com/chrisjohn727/sample/blob/master/HelloPoseidon/install-module.cmd)
* [uninstall-module.cmd](https://github.com/chrisjohn727/sample/blob/master/HelloPoseidon/uninstall-module.cmd)
  
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
* [package.json](https://github.com/chrisjohn727/sample/blob/master/Sample%20Poseidon%20Instrument/package.json)
* [Web.config](https://github.com/chrisjohn727/sample/blob/master/Sample%20Poseidon%20Instrument/Web.config_1)

### Kognifai instrument

#### Quick Start
* [Step 1. Set up the Development Environment](https://github.com/chrisjohn727/sample/wiki/Set-up-the-Development-Environment)

#### Step 2. Create a new project

After that you can simply create a new Poseidon Instrument Package from Visual Studio which will provide us with basic necessary files required by a Kognifai instrument.
To create a new instrument project, choose File, New Project option and select the Poseidon Instrument Package template in the TypeScript section. Enter the name of the project. For example SamplePoseidonInstrument:

#### Step 3: Run the instrument in the platform

Now we need to build our new project. 
Wait the npm to download all of its packages and when the build finishes right-click on the project from the source in the solution explorer. Choose Properties and then Web from the left navigation menu:

Select Local IIS from the dropdown and enter the correct path to Poseidon local IIS instance + the base path to application files Server/Modules/SamplePoseidonInstrument. 
* [Poseidon.Module.Installer.exe](https://github.com/chrisjohn727/sample/blob/master/App%20Framework/Poseidon.Module.Installer)

We need to use the Poseidon Module Installer tool in order to register our new application. In the generated project there is already a cmd scripts that invokes the installer. First we need to ensure that the path to Poseidon.Module.Installer.exe is correct in the install-module.cmd file located in the newly created project:

Then simply run install-module.cmd and “Module installed successfully” message should be shown.
In order to open the new instrument, just browse your local Kognifai instance. 
Open New Dashboard from Dashboards application in Tools menu and then open Toolbox menu from right upper corner of the screen. Then you should see our newly created SamplePoseidonInstrument located in ‘Custom’ category.

Add it to your Dashboard:

What you see is actually the code from newInstrument.html file located in app/instruments/newInstrument folder.
If you click on the wheel at the top right corner of the instrument you will see the editing panel. The markup for it is located also in app/instruments/newInstrument folder of your project at newInstrumentEdit.html file.

We have created a very basic Kognifai instrument.

### Basic use
#### Application Files
The template defines a folder layout for the files in the project to keep things more organized. The app folder contains instrument specific files such as TypeScript files and angular templates. The styles folder is a place for all styles. Use the assets folder for other resources, like images, fonts, etc. Keep in mind that the build process uses these folders to discover files for some build steps. If you change the names you should change the build process configuration as well.

#### SamplePoseidonInstrument.module.ts:
Here we define an angular module for this application. We use it to define other angular components. 

#### newInstrumentConfig.ts:
The instrument’s config file is used to define the configuration attributes/properties of the instrument.

#### newInstrumentController.ts:
In this file you should include any logic that defines how data is displayed in your instrument. You can also use the file to:

* create your property panel structure,
* define custom/private properties (aside from the ones in the ‘config’)


#### newInstrumentDataController.ts:
The actual angular controller of our instrument. In this file you should include any logic that defines how data is loaded and updated in the instrument.

#### newInstrumentDirective.ts:
Here an angular directive is created in Typescript. Created properties of return object as properties of directive class, which implements ng.IDirective. Then create factory function which implements ng.IDirectiveFactory which returns the new instance of directive, where we inject the dependencies for Directive.

#### newInstrumentRegister.ts:
Here we register the instrument in the ‘dashboardProvider’ service which will enable the Display Framework to see it and define the configuration attributes of the instrument

### Styles
The project assumes the use of SASS to define styles for the instrument. The build process compiles the sass files in the styles folder to CSS. An additional plugin is used (autoprefixer) to automatically add vendor prefixes to properties. This can save a bit of extra typing in some cases. Note that you should define the CSS rules in such a way as to avoid potential collisions with other instruments. A useful technique is to nest all selectors inside a unique class selector for this instrument.
#### newInstrument.scss:
The file located in styles/instruments/ folder is the instrument’s style file. Here you should add your CSS rules that will define how your instrument looks.

### Build Process
The build process of the project is extended by using gulp tasks integrated with the MSBuild process. It should be noted that the template does not cover the automatic generation of deployment files at this point.

Gulp is a node.js module that supports the definition and execution of build tasks. It uses a pipe/filter architecture. In a standard flow you first use read a bunch of files into a stream, then you apply various transformations and finally write the result to the file system. Gulp itself provides just the bare minimum to do that. Everything else is handled by other npm modules.
The central file to the build process is gulpfile.js. Here we use standard node.js syntax to imperatively define various useful build tasks.

``` typescript
gulp.task('default', ['help']);

gulp.task('help', listing);

if (args.release) {
    gulp.task("build", function (callback) {
        sequence(['compile:styles', 'compile:templates', 'compile:typescript', 'bundle:dependencies', 'generate:database-scripts'],
            ['optimize'],
            callback);
    });
}
else {
    gulp.task("build", function (callback) {
        sequence(['compile:styles', 'compile:templates', 'compile:typescript', 'bundle:dependencies', 'generate:database-scripts'],
            //'compile:tests',
            //'run:unittests',
            callback);
    });
}

gulp.task('watch', ['watch:typescript', 'watch:styles', 'watch:templates']);

gulp.task('clean', ['clean:typescript', 'clean:styles', 'clean:templates', 'clean:dependencies', 'clean:database-scripts']);
```
They can be invoked by using command line. The build and clean tasks are directly tied to the MSBuild process and can be triggered from Visual Studio.


| Build tasks |Description / Definition |
| --- | --- |
| gulp help | Returns a list of available commands |
| gulp build | Performs a standard development build. This task creates the templates.js file from all 
templates found under the app/ folder and compiles sass files found in the styles folder. 
The output is found inside the build/ folder |
| gulp build -r | Performs a release build. There is an additional minification step for JavaScript and CSS files. |
| gulp watch | Starts an ongoing process that watches for changes to templates and sass files. The appropriate files are regenerated when a change is detected. |

Step 4 : Edit your first Poseidon Application to use User Settings App Framework Service

In order to create a simple form using the Poseidon User Settings framework service we need to first add a controller. Right-click on app folder in our new project from solution explorer and add new item and choose typescript file named SamplePoseidonAppController.ts and define an external module with an exported class which we will use for our logic.
``` typescript
module SamplePoseidonApp {
    "use strict";

    export class SamplePoseidonAppController {
}
angular.module('SamplePoseidonApp').controller('SamplePoseidonAppController', SamplePoseidonAppController);
}
```
We can pass values of different types to the User Settings service as a parameter and to illustrate that we will add an interface for the settings properties with two fields - name and age:
```typescript
export interface ISampleAppUserSettings {
        	name?: string;
        	age?: number;
}
```
Second thing is to add support for user settings to our controller. Simply add 
```typescript
constructor(private userSettings: Poseidon.IUserSettings) {
       }
```
In order to work with the available properties and methods we need to add also the scope object which is available for both the view and the controller.
```
constructor(private $scope: ISampleAppUserSettings, 
            	     private userSettings: Poseidon.IUserSettings) {
}
``` typescript
The scope is the binding part between the HTML (view) and in our case the Typescript (controller). In order to inject dependencies you can use $inject property. Simply put, this is an array which contains the names of your injections in the same order as your parameters .When you include that in your controller (or any other Angular component), the Angular compiler will take advantage of that instead of using the parameters in your constructor. The tricky part here is that this property needs to be defined as part of the class and not as part of an instance of the class. In the class based object oriented world, this is called a static. Let’s change our controller then.
```
       static $inject = ['$scope', 'userSettings'];
constructor(private $scope: ISampleAppUserSettings, 
       private userSettings: Poseidon.IUserSettings) {
}
```
Dependency injection in angular is simple in its basic form. You define your services/factories/controllers/whatever through an Angular module and then you use function parameters to inject these in other places.

Now let’s create the html form that we will use:
```typescript
<div>
    <h1 >No value stored in User Setting</h1>
    <h1 >User Settings are available. The name of the user is ---. The age of the user is: ---. </h1>
   
    <div >
        <label for="name">Name:</label>
        <input type="text" name="name" />
    </div>

    <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" name="age" />
    </div>

    <div>
        <input type="button" value="Save">
    </div>
</div>
```
To add some good look of the form we can use some bootstrap components which:
```typescript
<div class="container">
    <h1>No value stored in User Setting</h1>
    <h1>User Settings are available. The name of the user is ---. The age of the user is: ---. ></h1>
   
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" name="name" />
    </div>

    <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" class="form-control" name="age" />
    </div>

    <div>
        <input type="button" value="Save" class="btn btn-default">
    </div>

    <div class="alert alert-success form-group" role="alert">You have successfully stored your personal details!</div>
</div>
```
In order to start using the controller with the view we will use "controller as" syntax. It allows you to define an identifier for the controller instance that is controlling your view. This means you can then access properties of that controller.
``` typescript
<div ng-controller="ExampleController as example">
    <input type="text" ng-model="example.message" />
</div>
```
This syntax is an alternative to the controller defining data directly on the scope. It is particularly useful when working with TypeScript, which have a nice class syntax. We can define a controller as a class, with properties for the data to display and methods that handle UI events.

So we can add ng-controller="SamplePoseidonAppController as vm" to our div and bind the inputs with the controller using ng-model="settingValue.name":
```
div class="container" ng-controller="SamplePoseidonAppController as vm">
<h1 ng-show="isLabelShown">No value stored in User Setting</h1>
<h1 ng-show="!isLabelShown">User Settings are available. The name of the user is &nbsp;<u><i>{{settingValue.name}}</i></u>. The age of the user is: &nbsp;<u><i>{{settingValue.age}}</i></u></h1>

<div class="form-group">
     <label for="name">Name:</label>
     <input type="text" class="form-control" ng-model="settingValue.name" name="name" />
</div>

<div class="form-group">
     <label for="age">Age:</label>
     <input type="number" class="form-control" ng-model="settingValue.age" name="age" />
</div>
<div ng-show="isSuccessAlertShown" class="alert alert-success form-group" role="alert">You successfully have stored your personal details!</div>
</div>
```
We should add those properties in the controller but first we can create another exported interface for the properties which we will use in our App as a scope:
``` typescript
export interface ISampleAppUserScope {
        isLabelShown: boolean;
        isSuccessAlertShown: boolean;
        isSettingTypeExisting: boolean;
        settingValue: ISampleAppUserSettings;
    }
```
And modify $scope in the constructor to use it instead of ISampleAppUserSettings.
We should also modify the body of the constructor and initialize settingValue and isSuccessAlertShown.
``` typescript
$scope.settingValue = {};
this.$scope.isSuccessAlertShown = false;
```
In order to add or modify a UserSetting we need to have a SettingType with the same SettingTypeID. In order to do that we need to execute a simple SQL insert statement using the Platform Database which Application Framework is using: 
```
INSERT INTO [UserSettings].[SettingType] (SettingTypeName, ModuleID)
        VALUES ('PersonSetting', '6cebe3af-27de-4304-9a66-7cfa105f278d');
```
The first one is SettingType name and the second one is unique GUID for the module.
Now we should add them to our controller as a constants:
```
private readonly MODULE_ID: string = '6cebe3af-27de-4304-9a66-7cfa105f278d';
       private readonly SETTING_NAME: string = 'PersonSetting';
```
Next thing we should do is to add methods to read and write to the UserSettings:
To read:
```
public get(): void {
this.userSettings.get(this.MODULE_ID, this.SETTING_NAME).then((res: ISampleAppUserSettings) => {
                if (res == null)
                {
                    this.$scope.isLabelShown = true;
                }
                else
                {
                    this.$scope.settingValue.name = res.name;
                    this.$scope.settingValue.age = res.age;
                    this.$scope.isLabelShown = false;
                }
            });
        }
```
To set:
```
public set(): ng.IPromise<void> {
return this.userSettings.set(this.MODULE_ID, this.SETTING_NAME, this.$scope.settingValue);
       }
```
And initialize get at the constructor: 
```
this.get();
```
Add this to the body of the constructor.

One last thing to do is to tell the controller what to happen when we click the “Save” button of our form:
```
public insertValue() {
            if (this.$scope.settingValue.name != null) {
                this.set().then(x => {
                    this.$scope.isSuccessAlertShown = true;
                    this.$scope.isLabelShown = false;
                });
            }
        }
```
We need also to bind this method to click event of the button using Angular directive
```
<div ng-click="vm.insertValue()">
          <input type="button" value="Save" class="btn btn-default">
       </div>
```
Now just build the project and browse the Poseidon website. Navigate to our newly created app and try to pass some data to the User Settings Service by filling Name and Age and then clicking on Save button.  



