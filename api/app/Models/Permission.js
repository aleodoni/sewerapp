'use strict'

const Model = use('Model')

class Permission extends Model {
  static boot () {
    super.boot()
  }

  roles () {
    return this.belongsToMany('App/Models/Role').pivotTable('role_permissions')
  }
}

module.exports = Permission
