export class User {

    name: string;
    email: string;
    company_name: string;

    constructor(user: any) {
        this.name = user.name || "";
        this.email = user.email || "";
        this.company_name = user.company.name || "";
    }

}