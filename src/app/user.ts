export class User {
    constructor(
        public name: string,
        public userId: string,
        public emailId: string,
        public password: string,
        public confirmPassword: string
    ) {}
}