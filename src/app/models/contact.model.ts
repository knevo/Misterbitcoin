export default class Contact {
    _id: string;
    constructor(public name: string = '', public email: string = '', public phone: string = '') {
        if (!name && !email && !phone) return
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
