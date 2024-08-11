
//loops

    //calculate sum from 1 to 100

    sum = 0
    for ( let i = 1 ; i <= 100 ; i++){
        sum+=i
    }

    // console.log(sum)


//functions

    function calculateMul( a, b){
        mul = a * b
        return mul
    }

    // console.log(calculateMul(1,2))


//callbacks

    function add( arg1, arg2){
        sum = arg1 + arg2
        return sum
    }

    function sub( arg1, arg2){
        minus = arg1 - arg2
        return minus
    }

    function operate( arg1 , arg2 ,callback){

        console.log(callback)
        return callback(arg1 , arg2)

    }


    console.log(operate(1 ,2 , add))

    //Anonymus Functions  -- A Function which doesn't have a name

        //Example of anonymus function call in callbacks
        
        console.log(
            operate(1 ,2 , 
                function ( arg1, arg2){
                    minus = arg1 - arg2
                    return minus
                }
                )
            );




