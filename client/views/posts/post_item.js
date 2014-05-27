Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a'); a.href = this.url;   //this refers to the currentPostItem iterating through
        return a.hostname;
    },
    random:function(){
        var random=Math.random();
        return random;

    }
});