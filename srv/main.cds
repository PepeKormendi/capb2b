using org from '../db/schema';

extend org.peterkor.Books with {
    virtual urgency: String;
}
service bookshop {
    entity Books   as projection on org.peterkor.Books;
    entity Authors as projection on org.peterkor.Authors;
    entity Orders as projection on org.peterkor.Orders;

}
