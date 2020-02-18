export default class Move {
    _id: string;
    at: number;
    constructor(public to: string, public amount: number) {
        this.at = Date.now();
        this._id = this._makeId()
    }

    private _makeId?(length = 10) {
        var txt = ''
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return txt
    }
}
