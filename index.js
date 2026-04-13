class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  whoIsOlder(altroUser) { // un solo parametro: l'altro utente
    if (this.age === altroUser.age) {
      console.log("Siamo coetanei");
    } else if (this.age < altroUser.age) {
      console.log(`${altroUser.firstName} è più vecchio`);
    } else {
      console.log(`${this.firstName} è più vecchio`);
    }
  }
}

const user1 = new User("Biagio", "Cota", 26, "Mattinata");
const user2 = new User("Isabella", "Abbate", 20, "Tremezzina");

user1.whoIsOlder(user2); // chiamata corretta per metodo