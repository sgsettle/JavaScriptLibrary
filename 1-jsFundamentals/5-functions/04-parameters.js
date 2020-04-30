//      keyword     name    parameter(s)
        function    hi        (name){
        console.log(`Hi, ${name}`);
        }

        hi('Jerome');
        hi(800);

        // parameter is a way to have function take in information

        /* 
        The parameter is just a placeholder variable for a value we do not know yet. Then when we call/invoke the function, we supply that value, and that is known as the argument
        */

        function fullName (firstName, lastName){
            console.log(`Hello, my name is ${firstName} ${lastName}`);
        }

        fullName('Slayde', 'Settle');