/*This class corresponds to the feedbacks provided by the user of the restaurant. 
This is nothing but an example of data model structure. */

export class Feedback{
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
}

export const ContactType = ['None', 'Tel', 'Email'];