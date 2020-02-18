import { Injectable } from '@angular/core';
import User from "../models/user.model";
import Move from '../models/move.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User = this._load()

  users = [new User('moshe')]
  constructor() {
  }
  login(name) {
    const loginUser = this.users.find(user => user.name === name)
    if (loginUser) {
      this.currentUser = loginUser
      this._save('user', loginUser)
    }
    else this._signup(name)
  }
  _signup(name) {
    const newUser = new User(name)
    this.currentUser = newUser
    this._save('user', newUser)
  }
  addMove(contact, amount) {
    this.currentUser.moves.push(new Move(contact, amount))
  }
  getMoveByContact(contact) {
    return this.currentUser.moves.find(move => move.to === contact)
  }
  _save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  _load() {
    return JSON.parse(localStorage.getItem('user'))
  }

}

