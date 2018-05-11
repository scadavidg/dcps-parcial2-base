import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    eliminarPost(post){
      let warning = confirm("you really want delete this post?");
      if(warning){
        this.get("model").posts.removeObject(post);
        post.destroyRecord();
      }


    }
  }
});
