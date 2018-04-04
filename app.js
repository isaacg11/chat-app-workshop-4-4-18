let pubnub = new PubNub({
    publishKey : 'PUBLISH_KEY', 
    subscribeKey : 'SUBSCRIBE_KEY' 
});

function $(id) { 
    return document.getElementById(id); 
}

let output = $('output');
let channel = 'CHANNEL';

pubnub.addListener({
    message: function(obj) {
        output.innerHTML = ('' + obj.message).replace( /[<>]/g, '' ) + '<br>' + output.innerHTML
    }
});

pubnub.subscribe({channels: [channel]});

function send(n) {
    pubnub.publish({
        channel : channel,
        message : (n === 1) ? (input1.value + ' - User 1') : (input2.value + ' - User 2'),
        x : ((n === 1) ? input1.value='' : input2.value='')
    });  
}