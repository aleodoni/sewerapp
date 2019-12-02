'use strict'

const Model = use('Model')

class Role extends Model {
  static boot () {
    super.boot()
  }

  permissions () {
    return this.belongsToMany('App/Models/Permission').pivotTable('role_permissions')
  }
}

module.exports = Role
