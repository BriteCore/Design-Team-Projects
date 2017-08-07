var textDatePair = function(text, date){
    this.text = text;
    this.date = date;
}

var Note = function(text, urgent){
    this.text = ko.observable(text);
    this.urgent = ko.observable(urgent);
}

var User = function(o) {
    var u = this;
    u.id = ko.observable(o.id);
    u.name = ko.observable(o.name || '');
    u.company = ko.observable(o.company || '');
    u.position = ko.observable(o.position || '');
    u.phone = ko.observable(o.phone || '');
    u.email = ko.observable(o.email || '');
    u.address = ko.observable(o.address || '');
    u.socialFb = ko.observable(o.socialFb || '');
    u.socialIn = ko.observable(o.socialIn || '');
    u.specialDates = ko.observableArray(o.specialDates || []);
    u.rating = ko.observable(o.rating || 0);
    o.notes = ko.observableArray([]);
    o.reminders = ko.observableArray([]);
    
    u.addSpecialDate = function(){}
    u.removeSpecialDate = function(){}
    
    u.addNote = function(){}
    u.removeNote = function(){}
    
    u.addReminder = function(){}
    u.removeReminder = function(){}
}

var App = function() {
    var _this = this;
    
    this.navActive = ko.observable(false);
    this.sectionActive = ko.observable('dashboard');
    
    this.isSomeInputFocused = ko.observable(false);
    
    this.users = ko.observableArray([]);
    this.activeUser = ko.observable(null);
    this.newUser = ko.observable(null);
    
    this.openSection = function(s){
        //if new user create new user object
        _this.sectionActive(s);
        _this.navActive(false);
    }
    
    this.triggerNav = function(){
        _this.navActive(!_this.navActive());
    }
    
    var generateUsers = function(){
        for (var i = 0; i <= 8; i++) {
            _this.users().push(new User({
                id: i + 1,
                name: sampleData.names[i],
                company:sampleData.companies[i],
                position:sampleData.positions[i],
                phone: parseInt(Math.random() * 1000000000),
                email: sampleData.names[i].toLowerCase().replace(/ /g, '.') + '@example.com',
                address:'',
                socialFb:'',
                socialIn:'',
                specialDates: (Math.random() > 0.5) ? [new textDatePair(sampleData.events[Math.floor(Math.random() * sampleData.events.length)], new Date())] : null,
                rating: Math.floor(Math.random() * 4)
            }));
        };
        //add some notes?
        //add some reminders?
        _this.users.valueHasMutated();
    }
    
    setInterval(function(){
        if(document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA'){_this.isSomeInputFocused(true)}else{_this.isSomeInputFocused(false)}
    },500);
    
    generateUsers();
}