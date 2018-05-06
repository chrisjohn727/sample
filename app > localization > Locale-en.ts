app > localization > Locale-en.ts
In the localization files you can add any necessary key/value pairs that would need translating.

module MyPoseidonWidgetsPackage1 {

    angular

        .module('MyPoseidonWidgetsPackage1')

        .config(function ($translateProvider: ng.translate.ITranslateProvider) {

            $translateProvider.translations('en', {

                'MyPoseidonWidgetsPackage1': {

                    Title: 'MyPoseidonWidgetsPackage1'

                }

            });

        });
