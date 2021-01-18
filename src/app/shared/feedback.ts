/*This class corresponds to the feedbacks provided by the user of the restaurant*/

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