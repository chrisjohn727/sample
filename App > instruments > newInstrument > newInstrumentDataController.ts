App > instruments > newInstrument > newInstrumentDataController.ts
In this file you should include any logic that defines how data is edited and loaded in your widget. Also, it is responsible how the data will be updated/refreshed.

module PoseidonWidgetsPackage {
    "use strict";

    interface InewInstrumentDataConfigScope extends INewInstrumentConfigScope {
        config: newInstrumentDataConfig;
    }

    class NewInstrumentDataController extends NewInstrumentController {
        static $inject = ['$scope'];

        constructor(private dataScope: InewInstrumentDataConfigScope) {
            super(dataScope);
        }
    }

    angular.module("PoseidonWidgetsPackage").controller('NewInstrumentDataController', NewInstrumentDataController);
}
