export class DataBase {
    #database = {

    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = data
        }
    }

    select(table){
        const data = this.#database[table] ?? []

        return data
    }
}