const context = require('./database');


class Product {
    static getAll(){
        return context.execute('select * from category');
    }

    static getById(id){
        // return context.execute(`select * from category where Id = ?`,[id]);
        return context.execute(`select * from category where Id = ${id}`);
    }
    static Insert(categoryname){
        return context.execute('INSERT INTO category (categoryname) values (?)',[categoryname]);
    }

    static update(categoryname,id){
        return context.execute('UPDATE category SET categoryname = ? where Id = ?',[categoryname,id]);
    }
    static delete(id){
        return context.execute(`delete from category where Id = ${id}`);
    }
}

module.exports = Product;