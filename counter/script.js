$(document).ready(function(){
    setInterval(myFunction, 1000);
    function myFunction() {
        const Tdate = new Date();
        Tdate.setFullYear(2026);
        Tdate.setMonth(1);
        Tdate.setDate(15);
        Tdate.setHours(0);
        Tdate.setMinutes(0);
        Tdate.setSeconds(0);

        let tyear = Tdate.getFullYear();
        let tmonth = Tdate.getMonth() + 1;
        let tdate = Tdate.getDate();
        let thour = Tdate.getHours();
        let tminute = Tdate.getMinutes();
        let tsecond = Tdate.getSeconds();
        
        // Date
        if(tdate >= 10) {
            $('#Tdate').html(tdate);
        } else {
            $('#Tdate').html('0' + tdate);
        }
    
        // Month
        if(tmonth >= 10) {
            $('#Tmonth').html(tmonth);
        } else {
            $('#Tmonth').html('0' + tmonth);
        }
    
        // year
        $('#Tyear').html(tyear);
    
        // Hour
        if(thour >= 10) {
            $('#Thour').html(thour);
        } else {
            $('#Thour').html('0' + thour);
        }
    
        // Minute
        if(tminute >= 10) {
            $('#Tminute').html(tminute);
        } else {
            $('#Tminute').html('0' + tminute);
        }
    
        // Seconds
        if(tsecond >= 10) {
            $('#Tsecond').html(tsecond);
        } else {
            $('#Tsecond').html('0' + tsecond);
        }
    
        var Cdate = new Date();
        let year = Cdate.getFullYear();
        let month = Cdate.getMonth() + 1;
        let date = Cdate.getDate();
        let hour = Cdate.getHours();
        let minute = Cdate.getMinutes();
        let second = Cdate.getSeconds();
    
        // Date
        if(date >= 10) {
            $('#Cdate').html(date);
        } else {
            $('#Cdate').html('0' + date);
        }
    
        // Month
        if(month >= 10) {
            $('#Cmonth').html(month);
        } else {
            $('#Cmonth').html('0' + month);
        }
    
        // year
        $('#Cyear').html(year);
    
        // Hour
        if(hour >= 10) {
            $('#Chour').html(hour);
        } else {
            $('#Chour').html('0' + hour);
        }
    
        // Minute
        if(minute >= 10) {
            $('#Cminute').html(minute);
        } else {
            $('#Cminute').html('0' + minute);
        }
    
        // Seconds
        if(second >= 10) {
            $('#Csecond').html(second);
        } else {
            $('#Csecond').html('0' + second);
        }


        // remaining time
        $('#DYear').html(((Tdate - Cdate) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(5));
        $('#DMonth').html(((Tdate - Cdate) / (1000 * 60 * 60 * 24) / 30.4375).toFixed(4));
        $('#DDay').html(((Tdate - Cdate) / (1000 * 60 * 60 * 24)).toFixed(3));
        $('#DHour').html(((Tdate - Cdate) / (1000 * 60 * 60)).toFixed(2));
        $('#DMinute').html(((Tdate - Cdate) / (1000 * 60)).toFixed(1));
        $('#DSecond').html(((Tdate - Cdate) / (1000)).toFixed(0));
        }
});
