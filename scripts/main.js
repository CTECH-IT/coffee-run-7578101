// Put your JavaScript here
(function(window) {
    'use strict';
    const FORM_SELECTOR = '[data-coffee-order="form"]';
    let App = window.App;
    let Truck = App.truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let myTruck = new Truck('12345', new DataStore());
    window.myTruck = myTruck;
    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

})(window);

(function (window) {
    'use strict';
    let App = window.App || {};
    function DataStore() {
        console.log('Running the DataStore function...')
    }
    
    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };

    DataStore.prototype.get = function (key) {
        return this.data[key];
    };

    DataStore.prototype.getAll = function () {
        return this.data;
    };

    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);

function DataStore() {
    console.log('Running the DataStore function...')
    this.data = {};
}

