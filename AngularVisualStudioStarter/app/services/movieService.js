﻿app.service('srvShareData', function ($window) {
    var KEY = 'App.SelectedValue';

    var addData = function (newObj) {
        //var mydata = $window.sessionStorage.getItem(KEY);
        //if (mydata) {
        //    mydata = JSON.parse(mydata);
        //} else {
        var mydata = [];
      //  }
        mydata.push(newObj);
        $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
    };

    var getData = function () {
        var mydata = $window.sessionStorage.getItem(KEY);
        if (mydata) {
            mydata = JSON.parse(mydata);
        }
        return mydata;
    };

    return {
        addData: addData,
        getData: getData
    };
});