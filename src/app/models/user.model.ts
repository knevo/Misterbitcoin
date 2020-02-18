import Move from './move.model'
import { BehaviorSubject } from 'rxjs';
export default class User {
    _id: string;
    constructor(public name: string, public coins = 100, public moves: Move[] = []) {

    }
}
