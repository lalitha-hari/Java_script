function check_datatype(data){
    console.log(data,typeof data);
}

var a=10;
    b=10.8;
    c="very good";
    d=true;
let e=null;
b=34.98;
let date={month: 9, year:2024};
let f=Symbol("$$")
console.log("data, type of data");
check_datatype(a);
check_datatype(b);
check_datatype(c);
check_datatype(d);
check_datatype(e);
check_datatype(date);
check_datatype(f);

