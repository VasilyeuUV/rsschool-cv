![Uladzislau Vasilyeu](img/photo_2023-11-02.jpg)

**mr ULADZISLAY VASILYEU**
==========================

**Location:**   Hrodna, Republic of Belarus   
**Tel:**        +375 (25) 70-24-226   
**Email:**	    vasilyeu.uv@mail.ru   
**Discord:**    Vlad Vasilev (@VasilyeuUV)   
**LinkedIn:**	http://www.linkedin.com/in/uv257024226   
**GitHub:**	    https://github.com/VasilyeuUV   
     
## **FULL-STACK DEVELOPER** ##
> My main goal is professional development on the way to becoming a full-stack developer. I am motivated by a feeling of moral satisfaction when I see a positive result of my work and understand that it is useful. I am interested in the Internet of Things (IoT).


### ***Hard skills*** ###
-------------------
* **Core Experience:**
    - .Net, .Net Core, .Net Framework (C#), WPF (MVVM), WinForms/Telerik, XML, JSON
    - MSSQL, Entity Framework (EF6, EF Core)
* **Experience of different levels:**
	- ASP.NET Core;
	- C/C++11, Wiring; 
	- JavaScript, JQuery, React/Redux, Kendo UI;
	- HTML5, CSS3/LESS;
	- Dart/Flutter;
	- MySQL;
	- Delphi;
	- VBA, macros;
	- Microcontroller programming (Arduino, IoT)   
  
More details [**here**](https://drive.google.com/file/d/10RU6Mt26hfjN3W7A9fpETsXjP2vv7nOX/view?usp=sharing).


### ***Code examples*** ###
---------------------------
**JS:**
```javascript
/// Convert N x N array to single array
const snail = function (array) {
  const arr2 = [];
  while (true) {
    arr2.push(array.shift());
    if (array.length < 1)
      break;
    array = array[0].map((col, i) => array.map(row => row[row.length - i - 1]));
  }
  return [].concat(...arr2);
}
```

**C#:**
```c#
/// <summary>
/// Reverse string
/// </summary>
/// <param name="str">Source string</param>
/// <returns>Revert string</returns>
public static string? ReverseAll(this string? str)
{
    if (string.IsNullOrEmpty(str))
        return str;

    var charArray = str.ToCharArray();
    var length = charArray.Length / 2;

    for (var i = 0; i < length; i++)
    {
        char selectedChar = charArray[i];
        charArray[i] = charArray[^(i + 1)];
        charArray[^(i + 1)] = selectedChar;
    }
    return new string(charArray);
}
```
### ***Soft skills*** ###
-------------------
1. Psychological resistance to legacy code from February 2021.
1. A philosophical attitude towards code written by other developers.
1. Critical attitude towards the organization of the work process and professional relationships.
1. Extensive management experience (not in IT).
1. Practical experience in working with confidential information and documents containing state or commercial secrets.
1. Experience in remote work format – since 2014.


### ***Work history*** ###
--------------------
- **UNITEL ENGINEERING, Cheboksary, Russia — .Net developer** _(office, feb.2024 – jun.2024)_     
- **SYSTEM TECHNOLOGIES JLLC, Minsk, Republic of Belarus — .Net developer** _(remote/office, feb.2021 – jul.2023)_     
- **EPAM, Hrodna, Republic of Belarus - .Net developer trainee** —	_(office, mar.2020 – apr.2020)_ 

### ***Education*** ###
-----------------------
1. **State University of Grodno, Belarus** – Information Systems Software  engineer _(2009-2011)_
1. **Courses:**
   * **The Rolling Scopes School, 2023q4, online** – JS/Front-end	_(2023, stage-1)_;
   * **EPAM Training Center, Hrodna, Belarus** – Software Engineering in .NET	_(2020, 100h)_;
   * **Intexsoft, Hrodna, Belarus** – ReactJS/Redux -(2020, 60h)_;
   * **Computer Academy "IT STEP", Minsk, Belarus** – Software Development _(2015-2018)_;
   * **BELHARD, Minsk, Belarus** – Programming in PHP, basic _(2015, 68h)

### ***Languages*** ###
-----------------------
* Belarusian;
* Russian;
* English (A2)