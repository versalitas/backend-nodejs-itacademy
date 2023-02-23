

class User{
      constructor(name){

        this.user = name;
        this.themes = [];
      }

//add subscription
      addSubscription(theme){
          this.themes.push(theme.name, theme.emitter);

      }
// sendMessage

sendmessage(theme, message){

}




}

module.exports = User;

