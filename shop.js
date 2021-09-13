function m() {

    var selectbox = parseInt(document.getElementById("selectboxx").value);

    if (selectbox==""){
        alert("لطفا نام شهر خود را انتخاب کنید.");
        document.getElementById("selectboxx").focus();
    }
    else {
        var m1 = parseInt(document.getElementById("mast").value) * 7200;
        var m2 = parseInt(document.getElementById("milkpor").value) * 11250;
        var m3 = parseInt(document.getElementById("milkkam").value) * 10800;
        var m4 = parseInt(document.getElementById("khame").value )* 5650;
        var m5 = parseInt(document.getElementById("kashk").value) * 7000;
        var m6 = parseInt(document.getElementById("escrab").value )* 53200;
        var m7 = parseInt(document.getElementById("tarmim").value) * 25300;
        var m8 = parseInt(document.getElementById("abresan").value) * 25400;
        var m9 = parseInt(document.getElementById("mammardane").value) * 27200;
        var m10 = parseInt(document.getElementById("mamzanane").value) * 29600;

        var sum = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8 + m9 + m10+selectbox;
        document.getElementById("x").value=sum;
        console.log(sum);
    }

}
function t(i){
    if(i==1){
        var m1 = parseInt(document.getElementById("mast").value) * 7200;
        var m11="قیمت :  7,200 ت **** جمع کل : "+m1+"**** ماست موسیر 250 گرمی رامک  **** تعداد : "+parseInt(document.getElementById("mast").value);
        document.getElementById("listt").value+=m11;

    }if(i==2){
        var m2 = parseInt(document.getElementById("milkpor").value) * 11250;
        var m22="قیمت :  11,250 ت **** جمع کل : "+m2+"**** شیر پرچرب 1 لیتری رامک  **** تعداد : "+parseInt(document.getElementById("milkpor").value);
        document.getElementById("listt").value+=m22;

    }if(i==3){
        var m3 = parseInt(document.getElementById("milkkam").value) * 10800;
        var m33="قیمت :  10,800 ت **** جمع کل : "+m3+"**** شیر کم چرب 1 لیتری رامک  **** تعداد : "+parseInt(document.getElementById("milkkam").value);
        document.getElementById("listt").value+=m33;


    }if(i==4){
        var m4 = parseInt(document.getElementById("khame").value )* 5650;
        var m44="قیمت :  5,650 ت **** جمع کل : "+m4+"**** خامه شکلاتی 100گرمی رامک  **** تعداد : "+parseInt(document.getElementById("khame").value);
        document.getElementById("listt").value+=m44;
    }if(i==5){
        var m5 = parseInt(document.getElementById("kashk").value) * 7000;
        var m55="قیمت :  7,000 ت **** جمع کل : "+m5+"**** کشک 250گرمی رامک  **** تعداد : "+parseInt(document.getElementById("kashk").value);
        document.getElementById("listt").value+=m55;

    }if(i==6){
        var m6 = parseInt(document.getElementById("escrab").value )* 53200;
        var m66="قیمت :  53,200 ت **** جمع کل : "+m6+"**** اسکراب صورت گردو شون  **** تعداد : "+parseInt(document.getElementById("escrab").value);
        document.getElementById("listt").value+=m66;

    }if(i==7){
        var m7 = parseInt(document.getElementById("tarmim").value) * 25300;
        var m77="قیمت :  25,300 ت **** جمع کل : "+m7+"**** شامپو ترمیم کننده کراتین و جینسینگ شون  **** تعداد : "+parseInt(document.getElementById("tarmim").value);
        document.getElementById("listt").value+=m77;

    }if(i==8){
        var m8 = parseInt(document.getElementById("abresan").value) * 25400;
        var m88="قیمت :  25,400 ت **** جمع کل : "+m8+"**** کرم آبرسان آلوئه ورا 50میل شون  **** تعداد : "+parseInt(document.getElementById("abresan").value);
        document.getElementById("listt").value+=m88;

    }if(i==9){
        var m9 = parseInt(document.getElementById("mammardane").value) * 27200;
        var m99="قیمت :  27,200 ت **** جمع کل : "+m9+"**** دئودورانت رولی مردانه بلک شون  **** تعداد : "+parseInt(document.getElementById("mammardane").value);
        document.getElementById("listt").value+=m99;

    }if(i==10){
        var m10 = parseInt(document.getElementById("mamzanane").value) * 29600;
        var m1010="قیمت :  29,600 ت **** جمع کل : "+m10+"**** دئودورانت رولی زنانه فلاور شون  **** تعداد : "+parseInt(document.getElementById("mamzanane").value);
        document.getElementById("listt").value+=m1010;
        document.getElementById("listt").write('<br>');
    }

}