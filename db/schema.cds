namespace org.peterkor;

using from '@sap/cds-common-content';
using {
    cuid,
    managed,
    Country
} from '@sap/cds/common';


entity Books : cuid, managed {
    title  : String;
    author : Association to Authors;
}

entity Authors : cuid {
    name           : String;
    countryOfBirth : Country;
    books          : Association to many Books
                         on books.author = $self;
}

entity Orders : cuid {
    comment : String;
    Items   : Composition of many OrderItems
                  on Items.parent = $self;
}

entity OrderItems { // to be accessed through Orders only
    key parent   : Association to Orders;
    key pos      : Integer;
        quantity : Integer;
}
