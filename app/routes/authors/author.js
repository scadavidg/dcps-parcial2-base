import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    let autor = this.store.findRecord('author', params.id);
    return this.store.findRecord('author', params.id);
  }
});
