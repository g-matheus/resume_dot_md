export class User {
    constructor({ firstName, lastName, uid = crypto.randomUUID(), email }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.uid = uid;
        this.email = email;
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            uid: this.uid,
            email: this.email,
        };
    }
}

export default User;
