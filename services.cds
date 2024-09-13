using { cuid, managed, Country } from '@sap/cds/common';

service bookshop {
    entity Books : cuid, managed {
        title: String;
    }

    entity Authors : cuid {
        name:String;
        countryOfBirth: Country;
    }    


}
