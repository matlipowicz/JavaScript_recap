export interface FirstName {
    type: string;
    title: string;
    input_type: string;
    name: string;
    required: boolean;
}

export interface LastName {
    type: string;
    title: string;
    input_type: string;
    name: string;
    required: boolean;
}

export interface Email {
    type: string;
    title: string;
    pattern: string;
    input_type: string;
    name: string;
    required: boolean;
}

export interface Question {
    type: string;
    title: string;
    input_type: string;
    name: string;
    required: boolean;
}

export interface Properties {
    firstName: FirstName;
    lastName: LastName;
    email: Email;
    question: Question;
}

export interface Form {
    title: string;
    description: string;
    type: string;
    properties: Properties;
}

export interface RootObject {
    form: Form;
}
