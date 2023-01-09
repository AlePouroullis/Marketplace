// create a static class that validates input with function that validates email
export class Validator {
  static isValidEmail(email: string): boolean {
    return email.includes("@");
  }

  static isValidUniversityEmail(email: string) {
    return this.isValidEmail(email) && email.includes("ac.za");
  }
}
