// See README.md

// Load everything
Ext.require(['*']);

Ext.onReady(function() {

    // Define the User model
    Ext.define('User', {
	extend: 'Ext.data.Model',
	fields: [
            {name: 'name', type: 'string'},
            {name: 'email', type: 'string'},
            {name: 'items', type: 'array'} // has many items
	]
    });

    // Define the Item model
    Ext.define('Item', {
	extend: 'Ext.data.Model',
        fields: [
            {name: 'name', type: 'string'},
            {name: 'color', type: 'string'},
            {name: 'user', type: 'object'} // belongs to a user
        ]
    });

    // Create a sample user
    var alice = Ext.create('User', {name: 'Alice', email: 'alice@example.com'});
 
    // Create sample items
    var apple = Ext.create('Item', {name: 'Apple', color: 'Red'});
    var banana = Ext.create('Item', {name: 'Banana', color: 'Yellow'});
    var carrot = Ext.create('Item', {name: 'Cherry', color: 'Orange'});

    // Associate the user and items; we do this step-by-step here.
    // In a real-world application we would never do it this way;
    // instead we would use Sencha's powerful proxy associations.
    alice.set('items',[apple,banana,carrot]);
    apple.set('user',alice);
    banana.set('user',alice);
    carrot.set('user',alice);

    // Print the associations
    for (i=0; i < alice.get('items').count; i++){
      console.log(alice.get('name') + ' has ' + alice.get('items').get('email'));
    console.log(alpha.get('name') + ' belongs to ' + alpha.get('user').get('email'));

});


