import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css';

const logo = (props)=> (
    <div className={classes.Logo} >
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

/*Function Name= Logo
Description= Logo of the application
Coder Name= Sourav
Start Date= Sept 28th, 2020
End Date= Sept 28th, 2020
Code Approved= Sept 28th
Arguments= logo.css
Variables= "logo"
File Accessed= logo imported from a png
Error Handling=
Input= picture 
Output= logo placed in the application 

*/

export default logo;
