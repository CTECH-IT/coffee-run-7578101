// Put your JavaScript here
(function(window) {
    'use strict';
    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    let App = window.App;
    let Truck = App.truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let formHandler = new FormHandler(FORM_SELECTOR);
    let CheckList = App.CheckList;
    let Validation = App.Validation;

    let myTruck = new Truck('12345', new DataStore());
    let checkList = new CheckList(CHECKLIST_SELECTOR);

    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    
    window.myTruck = myTruck;

    formHandler.addSubmitHandler(function (data) {
        myTruck.create0rder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);
    

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

