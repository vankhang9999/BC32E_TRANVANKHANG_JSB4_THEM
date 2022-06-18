//BT5: tính ngày tháng năm 

document.getElementById('btnMai').onclick=function(){
    var ngay=Number(document.getElementById('ngay').value);
    var thang=Number(document.getElementById('thang').value);
    var nam=Number(document.getElementById('nam').value);
    var ketqua=0;
    if(thang===2&&ngay===28){
        ngay=1;
        thang=thang+1;
        nam=nam;
    }else if(ngay===31&&thang===12){
        ngay=1;
        thang=1;
        nam=nam+1;
    }else{
        ngay+=1;
    }
    ketqua=ngay+'/'+thang+'/'+nam;
    document.getElementById('ketQua_b5').innerHTML=ketqua;
}
document.getElementById('btnHomQua').onclick=function(){
    var ngay=Number(document.getElementById('ngay').value);
    var thang=Number(document.getElementById('thang').value);
    var nam=Number(document.getElementById('nam').value);
    var ketqua_1=0;
    if(thang===3&&ngay===1){
        ngay=28;
        thang-=1;
    }else if(ngay===1&&thang===1){
        ngay=31;
        thang=12;
        nam-=1;
    }else{
        ngay-=1;
    }

    ketqua_5=ngay+'/'+thang+'/'+nam;
    document.getElementById('ketQua_b5').innerHTML=ketqua_5;
}

///Bài 6:
document.getElementById('btnTinhNgay').onclick=function(){
    //input:
    var inThang=Number(document.getElementById('inThang').value);
    var inNam=Number(document.getElementById('inNam').value);
    var ketQua_6=0;
    //in ra tháng đó có bao nhiêu ngày:
    if(inThang===2&&inNam%4===0&&inNam%100!=0){
        ketQua_6=29;
    }else{
        switch(inThang){
            case 1:{
                ketQua_6=31;
            break;
            }
            case 2:{
                ketQua_6=28;
                break;
            }
            case 3:{
                ketQua_6=31;
                break;
            }
            case 4:{
                ketQua_6=30;
                break;
            }
            case 5:{
                ketQua_6=31;
                break;
            }
            case 6:{
                ketQua_6=30;
                break;
            }
            case 7:{
                ketQua_6=31;
                break;
            }
            case 8:{
                ketQua_6=31;
                break;
            }
            case 9:{
                ketQua_6=30;
                break;
            }
            case 10:{
                ketQua_6=31;
                break;
            }
            case 11:{
                ketQua_6=30;
                break;
            }
            case 12:{
                ketQua_6=31;
                break;
            }

        }
    }
    document.getElementById('ketQua_b6').innerHTML='Tháng '+inThang+' năm '+inNam+' có '+ketQua_6;     
}
//Bài 7:
document.getElementById('btnDocSo').onclick=function(){
    //input
    var so3ChuSO=Number(document.getElementById('so3ChuSo').value);
    var ketQua_7='';
    var inDonVi=0;
    var inHangChuc=0;
    var inHangTram=0;
    var docTram='';
    var docChuc='';
    var docDv='';
    inDonVi=so3ChuSO%10;
    inHangChuc=Math.floor((so3ChuSO/10)%10);
    inHangTram=Math.floor(so3ChuSO/100);
    switch (inHangTram){
        case 1:{
            docTram='Một';
            break;
        }
        case 2:{
            docTram='Hai';
            break;
        }
        case 3:{
            docTram='Ba';
            break;
        }
        case 4:{
            docTram='Bốn';
            break;
        }
        case 5:{
            docTram='Năm';
            break;
        }
        case 6:{
            docTram='Sáu';
            break;
        }
        case 7:{
            docTram='Bảy';
            break;
        }
        case 8:{
            docTram='Tám';
            break;
        }
        case 9:{
            docTram='Chín';
            break;
        }
    }
    switch (inHangChuc){
        case 1:{
            docChuc='Một';
            break;
        }
        case 2:{
            docChuc='Hai';
            break;
        }
        case 3:{
            docChuc='Ba';
            break;
        }
        case 4:{
            docChuc='Bốn';
            break;
        }
        case 5:{
            docChuc='Năm';
            break;
        }
        case 6:{
            docChuc='Sáu';
            break;
        }
        case 7:{
            docChuc='Bảy';
            break;
        }
        case 8:{
            docChuc='Tám';
            break;
        }
        case 9:{
            docChuc='Chín';
            break;
        }
    }
    switch (inDonVi){
        case 1:{
            docDv='Một';
            break;
        }
        case 2:{
            docDv='Hai';
            break;
        }
        case 3:{
            docDv='Ba';
            break;
        }
        case 4:{
            docDv='Bốn';
            break;
        }
        case 5:{
            docDv='Năm';
            break;
        }
        case 6:{
            docDv='Sáu';
            break;
        }
        case 7:{
            docDv='Bảy';
            break;
        }
        case 8:{
            docDv='Tám';
            break;
        }
        case 9:{
            docDv='Chín';
            break;
        }
    }

    ketQua_7=docTram+' trăm '+docChuc+' mươi '+docDv;

    document.getElementById('ketQua_b7').innerHTML=ketQua_7;
}
//Bai Tập 8:
document.getElementById('btnTimToaDo').onclick=function(){
    
    var toaDoX1=Number(document.getElementById('toaDoX1').value);
    var toaDoX2=Number(document.getElementById('toaDoX2').value);
    var toaDoX3=Number(document.getElementById('toaDoX3').value);
    var toaDoY1=Number(document.getElementById('toaDoY1').value);
    var toaDoY2=Number(document.getElementById('toaDoY2').value);
    var toaDoY3=Number(document.getElementById('toaDoY3').value);
    var toaDoX=Number(document.getElementById('toaDoX').value);
    var toaDoY=Number(document.getElementById('toaDoY').value);
    var tenSv1=document.getElementById('sv1').value;
    var tenSv2=document.getElementById('sv2').value;
    var tenSv3=document.getElementById('sv3').value;
    var ketQua_8='';
    var d1=0;
    var d2=0;
    var d3=0;
    d1=Math.sqrt((toaDoX-toaDoX1)^2+(toaDoY-toaDoY1)^2);
    d2=Math.sqrt((toaDoX-toaDoX2)^2+(toaDoY-toaDoY2)^2);
    d3=Math.sqrt((toaDoX-toaDoX3)^2+(toaDoY-toaDoY3)^2);
    if(d1>d2&&d1>d3){
        ketQua_8=tenSv1;
    }else if(d2>d1&&d2>d3){
        ketQua_8=tenSv2;
    }else{
        ketQua_8=tenSv3;
    }
    document.getElementById('ketQua_b8').innerHTML='Sinh viên xa trường nhất là: '+ketQua_8;
    
}