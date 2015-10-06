var hours = process.argv[2];
var minutes = process.argv[3];
var I = ['_$$$$$$_',
         '___$$___',
         '___$$___',
         '___$$___',
         '_$$$$$$_',
         '________'];
                 

var II = ['_$$$$$$__$$$$$$_',
          '___$$______$$___',
          '___$$______$$___',
          '___$$______$$___',
          '_$$$$$$__$$$$$$_',
          '________________']
  

var III =['_$$$$$$__$$$$$$__$$$$$$_',
         '___$$______$$______$$___',
         '___$$______$$______$$___',
         '___$$______$$______$$___',
         '_$$$$$$__$$$$$$__$$$$$$_',
         '________________________'];
                                  

var IV = ['_$$$$$$__$$__$$_',
          '___$$____$$__$$_',
          '___$$____$$__$$_',
          '___$$_____$$$$__',
          '_$$$$$$____$$___',
          '________________'];
                             

var V = ['_$$__$$_',
         '_$$__$$_',
         '_$$__$$_', 
         '__$$$$__',
         '___$$___',
         '________'];


var VI = ['_$$__$$__$$$$$$_',
          '_$$__$$____$$___',  
          '_$$__$$____$$___',
          '__$$$$_____$$___',
          '___$$____$$$$$$_',
          '________________'];

var VII = ['_$$__$$__$$$$$$__$$$$$$_',
           '_$$__$$____$$______$$___',   
           '_$$__$$____$$______$$___',
           '__$$$$_____$$______$$___',
           '___$$____$$$$$$__$$$$$$_',
          '________________________' ];

var VIII = ['_$$__$$__$$$$$$__$$$$$$__$$$$$$_',
            '_$$__$$____$$______$$______$$___', 
            '_$$__$$____$$______$$______$$___',
            '__$$$$_____$$______$$______$$___',
            '___$$____$$$$$$__$$$$$$__$$$$$$_',
            '________________________________'];
                                             
var IX=['_$$$$$$__$$__$$_',
        '___$$_____$$$$__',
        '___$$______$$___',
        '___$$_____$$$$__', 
        '_$$$$$$__$$__$$_',
        '_______________'];
var X = ['_$$__$$_',
         '__$$$$__',
         '___$$___',
         '__$$$$__', 
         '_$$__$$_',
         '________'];

var XX =['_$$__$$__$$__$$_',
         '__$$$$____$$$$__',
         '___$$______$$___',  
         '__$$$$____$$$$__',
         '_$$__$$__$$__$$_',
         '________________'];

var XXX=['_$$__$$__$$__$$__$$__$$_',
         '__$$$$____$$$$____$$$$__',
         '___$$______$$______$$___', 
         '__$$$$____$$$$____$$$$__', 
         '_$$__$$__$$__$$__$$__$$_',
         '________________________'];

var XL=['_$$__$$__$$_____',
        '__$$$$___$$_____',
        '___$$____$$_____', 
        '__$$$$___$$_____',  
        '_$$__$$__$$$$$$_',
        '________________'];


var L= ['_$$_____',
        '_$$_____',
        '_$$_____',
        '_$$_____', 
        '_$$$$$$_',
        '________'];


var pointers=['___$$___',
              '________',
              '___$$___',
              '________',
              '________'];

var N = ['_$$__$$_',
         '_$$$_$$_',
         '_$$_$$$_', 
         '_$$__$$_',
         '_$$__$$_',
         '________'];             



function addition(second, first) {
    for (var i = 0; i < first.length; i++) {
        first[i] += second[i];
    }
    return first;
}


function additionOfNumbers(arabic) {
    var Spaces = ['', '', '', '', ''];

    switch (parseInt(arabic / 10)) {
        case 1:
            Spaces = addition(X, Spaces);
            break;
        case 2:
            Spaces = addition(XX, Spaces);
            break;
        case 3:
            Spaces = addition(XXX, Spaces);
            break;
        case 4:
            Spaces = addition(XL, Spaces);
            break;
        case 5:
            Spaces = addition(L, Spaces);
            break;
    }

    switch (arabic % 10) {
        case 1:
            Spaces = addition(I, Spaces);
            break;
        case 2:
            Spaces = addition(II, Spaces);
            break;
        case 3:
            Spaces = addition(III, Spaces);
            break;
        case 4:
            Spaces = addition(IV, Spaces);
            break;
        case 5:
            Spaces = addition(V, Spaces);
            break;
        case 6:
            Spaces = addition(VI, Spaces);
            break;
        case 7:
            Spaces = addition(VII, Spaces);
            break;
        case 8:
            Spaces = addition(VIII, Spaces);
            break;
        case 9:
            Spaces = addition(IX, Spaces);
            break;
    }

    return Spaces;

}


function RomanFulllementation() {
    if (hours == 0 || minutes == 0) {
        for (var i = 0; i < N.length; i++)
            console.log(N[i]);
        return;
    }

    if ((hours < 24 & hours > 0 & minutes < 60 & minutes > 0) && ((Number(minutes)^ 0) === Number(minutes) )&&((Number(hours)^ 0) === Number(hours))) {
        var RomanTimes = additionOfNumbers(hours);
        RomanTimes = addition(pointers, RomanTimes);
        RomanTimes = addition(additionOfNumbers(minutes), RomanTimes);
        for (var j = 0; j < RomanTimes.length; ++j) {
            console.log(RomanTimes[j]);
        }
        return;
    }

    console.log("Incorret typing");
    return;
}
RomanFulllementation();
