import { Injectable } from '@angular/core';
import User from "../models/user.model";
import Move from '../models/move.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser$ = new BehaviorSubject<User>(this._load());
  _currentUser = this._load()
  users = [new User('moshe')]
  constructor() {
  }
  login(name) {
    const loginUser = this.users.find(user => user.name === name)
    if (loginUser) {
      this.currentUser$.next(loginUser)
      this._save('user', loginUser)
    }
    else this._signup(name)
  }
  _signup(name) {
    const newUser = new User(name)
    this.currentUser$.next(newUser)
    this._save('user', newUser)
  }
  addMove(contact, amount) {
    if (this._currentUser.coins - amount < 0) {
      throw new Error('Not enough coins')
    }
    this._currentUser.coins -= amount;
    this._currentUser.moves.push(new Move(contact, amount))
    this.currentUser$.next(this._currentUser)
  }
  getMoveByContact(contact) {
    return this.currentUser$.value.moves.filter(move => move.to === contact)
  }
  _save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  _load() {
    const user = JSON.parse(localStorage.getItem('user'))
    return new User(user.name, user.coins, user.moves)
  }

}

