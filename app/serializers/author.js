import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr){
    switch (attr) {
      case "lastname":
        return "last-name";
      case "firstname":
        return"first-name";
      case "profilepicture":
        return"profile-picture";
      default:
        return this._super(...arguments);
    }
  }
  });
