export class User {
  FirstName!: string | null;
  LastName!: string | null;
  GetFullName() {
    return this.FirstName + ' ' + this.LastName;
  }
}
